import { useRef, Suspense, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { 
  Float, 
  PerspectiveCamera,
  MeshReflectorMaterial,
  Sparkles,
  PerformanceMonitor
} from "@react-three/drei";
import * as THREE from "three";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { Award, Shield, Package, Truck, ArrowRight } from "lucide-react";

// --- Industrial Assets ---

const PIPE_GEOM = new THREE.CylinderGeometry(0.5, 0.5, 10, 32);
const JOINT_GEOM = new THREE.TorusGeometry(0.6, 0.2, 16, 32);
const BEAM_GEOM = new THREE.BoxGeometry(0.5, 20, 0.5);

function PipeBundle({ position, rotation, color = "#94a3b8" }: any) {
  return (
    <group position={position} rotation={rotation}>
      <mesh geometry={PIPE_GEOM}>
        <meshStandardMaterial color={color} metalness={1} roughness={0.1} />
      </mesh>
      <mesh geometry={PIPE_GEOM} position={[0.6, 0, 0]}>
        <meshStandardMaterial color={color} metalness={1} roughness={0.1} />
      </mesh>
      <mesh geometry={PIPE_GEOM} position={[-0.6, 0, 0]}>
        <meshStandardMaterial color={color} metalness={1} roughness={0.1} />
      </mesh>
      <mesh geometry={JOINT_GEOM} rotation={[Math.PI / 2, 0, 0]} position={[0, 3, 0]}>
        <meshStandardMaterial color="#475569" metalness={1} roughness={0.2} />
      </mesh>
      <mesh geometry={JOINT_GEOM} rotation={[Math.PI / 2, 0, 0]} position={[0, -3, 0]}>
        <meshStandardMaterial color="#475569" metalness={1} roughness={0.2} />
      </mesh>
    </group>
  );
}

function IndustrialCage() {
  return (
    <group>
      <mesh position={[10, 0, -10]} geometry={BEAM_GEOM}>
        <meshStandardMaterial color="#1e293b" metalness={1} roughness={0.3} />
      </mesh>
      <mesh position={[-10, 0, -10]} geometry={BEAM_GEOM}>
        <meshStandardMaterial color="#1e293b" metalness={1} roughness={0.3} />
      </mesh>
      <mesh position={[0, 10, -10]} geometry={BEAM_GEOM} rotation={[0, 0, Math.PI / 2]} scale={[1, 2, 1]}>
        <meshStandardMaterial color="#1e293b" metalness={1} roughness={0.3} />
      </mesh>
      <mesh position={[0, -10, -10]} geometry={BEAM_GEOM} rotation={[0, 0, Math.PI / 2]} scale={[1, 2, 1]}>
        <meshStandardMaterial color="#1e293b" metalness={1} roughness={0.3} />
      </mesh>
    </group>
  );
}

function FloatingLogo() {
  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={1}>
      <mesh rotation={[0, 0, 0]}>
        <octahedronGeometry args={[1.5, 0]} />
        <meshStandardMaterial color="#2563eb" metalness={1} roughness={0} emissive="#2563eb" emissiveIntensity={0.8} />
      </mesh>
    </Float>
  );
}

// --- Scene Logic ---

