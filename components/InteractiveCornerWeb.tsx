"use client";

import { useEffect, useRef } from "react";

export function InteractiveCornerWeb() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;

    let mouseX = width * 2; // Start far away
    let mouseY = height * 2;
    let time = 0;
    
    let animationFrameId: number;

    const setSize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    // Pre-calculate the base structure of the corner web
    const numThreads = 7;
    const numRings = 6;
    const webRadius = Math.min(width, height) * 0.22; // Decreased size further
    
    // Nodes array stores the state of each intersection
    // r: ring index, t: thread index
    const nodes: { ox: number, oy: number, cx: number, cy: number }[][] = [];
    
    const initNodes = () => {
      nodes.length = 0;
      for (let r = 1; r <= numRings; r++) {
        const ringNodes = [];
        const radius = (r / numRings) * webRadius;
        for (let t = 0; t <= numThreads; t++) {
          // Angle ranges from PI/2 (straight down) to PI (straight left)
          // because it originates from the top-right corner (width, 0)
          const angle = Math.PI / 2 + (t / numThreads) * (Math.PI / 2);
          
          const ox = width + Math.cos(angle) * radius;
          const oy = 0 + Math.sin(angle) * radius;
          ringNodes.push({ ox, oy, cx: ox, cy: oy });
        }
        nodes.push(ringNodes);
      }
    };

    const drawWeb = () => {
      time += 0.05;
      ctx.clearRect(0, 0, width, height);
      
      const pullRadius = 250; // How close the mouse needs to be
      const pullStrength = 0.5; // How strongly the web pulls to the mouse
      
      ctx.strokeStyle = "rgba(255, 255, 255, 0.35)";
      ctx.lineWidth = 1.5;

      // Update nodes physics
      for (let r = 0; r < numRings; r++) {
        for (let t = 0; t <= numThreads; t++) {
          const node = nodes[r][t];
          
          // Calculate distance from original position to mouse
          const dx = mouseX - node.ox;
          const dy = mouseY - node.oy;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          let targetX = node.ox;
          let targetY = node.oy;
          
          // If mouse is close, pull target towards mouse
          if (distance < pullRadius) {
            const force = (pullRadius - distance) / pullRadius; // 0 to 1
            targetX += dx * force * pullStrength;
            targetY += dy * force * pullStrength;
          }
          
          // Add subtle ambient wind sway based on original position
          const sway = Math.sin(time + r * 0.5 + t * 0.5) * (r * 1.5);
          targetX += sway;
          targetY += sway;
          
          // Lerp current position to target for elasticity
          node.cx += (targetX - node.cx) * 0.15;
          node.cy += (targetY - node.cy) * 0.15;
        }
      }

      // Draw Radial Threads
      for (let t = 0; t <= numThreads; t++) {
        ctx.beginPath();
        ctx.moveTo(width, 0); // Origin at top-right
        for (let r = 0; r < numRings; r++) {
          ctx.lineTo(nodes[r][t].cx, nodes[r][t].cy);
        }
        ctx.stroke();
      }

      // Draw Connecting Rings
      for (let r = 0; r < numRings; r++) {
        ctx.beginPath();
        for (let t = 0; t <= numThreads; t++) {
          const node = nodes[r][t];
          if (t === 0) {
            ctx.moveTo(node.cx, node.cy);
          } else {
            // Sag effect between threads
            const prevNode = nodes[r][t - 1];
            const midX = (prevNode.cx + node.cx) / 2;
            const midY = (prevNode.cy + node.cy) / 2;
            
            // Calculate a point slightly closer to origin for the sag curve
            const dx = width - midX;
            const dy = 0 - midY;
            const sagAmount = 0.1; // 10% sag towards center
            
            const cpX = midX + dx * sagAmount;
            const cpY = midY + dy * sagAmount;
            
            ctx.quadraticCurveTo(cpX, cpY, node.cx, node.cy);
          }
        }
        ctx.stroke();
      }
      
      animationFrameId = requestAnimationFrame(drawWeb);
    };

    setSize();
    initNodes();
    drawWeb();
    
    const handleResize = () => {
      setSize();
      initNodes();
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);
    
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed inset-0 z-[10] pointer-events-none mix-blend-screen"
    />
  );
}
