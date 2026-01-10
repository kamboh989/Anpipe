import { useRef, useMemo, useState, Suspense } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { 
  Float, 
  PerspectiveCamera,
  PerformanceMonitor,
  Bvh,
  Sparkles,
  MeshDistortMaterial
} from "@react-three/drei";
import * as THREE from "three";

// --- High-Fidelity Industrial Geometries ---

const TORUS_GEOM = new THREE.TorusGeometry(1.5, 0.4, 32, 100);
const CYLINDER_GEOM = new THREE.CylinderGeometry(0.5, 0.5, 12, 32);
const BEAM_GEOM = new THREE.BoxGeometry(0.4, 20, 0.4);
const HEX_GEOM = new THREE.TorusGeometry(0.8, 0.3, 6, 6);
const SHARD_GEOM = new THREE.OctahedronGeometry(2, 0);

// Mechanical Turbine (Large Focal Point)
function MechanicalTurbine({ position, rotation, scale, color = "#2563EB" }: any) {
  const group = useRef<THREE.Group>(null!);
  
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    group.current.rotation.z = time * 0.5;
  });

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
      <group ref={group} position={position} rotation={rotation} scale={scale}>
        <mesh geometry={TORUS_GEOM}>
          <meshStandardMaterial color={color} metalness={1} roughness={0.1} emissive={color} emissiveIntensity={0.2} />
        </mesh>
        {[...Array(8)].map((_, i) => (
          <mesh 
            key={i} 
            geometry={new THREE.BoxGeometry(0.1, 1.2, 0.4)} 
            position={[Math.cos(i * Math.PI / 4) * 1.5, Math.sin(i * Math.PI / 4) * 1.5, 0]}
            rotation={[0, 0, i * Math.PI / 4]}
          >
            <meshStandardMaterial color="#475569" metalness={1} roughness={0.2} />
          </mesh>
        ))}
      </group>
    </Float>
  );
}

// Structural Scaffold (Immersive Depth)
function StructuralScaffold({ position, rotation, scale }: any) {
  return (
    <group position={position} rotation={rotation} scale={scale}>
      <mesh geometry={BEAM_GEOM} position={[2, 0, 0]}>
        <meshStandardMaterial color="#1e293b" metalness={1} roughness={0.3} />
      </mesh>
      <mesh geometry={BEAM_GEOM} position={[-2, 0, 0]}>
        <meshStandardMaterial color="#1e293b" metalness={1} roughness={0.3} />
      </mesh>
      <mesh geometry={BEAM_GEOM} rotation={[0, 0, Math.PI / 2]} scale={[1, 0.2, 1]}>
        <meshStandardMaterial color="#1e293b" metalness={1} roughness={0.3} />
      </mesh>
      <mesh geometry={BEAM_GEOM} rotation={[0, 0, Math.PI / 4]} scale={[1, 0.3, 1]}>
        <meshStandardMaterial color="#2563eb" metalness={1} roughness={0.1} opacity={0.5} transparent />
      </mesh>
    </group>
  );
}

