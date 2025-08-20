import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, Center } from '@react-three/drei';

function Model() {
    const { scene } = useGLTF('/model/scene.gltf');
    return (
        <Center>
            <primitive object={scene} scale={[20, 20, 20]} />
        </Center>
    );
}

export default function ModelViewer() {
    return (
        <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
            <ambientLight intensity={1} />
            <directionalLight position={[5, 5, 5]} intensity={1} />
            <Suspense fallback={null}>
                <Model />
            </Suspense>
            <OrbitControls enableZoom={false} enablePan={false} />
        </Canvas>
    );
}
