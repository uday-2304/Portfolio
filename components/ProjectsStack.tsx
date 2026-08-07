"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Image from "next/image";

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  visitUrl: string;
  githubUrl: string;
  accentColor: string;
  glowColor: string;
  snapshot: {
    title: string;
    subtitle: string;
    badges: string[];
    whatNext: string[];
  };
  timeline: {
    phase: string;
    title: string;
    description: string;
  }[];
}

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: "lexel",
    title: "Lexel",
    category: "AI-Powered Whiteboarding Suite",
    description: "GenAI-powered infinite whiteboarding and diagramming canvas for agile product and engineering teams.",
    image: "/projects/lexel-v3.png",
    visitUrl: "https://lexel-final.vercel.app/",
    githubUrl: "https://github.com/uday-2304/Lexel_Final",
    accentColor: "#e61919",
    glowColor: "rgba(230, 25, 25, 0.5)",
    snapshot: {
      title: "Lexel Impact Snapshot",
      subtitle: "A high-performance visual whiteboard combining real-time multi-cursor collaboration with prompt-driven UI and diagram generation.",
      badges: ["Infinite Canvas Engine", "Real-Time Multi-Cursor Sync", "AI Wireframe Synthesis"],
      whatNext: [
        "Add multi-modal prompt-to-UI wireframe and component generator.",
        "Introduce live audio canvas rooms and interactive presentation mode.",
        "Implement smart shape snapping with automated UML and ERD conversion."
      ]
    },
    timeline: [
      {
        phase: "Phase 1",
        title: "Lexel — Canvas Engine & WebGL Primitives",
        description: "Architected zero-lag 60fps infinite zoom/pan canvas with vector path smoothing and shape primitives."
      },
      {
        phase: "Phase 2",
        title: "Lexel — AI Tools & Smart Palettes",
        description: "Developed generative flowcharts, sticky note clusters, and prompt-driven layout synthesis."
      },
      {
        phase: "Phase 3",
        title: "Lexel — Real-Time Multi-Cursor Collaboration",
        description: "Integrated WebSocket CRDT state reconciliation for frictionless multi-user simultaneous whiteboard editing."
      }
    ]
  },
  {
    id: "escout",
    title: "Escout",
    category: "Esports Tournament & Arena Hub",
    description: "Competitive gaming tournament management, live arena match broadcasts, dynamic bracket generation, and player rankings.",
    image: "/projects/escout-v2.png",
    visitUrl: "https://escout-scouting.vercel.app/",
    githubUrl: "https://github.com/uday-2304/Escout-Final",
    accentColor: "#e61919",
    glowColor: "rgba(230, 25, 25, 0.5)",
    snapshot: {
      title: "Escout Impact Snapshot",
      subtitle: "A comprehensive esports ecosystem empowering tournament organizers, pro teams, and streamers with live match tracking.",
      badges: ["Dynamic Bracket System", "Live Stream Center", "Verified Player ELO"],
      whatNext: [
        "Build real-time game API telemetry for automated match stat ingestion.",
        "Deploy decentralized prize pool smart contract escrow for automated payouts.",
        "Implement team matchmaking queues and custom scrimmage lobbies."
      ]
    },
    timeline: [
      {
        phase: "Phase 1",
        title: "Escout — Dynamic Bracket Engine",
        description: "Engineered single & double elimination bracket generators with automated seedings and match scheduling."
      },
      {
        phase: "Phase 2",
        title: "Escout — Arena Hub & Stream Embeds",
        description: "Integrated low-latency video streaming, live spectator chat, and real-time interactive match scoreboards."
      },
      {
        phase: "Phase 3",
        title: "Escout — Leaderboards & Team Management",
        description: "Built verified player profiles, team rosters, and automated ELO competitive rating calculations."
      }
    ]
  },
  {
    id: "tollxstream",
    title: "TollXstream",
    category: "Web3 Blockchain Toll Protocol",
    description: "Decentralized blockchain-powered highway toll payment protocol enabling trustless, instantaneous micro-payments.",
    image: "/projects/tollxstream-v2.png",
    visitUrl: "https://tollpayments-final.vercel.app/",
    githubUrl: "https://github.com/uday-2304/TollXstream",
    accentColor: "#e61919",
    glowColor: "rgba(230, 25, 25, 0.5)",
    snapshot: {
      title: "TollXstream Impact Snapshot",
      subtitle: "Next-generation highway toll infrastructure using smart contracts and RFID integration for hands-free, instant micro-settlements.",
      badges: ["Web3 Wallet Integration", "Zero-Fee Microtransactions", "Automated RFID Bridge"],
      whatNext: [
        "Integrate Zero-Knowledge cryptographic proofs for vehicle identity and driver privacy.",
        "Deploy cross-chain settlement bridges across high-throughput Layer 2 rollups.",
        "Implement direct vehicle OBD-II connected telemetry for automatic hands-free toll deduction."
      ]
    },
    timeline: [
      {
        phase: "Phase 1",
        title: "TollXstream — Smart Contract Core",
        description: "Designed EVM-compatible automated toll payment smart contracts with sub-second finality."
      },
      {
        phase: "Phase 2",
        title: "TollXstream — Web3 Wallet Interface",
        description: "Created one-tap wallet connectivity, automated balance reloads, and transaction history receipts."
      },
      {
        phase: "Phase 3",
        title: "TollXstream — Highway Gateway Simulation",
        description: "Simulated real-world toll gantry sensor feeds and verified high-concurrency throughput under heavy peak traffic."
      }
    ]
  }
];

