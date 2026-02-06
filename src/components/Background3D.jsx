import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars, Sphere, Float, Sparkles, MeshDistortMaterial } from '@react-three/drei';

function Planet({ position, size, color }) {
  const meshRef = useRef();

  useFrame((state, delta) => {
    meshRef.current.rotation.y += delta * 0.05;
    meshRef.current.rotation.x += delta * 0.02;
  });

  return (
    <group position={position}>
      <Float speed={1.5} rotationIntensity={1} floatIntensity={1}>
        <Sphere ref={meshRef} args={[size, 32, 32]}>
          <MeshDistortMaterial
            color={color}
            distort={0.4}
            speed={1.5}
            roughness={0.2}
          />
        </Sphere>
        {/* Glow / Atmosphere */}
        <Sphere args={[size * 1.2, 32, 32]}>
          <meshStandardMaterial
            color={color}
            transparent
            opacity={0.15}
            side={2} // DoubleSide
          />
        </Sphere>
      </Float>
    </group>
  );
}

// Parallax removed
export default function Background3D() {
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: -1,
      pointerEvents: 'none',
      background: '#030014' // Deep dark space blue
    }}>
      <Canvas
        camera={{ position: [0, 0, 10], fov: 45 }}
        dpr={[1, 1.5]} // Limit pixel ratio for performance
        gl={{ antialias: false, powerPreference: "high-performance" }}
      >
        {/* Environmental Lighting */}
        <ambientLight intensity={0.5} />
        <pointLight position={[20, 10, 10]} intensity={2} color="#8a2be2" />
        <pointLight position={[-20, -10, -10]} intensity={1} color="#00bfff" />

        {/* Deep Space Background */}
        <Stars
          radius={300}
          depth={50}
          count={1500} // Reduced for performance
          factor={4}
          saturation={0}
          fade
          speed={1}
        />

        {/* Floating Particles */}
        <Sparkles
          count={80} // Reduced for performance
          scale={[10, 10, 10]}
          size={2}
          speed={0.5}
          opacity={0.6}
          color="#ffffff"
        />

        {/* Main Planet (Purple/Alien) */}
        <Planet position={[6, 0, -5]} size={2.5} color="#4b0082" />

        {/* Distant Moon (Blue) */}
        <Planet position={[-7, 3, -10]} size={1.2} color="#00bfff" />

      </Canvas>
    </div>
  );
}
