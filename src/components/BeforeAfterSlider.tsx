"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { MoveHorizontal } from "lucide-react";

export default function BeforeAfterSlider() {
  const [sliderPosition, setSliderPosition] = useState(50); // percentage 0 - 100
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const position = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(position);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (e.buttons === 1) { // Left mouse button clicked and held
      handleMove(e.clientX);
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches[0]) {
      handleMove(e.touches[0].clientX);
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    handleMove(e.clientX);
  };

  return (
    <div className="flex flex-col items-center w-full">
      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
        onMouseDown={handleMouseDown}
        className="relative w-full max-w-4xl aspect-[4/5] md:aspect-[16/10] rounded-3xl overflow-hidden cursor-ew-resize select-none border border-white/10"
      >
        {/* Before Image (Left/Bottom) */}
        <div className="absolute inset-0 w-full h-full bg-zinc-900">
          <Image
            src="/images/transform_before.png"
            alt="Before Transformation"
            fill
            sizes="(max-width: 1024px) 100vw, 1000px"
            className="object-cover object-top pointer-events-none"
            priority
          />
          <div className="absolute bottom-6 left-6 px-4 py-2 bg-[#080808]/80 backdrop-blur-md rounded-full text-xs font-bold uppercase tracking-widest text-white border border-white/10 z-10">
            Phase 01: Baseline
          </div>
        </div>

        {/* After Image (Right/Top - clipped width) */}
        <div
          className="absolute inset-0 w-full h-full overflow-hidden z-10"
          style={{ width: `${sliderPosition}%` }}
        >
          <div className="absolute inset-0 w-full h-full min-w-[100%] aspect-[4/5] md:aspect-[16/10]">
            <Image
              src="/images/transform_after.png"
              alt="After Transformation"
              fill
              sizes="(max-width: 1024px) 100vw, 1000px"
              className="object-cover object-top pointer-events-none"
              priority
            />
          </div>
          <div className="absolute bottom-6 left-6 px-4 py-2 bg-brand-accent text-black rounded-full text-xs font-black uppercase tracking-widest border border-brand-accent/20 z-10 whitespace-nowrap">
            Phase 02: Elite Condition
          </div>
        </div>

        {/* Slider Line & Handle */}
        <div
          className="absolute top-0 bottom-0 w-[2px] bg-brand-accent cursor-ew-resize z-20"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-12 h-12 bg-black border-2 border-brand-accent rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(206,255,0,0.4)] hover:scale-110 active:scale-95 transition-all duration-200">
            <MoveHorizontal className="w-5 h-5 text-brand-accent" />
          </div>
        </div>
      </div>
      <p className="mt-4 text-sm text-brand-text-muted flex items-center gap-1.5 font-medium">
        <span className="w-2 h-2 rounded-full bg-brand-accent animate-pulse" />
        Drag slider to reveal comparison (12-week transformation study)
      </p>
    </div>
  );
}