interface ProjectsStackProps {
  onSelectProject?: (projectId: string) => void;
  selectedProjectId?: string;
}

export function ProjectsStack({ onSelectProject, selectedProjectId = "lexel" }: ProjectsStackProps) {
  const [isContainerHovered, setIsContainerHovered] = useState(false);
  const [hoveredCardIndex, setHoveredCardIndex] = useState<number | null>(null);

  // Default Resting State (stacked like Mockup 1)
  const defaultTransforms = [
    { x: -90, y: 15, rotate: -8, zIndex: 30, scale: 1 },
    { x: 30, y: -5, rotate: 3, zIndex: 20, scale: 0.96 },
    { x: 110, y: 25, rotate: 11, zIndex: 10, scale: 0.92 }
  ];

  // Hover Spread State (spreads horizontally like Mockup 2)
  const spreadTransforms = [
    { x: -320, y: 0, rotate: -4, zIndex: 20, scale: 1.0 },
    { x: 0, y: -10, rotate: 0, zIndex: 25, scale: 1.0 },
    { x: 320, y: 0, rotate: 5, zIndex: 20, scale: 1.0 }
  ];

  return (
    <section id="works" className="py-24 relative bg-transparent overflow-visible">
      {/* Background ambient red glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-[#e61919]/10 rounded-full blur-[150px] pointer-events-none -z-10" />

      <div className="max-w-[1300px] mx-auto px-6 w-full flex flex-col items-center">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20"
        >
          <p className="font-sans text-[#e61919] font-semibold tracking-widest uppercase mb-3 text-xs md:text-sm">
            Featured Work
          </p>
          <h2 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight">
            Projects
          </h2>
          <p className="font-sans text-white/50 text-xs md:text-sm mt-3 font-normal">
            Hover over the deck to explore recent builds
          </p>
        </motion.div>

        {/* Interactive Card Deck Container */}
        <div
          className="relative w-full max-w-[1100px] h-[580px] md:h-[620px] flex items-center justify-center"
          onMouseEnter={() => setIsContainerHovered(true)}
          onMouseLeave={() => {
            setIsContainerHovered(false);
            setHoveredCardIndex(null);
          }}
        >
          {PROJECTS_DATA.map((project, index) => {
            const isHovered = hoveredCardIndex === index;
            const isSpread = isContainerHovered;
            const currentTransform = isSpread ? spreadTransforms[index] : defaultTransforms[index];
            const isSelected = selectedProjectId === project.id;

            return (
              <motion.div
                key={project.id}
                initial={false}
                animate={{
                  x: isHovered ? currentTransform.x : currentTransform.x,
                  y: isHovered ? currentTransform.y - 20 : currentTransform.y,
                  rotate: isHovered ? 0 : currentTransform.rotate,
                  scale: isHovered ? 1.06 : currentTransform.scale,
                  zIndex: isHovered ? 50 : isSelected ? 35 : currentTransform.zIndex
                }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 24,
                  mass: 0.8
                }}
                onMouseEnter={() => setHoveredCardIndex(index)}
                onClick={() => onSelectProject && onSelectProject(project.id)}
                className={`absolute w-[300px] sm:w-[340px] md:w-[360px] h-[490px] sm:h-[520px] md:h-[540px] rounded-[1.8rem] md:rounded-[2.2rem] bg-[#0c0a0f]/95 backdrop-blur-xl border transition-all duration-300 cursor-pointer overflow-hidden flex flex-col justify-between shadow-2xl ${
                  isHovered || (isSelected && !isContainerHovered)
                    ? "border-[#e61919] shadow-[0_0_40px_rgba(230,25,25,0.45)] ring-1 ring-[#e61919]/60"
                    : "border-white/10 shadow-[0_15px_35px_rgba(0,0,0,0.6)] hover:border-[#e61919]/60"
                }`}
              >
                {/* Top Image Preview Frame */}
                <div className="relative w-full h-[210px] sm:h-[230px] bg-[#04060c] p-3.5 pb-0 flex flex-col justify-end overflow-hidden rounded-t-[1.8rem] md:rounded-t-[2.2rem]">
                  {/* Subtle top browser window bar */}
                  <div className="flex items-center justify-between px-2 pb-2">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-white/20" />
                      <span className="w-2 h-2 rounded-full bg-white/20" />
                      <span className="w-2 h-2 rounded-full bg-white/20" />
                    </div>
                    <span className="text-[10px] font-sans text-white/40 tracking-wider">
                      {project.id}.app
                    </span>
                  </div>

                  {/* Inner Screenshot Container */}
                  <div className="relative w-full h-[165px] sm:h-[180px] rounded-t-xl overflow-hidden bg-[#080b14] border-t border-x border-white/10 shadow-lg group-hover:border-[#e61919]/40 transition-colors">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 360px"
                      className="object-contain object-center sm:object-top transition-transform duration-500 group-hover:scale-105"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0c0a0f]/80 via-transparent to-transparent pointer-events-none" />
                  </div>
                </div>

                {/* Bottom Content Body */}
                <div className="p-6 md:p-7 flex flex-col justify-between flex-grow bg-[#0c0a0f]/90">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <h3 className="font-heading text-2xl md:text-3xl font-bold text-white tracking-wide">
                        {project.title}
                      </h3>
                      <span className="text-[10px] font-sans text-[#e61919] bg-[#250505] px-2 py-0.5 rounded-full border border-[#e61919]/30">
                        {project.category.split(" ")[0]}
                      </span>
                    </div>
                    <p className="font-sans text-white/70 text-xs md:text-sm leading-relaxed line-clamp-3">
                      {project.description}
                    </p>
                  </div>

                  {/* Actions Footer */}
                  <div className="flex items-center justify-between pt-4 border-t border-white/5 mt-4">
                    <a
                      href={project.visitUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="font-sans text-[#e61919] hover:text-[#ff3b3b] font-semibold text-sm md:text-base flex items-center gap-1.5 transition-colors group/link"
                    >
                      <span>Visit</span>
                      <ExternalLink className="w-3.5 h-3.5 opacity-70 group-hover/link:opacity-100 group-hover/link:translate-x-0.5 transition-all" />
                    </a>

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#e61919]/20 border border-white/10 hover:border-[#e61919]/60 flex items-center justify-center text-white/80 hover:text-white transition-all shadow-sm"
                      title="View GitHub Repository"
                    >
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Mobile/Tablet Helper Text */}
        <div className="md:hidden mt-6 text-center">
          <p className="text-white/40 text-xs font-sans">
            Tap on any card to view detailed overview below
          </p>
        </div>
      </div>
    </section>
  );
}
