import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About, Projects, Abilities, Achievements, Contact } from "@/components/Sections";
import { PortalScene } from "@/three/PortalScene";
import { WebBackground } from "@/components/WebBackground";
import { InteractiveCornerWeb } from "@/components/InteractiveCornerWeb";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#020813]">
      {/* Fixed 3D Background */}
      <PortalScene />
      <WebBackground />
      <InteractiveCornerWeb />
      
      {/* 
        pointer-events-none on the wrapper so clicks fall through to the 3D Canvas in the Hero section.
        pointer-events-auto is re-enabled for the Navbar and content sections.
      */}
      <div className="relative z-10 pointer-events-none">
        <div className="pointer-events-auto">
          <Navbar />
        </div>
        
        <Hero />
        
        <div className="pointer-events-auto">
          <About />
          <Projects />
          <Abilities />
          <Achievements />
          <Contact />
        </div>
      </div>
    </main>
  );
}
