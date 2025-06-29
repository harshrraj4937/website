import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { cameraKeyframes } from './cameraKeyframe'

export default function FalconViewer() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(80, window.innerWidth / window.innerHeight, 1, 1000);
        camera.position.set(-12.23, 16.37, -3.72);
        camera.lookAt(0, 0, 0);

        const renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.outputColorSpace = THREE.SRGBColorSpace;
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.shadowMap.enabled = true;
        renderer.shadowMap.type = THREE.PCFSoftShadowMap;

        const container = containerRef.current;
        if (container) {
            container.appendChild(renderer.domElement);
        }

        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;
        controls.enablePan = false;
        controls.minDistance = 5;
        controls.maxDistance = 20;
        controls.minPolarAngle = 0.5;
        controls.maxPolarAngle = 1.5;
        controls.autoRotate = false;
        controls.target = new THREE.Vector3(0, 1, 0);

        const ground = new THREE.Mesh(
            new THREE.PlaneGeometry(20, 20).rotateX(-Math.PI / 2),
            new THREE.MeshStandardMaterial({ color: 0x555555, side: THREE.DoubleSide })
        );
        ground.receiveShadow = true;
        scene.add(ground);

        const spotLight = new THREE.SpotLight(0xffffff, 3000, 100, 0.53, 1);
        spotLight.position.set(0, 55, 0);
        spotLight.castShadow = true;
        spotLight.shadow.bias = -0.0001;
        scene.add(spotLight);

        const loader = new GLTFLoader();
        loader.setPath('/model/');
        loader.load('scene.gltf', (gltf) => {
            const mesh = gltf.scene;
            mesh.traverse((child) => {
                if ((child as THREE.Mesh).isMesh) {
                    (child as THREE.Mesh).castShadow = true;
                    (child as THREE.Mesh).receiveShadow = true;
                }
            });
            mesh.position.set(0, 5, -5);
            scene.add(mesh);
            animate();
        });

        const clock = new THREE.Clock();
        let animationTime = 0;
        const animationDuration = 30;

        function animate() {
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

                camera.position.lerpVectors(new THREE.Vector3(a.position.x, a.position.y, a.position.z), new THREE.Vector3(b.position.x, b.position.y, b.position.z), alpha);
                controls.target.lerpVectors(new THREE.Vector3(a.target.x, a.target.y, a.target.z), new THREE.Vector3(b.target.x, b.target.y, b.target.z), alpha);
                controls.update();
            }

            renderer.render(scene, camera);
        return () => {
            renderer.dispose();
            if (container && renderer.domElement.parentNode === container) {
                container.removeChild(renderer.domElement);
            }
        };
        };
    }, []);

    return <div ref={containerRef} style={{ width: '100%', height: '100vh' }} />;
}
