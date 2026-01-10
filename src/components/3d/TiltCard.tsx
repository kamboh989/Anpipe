import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  tiltMax?: number;
  scale?: number;
}

export const TiltCard: React.FC<TiltCardProps> = ({ 
  children, 
  className = "", 
  tiltMax = 20,
  scale = 1.05
}) => {
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 25 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 25 });

  // Rotate effect
  const rotateX = useTransform(
    mouseYSpring,
    [-0.5, 0.5],
    [`${tiltMax}deg`, `-${tiltMax}deg`]
  );
  const rotateY = useTransform(
    mouseXSpring,
    [-0.5, 0.5],
    [`-${tiltMax}deg`, `${tiltMax}deg`]
  );

  // Dynamic Glare effect position
  const opacity = useTransform(mouseXSpring, [-0.5, 0, 0.5], [0.1, 0, 0.1]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale }}
      style={{
        rotateY,
        rotateX,
        transformStyle: "preserve-3d",
        willChange: "transform",
      }}
      className={`relative group transform-gpu ${className}`}
    >
      {/* Glare/Shine Layer */}
      <motion.div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: `radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(255,255,255,0.15) 0%, transparent 80%)`,
          opacity,
          zIndex: 1,
          pointerEvents: "none",
        }}
        className="rounded-2xl"
      />

      {/* Main Content with inner depth */}
      <div
        style={{
          transform: "translateZ(30px)",
          transformStyle: "preserve-3d",
        }}
        className="w-full h-full"
      >
        <div 
          style={{ transform: "translateZ(20px)" }}
          className="relative z-0"
        >
           {children}
        </div>
      </div>
      
      {/* Outer Shadow that moves opposite to tilt */}
      <motion.div
        style={{
          position: "absolute",
          inset: "10px",
          background: "black",
          filter: "blur(20px)",
          opacity: 0.3,
          zIndex: -1,
          x: useTransform(mouseXSpring, [-0.5, 0.5], [20, -20]),
          y: useTransform(mouseYSpring, [-0.5, 0.5], [20, -20]),
        }}
      />
    </motion.div>
  );
};
