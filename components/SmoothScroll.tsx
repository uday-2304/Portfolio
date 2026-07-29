"use client";

import { ReactLenis } from 'lenis/react';

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  return (
    <ReactLenis root options={{ 
      lerp: 0.05, // Lower lerp for more buttery inertia
      duration: 2, // Longer duration
      smoothWheel: true,
      wheelMultiplier: 0.8, // Softer wheel feel
    }}>
      {children}
    </ReactLenis>
  );
}
