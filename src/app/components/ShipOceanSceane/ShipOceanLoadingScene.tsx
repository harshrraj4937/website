// ShipOceanLoadingScene.tsx
import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars } from '@react-three/drei';
import * as THREE from 'three';


function Spinner() {
    const spriteRef = useRef<THREE.Sprite | null>(null);

    useEffect(() => {
        const textureLoader = new THREE.TextureLoader();
        textureLoader.load('/spin-wheel-x.png', (texture) => {
            const material = new THREE.SpriteMaterial({
                map: texture,
                transparent: true,
            });
            const sprite = new THREE.Sprite(material);
            sprite.scale.set(2, 2, 1); // Adjust to your liking
            sprite.position.set(0, 2.5, 0); // Center above the ship
            spriteRef.current = sprite;
        });
    }, []);
    const ROTATION_SPEED = 0.03; // radians per frame — adjust this
    useFrame(() => {
        if (spriteRef.current) {
            spriteRef.current.material.rotation -= ROTATION_SPEED;
        }
    });

    return spriteRef.current ? <primitive object={spriteRef.current} /> : null;
}


export default function ShipOceanLoadingScene() {
    return (
        <Canvas camera={{ position: [0, 5, 10], fov: 60 }}>
            <Spinner/>
            <ambientLight intensity={0.6} />
            <directionalLight position={[10, 10, 5]} intensity={1} />
            <Stars radius={100} depth={50} count={5000} factor={4} fade />
        </Canvas>
    );
}
