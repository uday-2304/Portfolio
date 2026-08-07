"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PROJECTS_DATA } from "./ProjectsStack";
import { ExternalLink } from "lucide-react";

interface ProjectOverviewProps {
  activeProjectId?: string;
  onSelectProject?: (id: string) => void;
}

export function BuildTimeline({ activeProjectId = "lexel", onSelectProject }: ProjectOverviewProps) {
  const [selectedId, setSelectedId] = useState(activeProjectId);

  const currentId = activeProjectId || selectedId;
  const currentProject = PROJECTS_DATA.find((p) => p.id === currentId) || PROJECTS_DATA[0];

  const handleTabChange = (id: string) => {
    setSelectedId(id);
    if (onSelectProject) onSelectProject(id);
  };

  return (
    <section id="overview" className="py-24 relative bg-transparent overflow-hidden">
      {/* Soft neutral monochrome ambient background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[550px] bg-white/[0.03] rounded-full blur-[180px] pointer-events-none -z-10" />

      <div className="max-w-[1100px] mx-auto px-6 w-full">
        {/* Main Section Header (Clean White Theme) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="font-sans text-white/50 font-semibold tracking-widest uppercase mb-3 text-xs md:text-sm">
            Deep Dive
          </p>
          <h2 className="font-heading text-5xl md:text-7xl font-bold text-white tracking-tight">
            Project Overview
          </h2>
          <p className="font-sans text-white/60 text-sm md:text-base mt-3 font-normal max-w-xl mx-auto">
            Architecture breakdown, impact snapshots, and development roadmaps.
          </p>
        </motion.div>

        {/* Project Filter Tabs Switcher (White Theme) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap items-center justify-center gap-3.5 mb-12"
        >
          {PROJECTS_DATA.map((project) => {
            const isActive = project.id === currentProject.id;
            return (
              <button
                key={project.id}
                onClick={() => handleTabChange(project.id)}
                className={`relative px-7 py-3 rounded-full font-sans text-xs md:text-sm font-semibold transition-all duration-300 cursor-pointer ${
                  isActive
                    ? "text-black bg-white border border-white shadow-[0_0_25px_rgba(255,255,255,0.35)]"
                    : "text-white/60 bg-white/5 border border-white/10 hover:text-white hover:border-white/30"
                }`}
              >
                {project.title}
                {isActive && (
                  <motion.div
                    layoutId="activeTabBadgeWhite"
                    className="absolute inset-0 rounded-full border border-white/60 pointer-events-none"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </motion.div>

        {/* Animated Project Content Container */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentProject.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="space-y-8"
          >
            {/* Impact Snapshot Card (Image Removed, Clean Expanded Layout) */}
            <div className="relative bg-[#090d16]/90 backdrop-blur-xl border border-white/10 rounded-3xl p-7 sm:p-9 md:p-11 shadow-2xl overflow-hidden group hover:border-white/30 transition-all duration-500">
              {/* Top White accent line */}
              <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-white/40 to-transparent" />

              {/* Title & Header Bar */}
              <div className="flex items-center justify-between flex-wrap gap-4 mb-6">
                <div>
                  <h3 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-wide">
                    {currentProject.snapshot.title}
                  </h3>
                  <p className="font-sans text-white/70 text-sm sm:text-base leading-relaxed mt-2 max-w-2xl">
                    {currentProject.snapshot.subtitle}
                  </p>
                </div>
                
                <div className="flex items-center gap-3">
                  <span className="font-sans text-xs font-medium text-white/90 border border-white/20 bg-white/5 px-4 py-1.5 rounded-full">
                    {currentProject.category}
                  </span>
                  <a
                    href={currentProject.visitUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-sans text-xs font-semibold text-black bg-white hover:bg-white/90 px-4 py-1.5 rounded-full border border-white flex items-center gap-1.5 transition-all shadow-md"
                  >
                    <span>Visit Project</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a
                    href={currentProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/20 border border-white/15 flex items-center justify-center text-white/80 hover:text-white transition-all shadow-sm"
                    title="View GitHub Repository"
                  >
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                    </svg>
                  </a>
                </div>
              </div>

              {/* Badges (White Theme) */}
              <div className="flex flex-wrap gap-2.5 mb-8">
                {currentProject.snapshot.badges.map((badge, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/15 text-white/90 text-xs font-sans font-medium tracking-wide shadow-sm"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-white/80 animate-pulse" />
                    {badge}
                  </span>
                ))}
              </div>

              {/* Dotted Divider */}
              <div className="border-t border-dashed border-white/10 my-6" />

              {/* What I'd Build Next Roadmap */}
              <div className="space-y-4">
                <h4 className="font-sans text-xs sm:text-sm font-bold text-white tracking-wider uppercase flex items-center gap-2">
                  <span className="text-white/80">▶</span>
                  <span>What I'd Build Next</span>
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {currentProject.snapshot.whatNext.map((point, idx) => (
                    <div
                      key={idx}
                      className="bg-white/[0.03] border border-white/10 rounded-xl p-4 flex items-start gap-3 hover:border-white/25 transition-colors"
                    >
                      <span className="text-white font-bold text-sm mt-0.5 flex-shrink-0">•</span>
                      <span className="font-sans text-white/75 text-xs sm:text-sm leading-relaxed">{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Vertical Milestone Timeline (White Theme) */}
            <div className="relative pl-6 sm:pl-8 space-y-4 pt-2">
              {/* Continuous White vertical connector line */}
              <div className="absolute left-[11px] sm:left-[15px] top-6 bottom-6 w-[2px] bg-gradient-to-b from-white/60 via-white/20 to-transparent" />

              {currentProject.timeline.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="relative group"
                >
                  {/* Glowing White Node Dot */}
                  <div className="absolute -left-[23px] sm:-left-[27px] top-6 w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-white border-2 sm:border-[3px] border-[#020813] shadow-[0_0_12px_rgba(255,255,255,0.7)] group-hover:scale-125 transition-all duration-300" />

                  {/* Milestone Card */}
                  <div className="bg-[#090d16]/80 backdrop-blur-md border border-white/10 rounded-2xl p-5 sm:p-6 hover:border-white/30 hover:bg-white/[0.04] transition-all duration-300">
                    <h4 className="font-heading text-lg sm:text-xl md:text-2xl font-bold text-white mb-2 tracking-wide flex items-center gap-2">
                      <span>{item.title}</span>
                    </h4>
                    <p className="font-sans text-white/70 text-xs sm:text-sm leading-relaxed font-normal">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

export { BuildTimeline as ProjectOverview };