function Scene({ progress }: { progress: any }) {
  const group = useRef<THREE.Group>(null!);

  useFrame((state) => {
    // Smooth movement based on external progress
    group.current.position.y = THREE.MathUtils.lerp(group.current.position.y, progress.get() * 70, 0.1);
    
    const time = state.clock.getElapsedTime();
    group.current.rotation.y = Math.sin(time * 0.1) * 0.03;
  });

  return (
    <group ref={group}>
      <IndustrialCage />

      {/* STAGE 1: HERO */}
      <group position={[0, 0, 0]}>
        <Float speed={3} rotationIntensity={0.5} floatIntensity={1}>
          <group rotation={[0.2, 0.4, 0.8]}>
            <PipeBundle position={[3, 2, 2]} color="#3b82f6" />
            <PipeBundle position={[-3, -2, -2]} color="#2563eb" rotation={[0, 0, Math.PI / 6]} />
          </group>
        </Float>
        <Sparkles count={100} scale={[30, 30, 30]} size={8} speed={0.8} opacity={0.4} color="#3b82f6" />
      </group>

      {/* STAGE 2: PRODUCT RANGE */}
      <group position={[0, -20, -10]}>
        <Float speed={4} rotationIntensity={1.5} floatIntensity={1}>
          <group rotation={[Math.PI / 3, 0.2, 0]}>
             {[0.2, 0.4, 0.6, 1.2, 1.5].map((s, i) => (
                <mesh key={i} geometry={new THREE.CylinderGeometry(s, s, 12)} position={[(i - 2) * 2.5, 0, 0]}>
                  <meshStandardMaterial color={i === 3 ? "#3b82f6" : "#cbd5e1"} metalness={1} roughness={0.05} />
                </mesh>
             ))}
          </group>
        </Float>
      </group>

      {/* STAGE 3: LOGISTICS */}
      <group position={[0, -42, 0]}>
         <Float speed={2} rotationIntensity={0.1} floatIntensity={2}>
           <group>
              <mesh position={[0, 0, 0]}>
                <boxGeometry args={[20, 0.4, 6]} />
                <meshStandardMaterial color="#0f172a" metalness={1} roughness={0.2} />
              </mesh>
              <PipeBundle position={[0, 2, 0]} rotation={[0, 0, Math.PI / 2]} scale={[0.8, 0.8, 0.8]} color="#3b82f6" />
           </group>
         </Float>
      </group>

      {/* STAGE 4: QUALITY */}
      <group position={[0, -65, 0]}>
         <FloatingLogo />
         <group position={[0, -4, 0]}>
            <mesh rotation={[-Math.PI / 2, 0, 0]}>
              <circleGeometry args={[10, 64]} />
              <MeshReflectorMaterial
                mirror={1}
                blur={[300, 100]}
                resolution={1024}
                mixBlur={1}
                mixStrength={60}
                roughness={1}
                depthScale={1.2}
                minDepthThreshold={0.4}
                maxDepthThreshold={1.4}
                color="#050505"
                metalness={1}
              />
            </mesh>
         </group>
      </group>

      {/* Robust Local Lighting Studio (No external HDR needed) */}
      <hemisphereLight intensity={0.5} color="#ffffff" groundColor="#000000" />
      <ambientLight intensity={0.2} />
      <spotLight position={[20, 20, 20]} angle={0.2} penumbra={1} intensity={5} castShadow />
      <pointLight position={[-20, -20, -10]} intensity={3} color="#3b82f6" />
      <pointLight position={[20, -10, 15]} intensity={2} color="#ffffff" />
      <pointLight position={[0, -30, 20]} intensity={4} color="#3b82f6" />
      <pointLight position={[0, -60, 10]} intensity={5} color="#ffffff" />
    </group>
  );
}

// --- HTML Overlays ---

