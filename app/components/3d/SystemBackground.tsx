"use client";
import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';

function generateSpherePositions(count: number, radius: number) {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
        const r = radius * Math.cbrt(Math.random());
        const theta = Math.random() * 2 * Math.PI;
        const phi = Math.acos(2 * Math.random() - 1);

        positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
        positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
        positions[i * 3 + 2] = r * Math.cos(phi);
    }
    return positions;
}

function Meteor({ speed = 1, ...props }: any) {
    const mesh = useRef<any>(null);

    useFrame((state, delta) => {
        if (!mesh.current) return;
        mesh.current.position.y -= speed * delta * 2; // Slower meteors
        mesh.current.position.x -= speed * delta * 2;

        if (mesh.current.position.y < -10) {
            mesh.current.position.y = 10;
            mesh.current.position.x = 10;
        }
    });

    return (
        <mesh ref={mesh} {...props}>
            <sphereGeometry args={[0.005, 8, 8]} />
            <meshBasicMaterial color="#4A70A9" opacity={0.5} transparent />
        </mesh>
    );
}

export default function SystemBackground() {
    return (
        <div className="fixed inset-0 z-0 pointer-events-none bg-black">
            <Canvas dpr={[1, 1.5]} gl={{ powerPreference: "high-performance", antialias: false }} camera={{ position: [0, 0, 1] }}>
                <color attach="background" args={['#030303']} />
                <Stars />
                {/* Reduced Meteor Count */}
                <Meteor position={[5, 5, 0]} speed={0.2} />
                <Meteor position={[2, 8, 0]} speed={0.4} />
            </Canvas>
        </div>
    );
}

function Stars(props: any) {
    const ref = useRef<any>(null);

    // Reduced star count significantly for a cleaner, professional look
    const sphere = useMemo(() => generateSpherePositions(800, 2), []);

    useFrame((state, delta) => {
        if (ref.current) {
            ref.current.rotation.x -= delta / 20; // Slower rotation
            ref.current.rotation.y -= delta / 30;
        }
    });

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
                <PointMaterial
                    transparent
                    color="#ffffff"
                    size={0.0015} // Smaller stars
                    sizeAttenuation={true}
                    depthWrite={false}
                    opacity={0.6} // Dimmmer
                />
            </Points>
        </group>
    );
}
