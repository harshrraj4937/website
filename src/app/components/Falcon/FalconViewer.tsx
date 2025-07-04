// FalconViewer.tsx
import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { cameraKeyframes } from './cameraKeyframe';

export default function FalconViewer() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.outputColorSpace = THREE.SRGBColorSpace;
        renderer.shadowMap.enabled = true;
        renderer.shadowMap.type = THREE.PCFSoftShadowMap;
        renderer.setClearColor(0x000000, 0); // make transparent

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(80, window.innerWidth / window.innerHeight, 1, 1000);
        camera.position.set(-12.23, 16.37, -3.72);

        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;
        controls.enablePan = false;
        controls.target.set(0, 1, 0);

        const light = new THREE.SpotLight(0xffffff, 3000, 100, 0.53, 1);
        light.position.set(0, 55, 0);
        light.castShadow = true;
        scene.add(light);

        const loader = new GLTFLoader().setPath('/model/');
        loader.load('scene.gltf', (gltf) => {
            const mesh = gltf.scene;
            mesh.traverse((child) => {
                if (child instanceof THREE.Mesh) {
                    child.castShadow = true;
                    child.receiveShadow = true;
                }
            });
            mesh.position.set(0, 5, -5);
            scene.add(mesh);
        });

        const clock = new THREE.Clock();
        const animationDuration = 30;
        let animationTime = 0;

        const animate = () => {
            requestAnimationFrame(animate);
            const delta = clock.getDelta();
            animationTime += delta;
            const totalFrames = cameraKeyframes.length - 1;
            const progress = (animationTime / animationDuration) * totalFrames;
            const currentIndex = Math.floor(progress);
            const alpha = progress - currentIndex;

            if (currentIndex < totalFrames) {
                const a = cameraKeyframes[currentIndex];
                const b = cameraKeyframes[currentIndex + 1];

                camera.position.lerpVectors(
                    new THREE.Vector3(a.position.x, a.position.y, a.position.z),
                    new THREE.Vector3(b.position.x, b.position.y, b.position.z),
                    alpha
                );

                controls.target.lerpVectors(
                    new THREE.Vector3(a.target.x, a.target.y, a.target.z),
                    new THREE.Vector3(b.target.x, b.target.y, b.target.z),
                    alpha
                );

                controls.update();
            }

            renderer.render(scene, camera);
        };

        if (containerRef.current) {
            containerRef.current.appendChild(renderer.domElement);
        }

        window.addEventListener('resize', () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        });

        animate();

        return () => {
            renderer.dispose();
        };
    }, []);

    return <div ref={containerRef} className="w-full h-full" />;
}