function HTMLOverlay({ progress }: { progress: any }) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    return progress.on("change", (v: number) => {
      if (v < 0.15) setActive(0);
      else if (v < 0.4) setActive(1);
      else if (v < 0.65) setActive(2);
      else setActive(3);
    });
  }, [progress]);

  const stages = [
    {
      badge: "ISO 9001:2008 Certified",
      icon: <Award className="w-5 h-5" />,
      title: "Leading Steel Pipe Manufacturer",
      desc: "Delivering premium quality steel pipes and tubes since 1991. Trusted by industry leaders across Pakistan.",
      cta: "View Products"
    },
    {
      badge: "Extensive Range",
      icon: <Package className="w-5 h-5" />,
      title: "Precision Product Engineering",
      desc: "From galvanized iron to ERW steel and scaffolding tubes, our range meets every project requirement.",
      cta: "Explore Range"
    },
    {
      badge: "Global Logistics",
      icon: <Truck className="w-5 h-5" />,
      title: "Secure & Timely Delivery",
      desc: "With an efficient global supply chain, we ensure your orders arrive safely and promptly.",
      cta: "Delivery Info"
    },
    {
      badge: "Quality First",
      icon: <Shield className="w-5 h-5" />,
      title: "Certified Excellence",
      desc: "Manufactured from prime materials and certified to international standards for unmatched reliability.",
      cta: "Get Quote"
    }
  ];

  return (
    <div className="absolute inset-0 w-full pointer-events-none">
      {/* Blueprint Grid Overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{
         backgroundImage: 'linear-gradient(rgba(37, 99, 235, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(37, 99, 235, 0.5) 1px, transparent 1px)',
         backgroundSize: '100px 100px'
      }}></div>

      {stages.map((stage, i) => (
        <div
          key={i}
          className="absolute inset-0 flex items-center px-10 sm:px-20 lg:px-32"
        >
          <AnimatePresence mode="wait">
            {active === i && (
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 100 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="max-w-4xl space-y-10 pointer-events-auto"
              >
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="inline-flex items-center gap-3 px-6 py-2.5 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full text-primary text-xs font-black uppercase tracking-[0.4em]"
                >
                  <div className="w-2 h-2 rounded-full bg-primary shadow-[0_0_10px_rgba(37,99,235,1)]"></div>
                  {stage.badge}
                </motion.div>

                <h1 className="text-4xl sm:text-6xl md:text-8xl font-black text-white leading-[1.1] md:leading-[0.85] font-heading uppercase tracking-tighter">
                  {stage.title.split(' ').map((word, idx) => (
                    <span key={idx} className={idx % 2 === 0 ? "" : "text-transparent bg-clip-text bg-gradient-to-b from-primary to-blue-400"}>
                      {word}{' '}
                    </span>
                  ))}
                </h1>

                <p className="text-base sm:text-xl text-gray-400 font-light leading-relaxed max-w-xl">
                  {stage.desc}
                </p>

                <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-10 pt-6 pointer-events-auto">
                  <button 
                    onClick={() => {
                      const mapping: Record<number, string> = {
                        0: "products",
                        1: "products",
                        2: "clients",
                        3: "contact"
                      };
                      const id = mapping[i];
                      if (id) {
                        const section = document.getElementById(id);
                        section?.scrollIntoView({ behavior: "smooth", block: "start" });
                      }
                    }}
                    className="w-full sm:w-auto group relative flex items-center justify-center gap-4 sm:gap-6 px-8 sm:px-12 py-4 sm:py-6 bg-primary text-white rounded-2xl font-black text-lg sm:text-xl hover:bg-blue-600 transition-all duration-500 shadow-[0_20px_40px_-10px_rgba(37,99,235,0.4)] overflow-hidden font-heading uppercase tracking-widest"
                  >
                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                    <span className="relative">{stage.cta}</span>
                    <ArrowRight className="relative w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-3 transition-transform duration-500" />
                  </button>
                  
                  {i === 0 && (
                    <motion.div 
                      animate={{ y: [0, 10, 0] }} 
                      transition={{ repeat: Infinity, duration: 2 }}
                      className="flex flex-col items-center gap-2 opacity-40"
                    >
                      <div className="w-[1px] h-12 bg-gradient-to-b from-primary to-transparent relative overflow-hidden">
                         <motion.div 
                           animate={{ y: [-48, 48] }} 
                           transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                           className="absolute top-0 left-0 w-full h-1/2 bg-white"
                         />
                      </div>
                      <span className="text-[10px] text-white font-black uppercase tracking-[0.3em]">Explore</span>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}

export default function IndustrialSlider3D({ target }: { target: React.RefObject<HTMLDivElement | null> }) {
  const { scrollYProgress } = useScroll({
    target: target,
    offset: ["start start", "end end"]
  });

  // Smooth the scroll progress
  const smoothProgress = useSpring(scrollYProgress, {
    damping: 30, // Increased damping for smoother flow
    stiffness: 80, // Lower stiffness for more cinematic movement
    mass: 1,
    restDelta: 0.001
  });

  return (
    <div className="h-screen w-full bg-[#020617] relative">
      <Canvas shadows gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}>
        <PerformanceMonitor />
        <PerspectiveCamera makeDefault position={[0, 0, 15]} fov={50} />
        
        <Suspense fallback={null}>
          <Scene progress={smoothProgress} />
        </Suspense>
      </Canvas>
      <HTMLOverlay progress={smoothProgress} />
    </div>
  );
}
