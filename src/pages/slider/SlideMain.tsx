import { useRef } from "react";
import IndustrialSlider3D from "./IndustrialSlider3D";

export default function SlideMain() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={containerRef} className="relative w-full h-[400vh]" style={{ position: 'relative' }}>
      <div className="sticky top-0 w-full h-screen overflow-hidden">
        <IndustrialSlider3D target={containerRef} />
      </div>
    </div>
  );
}
