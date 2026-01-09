import { useRef, useMemo, useState, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { 
  Float, 
  Environment, 
  ContactShadows, 
  PerspectiveCamera,
  Sphere,
  PerformanceMonitor,
  Bvh
} from "@react-three/drei";
import * as THREE from "three";

// Shared Geometry for performance
const TORUS_GEOM = new THREE.TorusGeometry(1, 0.4, 16, 50);
const CYLINDER_GEOM = new THREE.CylinderGeometry(0.2, 0.2, 4, 32);
const HEX_GEOM = new THREE.TorusGeometry(0.3, 0.15, 6, 6);

// Individual Pipe Segment component
function PipeSegment({ position, rotation, scale, color = "#1e40af" }: any) {
  const mesh = useRef<THREE.Mesh>(null!);
  
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    mesh.current.rotation.x = Math.sin(time / 4) * 0.2;
    mesh.current.rotation.y = Math.cos(time / 4) * 0.2;
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh ref={mesh} position={position} rotation={rotation} scale={scale} geometry={TORUS_GEOM}>
        <meshStandardMaterial 
          color={color} 
          metalness={0.8} 
          roughness={0.2} 
        />
      </mesh>
    </Float>
  );
}

// Structural Cylinder component
function IndustrialRod({ position, rotation, scale }: any) {
  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
      <mesh position={position} rotation={rotation} scale={scale} geometry={CYLINDER_GEOM}>
        <meshStandardMaterial 
          color="#334155" 
          metalness={0.9} 
          roughness={0.1} 
        />
      </mesh>
    </Float>
  );
}

interface Background3DProps {
  preset?: 'hero' | 'products' | 'features' | 'profile' | 'clients' | 'contact';
}

// Hex Nut component
function HexNut({ position, rotation, scale }: any) {
  return (
    <Float speed={3} rotationIntensity={2} floatIntensity={5}>
      <mesh position={position} rotation={rotation} scale={scale} geometry={HEX_GEOM}>
        <meshStandardMaterial 
          color="#94a3b8" 
          metalness={1} 
          roughness={0.1} 
        />
      </mesh>
    </Float>
  );
}

function Scene({ preset = 'hero' }: { preset: string }) {
  const { mouse } = useThree();
  const group = useRef<THREE.Group>(null!);

  useFrame((state) => {
    const x = (mouse.x * state.viewport.width) / 20;
    const y = (mouse.y * state.viewport.height) / 20;
    group.current.position.set(x, y, 0);
    group.current.rotation.set(-y / 10, x / 10, 0);
  });

  const config = useMemo(() => {
    switch (preset) {
      case 'products': return { color: '#1e3a8a', count: 5, density: 1.2 };
      case 'features': return { color: '#3b82f6', count: 4, density: 1.5 };
      case 'profile': return { color: '#64748b', count: 3, density: 0.8 };
      case 'contact': return { color: '#1e40af', count: 4, density: 1 };
      default: return { color: '#2563EB', count: 3, density: 1 };
    }
  }, [preset]);

  return (
    <Bvh firstHitOnly>
      <group ref={group}>
        {Array.from({ length: config.count }).map((_, i) => (
          <PipeSegment 
            key={i}
            position={[(Math.random() - 0.5) * 15, (Math.random() - 0.5) * 10, -Math.random() * 10 - 2]} 
            rotation={[Math.random() * Math.PI, Math.random() * Math.PI, 0]} 
            scale={0.5 + Math.random() * config.density} 
            color={config.color} 
          />
        ))}
        
        <IndustrialRod position={[4, 5, -6]} rotation={[0.5, 0.5, 0.5]} scale={1.2} />
        <IndustrialRod position={[-5, -2, -3]} rotation={[0, 0, Math.PI / 2]} scale={0.8} />
        
        <Float speed={5} floatIntensity={10}>
          <Sphere position={[2, -2, -2]} args={[0.3, 16, 16]}>
            <meshStandardMaterial color="#64748B" metalness={1} roughness={0} />
          </Sphere>
        </Float>

        <HexNut position={[-3, -3, -1]} rotation={[1, 1, 1]} scale={1} />
        <HexNut position={[6, 2, -3]} rotation={[0.5, 0.2, 0.8]} scale={0.8} />
        <HexNut position={[-7, 4, -5]} rotation={[0, 0, 0]} scale={1.2} />

        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={2} castShadow={false} />
        <pointLight position={[-10, -10, -10]} intensity={1} color={config.color} />
        <ambientLight intensity={0.2} />
        
        <Environment preset="city" />
        <ContactShadows position={[0, -10, 0]} opacity={0.4} scale={20} blur={2} far={20} />
      </group>
    </Bvh>
  );
}

export default function Background3D({ preset = 'hero' }: Background3DProps) {
  const [dpr, setDpr] = useState(1);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(preset === 'hero');

  useEffect(() => {
    if (preset === 'hero') return;
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [preset]);

  return (
    <div ref={containerRef} className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
      {isVisible && (
        <Canvas shadows={false} dpr={dpr}>
          <PerformanceMonitor onDecline={() => setDpr(1)} onIncline={() => setDpr(2)} />
          <PerspectiveCamera makeDefault position={[0, 0, 10]} fov={50} />
          <color attach="background" args={["#000a12"]} />
          <fog attach="fog" args={["#000a12", 10, 25]} />
          <Scene preset={preset} />
        </Canvas>
      )}
      <div className="absolute inset-0 bg-black/40 pointer-events-none"></div>
    </div>
  );
}