// Pipe Connector (Detailed Asset)
function PipeConnector({ position, rotation, scale, color = "#94a3b8" }: any) {
  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <group position={position} rotation={rotation} scale={scale}>
        <mesh geometry={CYLINDER_GEOM}>
          <meshStandardMaterial color={color} metalness={1} roughness={0.1} />
        </mesh>
        <mesh geometry={HEX_GEOM} position={[0, 3, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <meshStandardMaterial color="#475569" metalness={1} roughness={0.2} />
        </mesh>
        <mesh geometry={HEX_GEOM} position={[0, -3, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <meshStandardMaterial color="#475569" metalness={1} roughness={0.2} />
        </mesh>
      </group>
    </Float>
  );
}

interface Background3DProps {
  preset?: 'hero' | 'products' | 'features' | 'profile' | 'clients' | 'contact' | 'catalogue';
}

function Scene({ preset = 'hero' }: { preset: string }) {
  const { mouse } = useThree();
  const group = useRef<THREE.Group>(null!);

  useFrame((state) => {
    const x = (mouse.x * state.viewport.width) / 8;
    const y = (mouse.y * state.viewport.height) / 8;
    group.current.position.x = THREE.MathUtils.lerp(group.current.position.x, x, 0.05);
    group.current.position.y = THREE.MathUtils.lerp(group.current.position.y, y, 0.05);
    
    const time = state.clock.getElapsedTime();
    group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, Math.sin(time * 0.1) * 0.05, 0.05);
    group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, Math.cos(time * 0.1) * 0.05, 0.05);
  });

  const config = useMemo(() => {
    const base: Record<string, { color: string; accent: string; density: number }> = {
      hero:     { color: '#2563eb', accent: '#3b82f6', density: 1.0 },
      features: { color: '#3b82f6', accent: '#60a5fa', density: 1.2 },
      profile:  { color: '#475569', accent: '#94a3b8', density: 0.8 },
      products: { color: '#1d4ed8', accent: '#2563eb', density: 1.5 },
      clients:  { color: '#1e3a8a', accent: '#3b82f6', density: 1.0 },
      contact:  { color: '#2563eb', accent: '#1e40af', density: 1.2 },
      catalogue:{ color: '#3b82f6', accent: '#2563eb', density: 1.0 }
    };
    return base[preset] || base.hero;
  }, [preset]);

  return (
    <Bvh firstHitOnly>
      <group ref={group}>
        {/* Foundation: Scaffolding Grid */}
        <StructuralScaffold position={[15, 0, -10]} rotation={[0, 0, 0]} scale={[1.5, 1.5, 1.5]} />
        <StructuralScaffold position={[-15, 0, -15]} rotation={[0, -Math.PI / 4, 0]} scale={[2, 2, 2]} />
        <StructuralScaffold position={[0, 15, -20]} rotation={[Math.PI / 2, 0, 0]} scale={[3, 1, 1]} />

        {/* Section Focal Points */}
        {preset === 'hero' && (
          <>
            <MechanicalTurbine position={[8, 4, 0]} scale={[1.2, 1.2, 1.2]} color={config.color} />
            <PipeConnector position={[-10, -5, -5]} rotation={[0.5, 0.5, 0]} scale={[1.5, 1.5, 1.5]} color={config.accent} />
          </>
        )}

        {preset === 'features' && (
          <>
            <MechanicalTurbine position={[-12, 6, 0]} scale={2} color={config.color} />
            <PipeConnector position={[10, -8, -5]} rotation={[Math.PI / 4, 0, Math.PI / 2]} scale={2} color={config.accent} />
          </>
        )}

        {preset === 'products' && (
          <group>
            {[...Array(5)].map((_, i) => (
              <PipeConnector 
                key={i} 
                position={[(i - 2) * 8, Math.sin(i) * 5, -10]} 
                rotation={[Math.random() * Math.PI, 0, 0]} 
                scale={1.5} 
                color={config.color} 
              />
            ))}
          </group>
        )}

        {preset === 'profile' && (
          <>
            <MechanicalTurbine position={[12, 0, -5]} scale={3} color={config.color} />
            <StructuralScaffold position={[-10, 5, -8]} rotation={[0, Math.PI / 4, 0]} scale={[2, 2, 2]} />
          </>
        )}

        {preset === 'clients' && (
          <group>
            {[...Array(12)].map((_, i) => (
              <mesh 
                key={i} 
                position={[Math.cos(i * 0.5) * 15, Math.sin(i * 0.5) * 15, -10]} 
                geometry={HEX_GEOM}
              >
                <meshStandardMaterial color={config.color} metalness={1} roughness={0.1} />
              </mesh>
            ))}
          </group>
        )}

        {preset === 'contact' && (
          <>
            <MechanicalTurbine position={[0, 0, -15]} scale={5} color={config.accent} />
            <PipeConnector position={[12, 8, -5]} scale={1.2} color={config.color} />
            <PipeConnector position={[-12, -8, -5]} scale={1.2} color={config.color} />
          </>
        )}

        {preset === 'catalogue' && (
          <>
            <StructuralScaffold position={[0, 0, -10]} rotation={[Math.PI / 4, 0, Math.PI / 4]} scale={[4, 1, 1]} />
            <MechanicalTurbine position={[15, -10, 0]} scale={2} color={config.accent} />
          </>
        )}

        {/* Dynamic Detail Layer (Dust/Sparkles) */}
        <Sparkles 
          count={200} 
          scale={[50, 40, 30]} 
          size={8} 
          speed={1} 
          color={config.color} 
          opacity={0.4} 
        />

        {/* Environmental Shards */}
        {[...Array(6)].map((_, i) => (
          <Float key={i} speed={3} rotationIntensity={2} floatIntensity={3}>
            <mesh 
              position={[(Math.random() - 0.5) * 40, (Math.random() - 0.5) * 30, -20]} 
              rotation={[Math.random(), Math.random(), 0]}
              geometry={SHARD_GEOM}
            >
              <MeshDistortMaterial color={config.color} speed={2} distort={0.4} metalness={1} roughness={0.1} />
            </mesh>
          </Float>
        ))}

        {/* Cinematic Studio Lighting */}
        <ambientLight intensity={0.4} />
        <spotLight position={[20, 20, 20]} angle={0.3} penumbra={1} intensity={2} color={config.color} />
        <pointLight position={[-20, -20, -10]} intensity={3} color={config.accent} />
        <hemisphereLight intensity={0.5} color={config.color} groundColor="#000000" />
      </group>
    </Bvh>
  );
}

export default function Background3D({ preset = 'hero' }: Background3DProps) {
  const [dpr, setDpr] = useState(1);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#020617]">
      <Canvas 
        shadows={false} 
        dpr={dpr}
        gl={{ 
          antialias: true, 
          powerPreference: "high-performance",
          alpha: true 
        }}
      >
        <PerformanceMonitor onDecline={() => setDpr(1)} onIncline={() => setDpr(1.5)} />
        <PerspectiveCamera makeDefault position={[0, 0, 25]} fov={45} />
        <fog attach="fog" args={["#020617", 10, 60]} />
        <Suspense fallback={null}>
          <Scene preset={preset} />
        </Suspense>
      </Canvas>
      {/* Readability Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60 pointer-events-none"></div>
    </div>
  );
}
