"use client";

import { useEffect, useRef } from "react";

export default function MouseHalo() {
  const haloRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const size = 40;
    const borderWidth = 2;
    const totalSize = size + borderWidth * 2; // 44
    const offset = totalSize / 2; // 22

    const handleMouseMove = (e: MouseEvent) => {
      if (haloRef.current) {
        haloRef.current.style.transform = `translate(${e.clientX - offset}px, ${
          e.clientY - offset
        }px)`;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      ref={haloRef}
      className="pointer-events-none fixed top-0 left-0 z-50 will-change-transform"
      style={{ transition: "transform 0.1s ease-out" }}
    >
      <div
        className="
          w-[40px] h-[40px] rounded-full border-2 border-red-500 bg-red-500/10
          animate-haloPulse
        "
      />
    </div>
  );
}
