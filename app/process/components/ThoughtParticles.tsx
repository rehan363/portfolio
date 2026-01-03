"use client";
import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

function generateDataStream(count: number) {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
        positions[i * 3] = (Math.random() - 0.5) * 10;
        positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
        positions[i * 3 + 2] = (Math.random() - 0.5) * 5;
    }
    return positions;
}

function ThoughtStream() {
    const ref = useRef<any>(null);
    const positions = useMemo(() => generateDataStream(2000), []);

    useFrame((state, delta) => {
        if (ref.current) {
            ref.current.rotation.y += delta * 0.05;
            ref.current.rotation.x += delta * 0.02;

            // Pulse effect
            const scale = 1 + Math.sin(state.clock.elapsedTime * 0.5) * 0.05;
            ref.current.scale.set(scale, scale, scale);
        }
    });

    return (
        <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
            <PointMaterial
                transparent
                color="#D10000"
                size={0.015}
                sizeAttenuation={true}
                depthWrite={false}
                opacity={0.6}
            />
        </Points>
    );
}

function DataNodes() {
    const ref = useRef<any>(null);

    useFrame((state) => {
        if (ref.current) {
            ref.current.children.forEach((child: THREE.Object3D, i: number) => {
                child.position.y = Math.sin(state.clock.elapsedTime + i) * 0.3;
            });
        }
    });

    const nodes = useMemo(() => {
        return Array.from({ length: 8 }, (_, i) => ({
            position: [
                (Math.random() - 0.5) * 6,
                (Math.random() - 0.5) * 4,
                (Math.random() - 0.5) * 3
            ] as [number, number, number]
        }));
    }, []);

    return (
        <group ref={ref}>
            {nodes.map((node, i) => (
                <mesh key={i} position={node.position}>
                    <octahedronGeometry args={[0.05, 0]} />
                    <meshBasicMaterial color="#ffffff" wireframe />
                </mesh>
            ))}
        </group>
    );
}

function ConnectionLines() {
    const ref = useRef<any>(null);

    useFrame((state) => {
        if (ref.current) {
            ref.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.2) * 0.1;
        }
    });

    const lines = useMemo(() => {
        const geometry = new THREE.BufferGeometry();
        const positions: number[] = [];

        for (let i = 0; i < 15; i++) {
            const x1 = (Math.random() - 0.5) * 8;
            const y1 = (Math.random() - 0.5) * 6;
            const z1 = (Math.random() - 0.5) * 4;
            const x2 = (Math.random() - 0.5) * 8;
            const y2 = (Math.random() - 0.5) * 6;
            const z2 = (Math.random() - 0.5) * 4;

            positions.push(x1, y1, z1, x2, y2, z2);
        }

        geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
        return geometry;
    }, []);

    return (
        <lineSegments ref={ref} geometry={lines}>
            <lineBasicMaterial color="#D10000" transparent opacity={0.1} />
        </lineSegments>
    );
}

export default function ThoughtParticles() {
    return (
        <div className="fixed inset-0 z-0 pointer-events-none">
            <Canvas camera={{ position: [0, 0, 4], fov: 60 }}>
                <color attach="background" args={['#030303']} />
                <fog attach="fog" args={['#030303', 3, 10]} />
                <ThoughtStream />
                <DataNodes />
                <ConnectionLines />
            </Canvas>
        </div>
    );
}
