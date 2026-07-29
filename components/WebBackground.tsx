"use client";

import { useEffect, useRef } from "react";

export function WebBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;

    const setSize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      drawWeb();
    };

    const drawWeb = () => {
      ctx.clearRect(0, 0, width, height);
      
      const cx = width / 2;
      const cy = height / 2;
      const maxRadius = Math.max(width, height) * 0.8;
      
      ctx.strokeStyle = "rgba(255, 255, 255, 0.06)";
      ctx.lineWidth = 1;

      // Draw radial threads
      const numThreads = 24;
      for (let i = 0; i < numThreads; i++) {
        const angle = (i * Math.PI * 2) / numThreads;
        ctx.beginPath();
        ctx.moveTo(cx, cy);
        ctx.lineTo(cx + Math.cos(angle) * maxRadius, cy + Math.sin(angle) * maxRadius);
        ctx.stroke();
      }

      // Draw spiral/polygonal rings
      const numRings = 15;
      const spacing = maxRadius / numRings;
      
      for (let r = 1; r <= numRings; r++) {
        const radius = r * spacing;
        ctx.beginPath();
        for (let i = 0; i <= numThreads; i++) {
          const angle = (i * Math.PI * 2) / numThreads;
          // Add slight sag to the web between threads
          const sagAngle = angle - (Math.PI / numThreads);
          const sagRadius = radius * 0.92;

          const x = cx + Math.cos(angle) * radius;
          const y = cy + Math.sin(angle) * radius;

          if (i === 0) {
            ctx.moveTo(x, y);
          } else {
            const prevAngle = ((i - 1) * Math.PI * 2) / numThreads;
            const mx = cx + Math.cos(sagAngle) * sagRadius;
            const my = cy + Math.sin(sagAngle) * sagRadius;
            ctx.quadraticCurveTo(mx, my, x, y);
          }
        }
        ctx.stroke();
      }
    };

    setSize();
    window.addEventListener("resize", setSize);
    return () => window.removeEventListener("resize", setSize);
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed inset-0 z-0 pointer-events-none mix-blend-screen opacity-80"
    />
  );
}
