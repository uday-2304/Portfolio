"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ChevronDown, ExternalLink } from "lucide-react";

interface SubHighlight {
  label: string;
  value: string;
  badge?: string;
}

interface AchievementItem {
  id: string;
  title: string;
  category: "Platform" | "Hackathon";
  categoryLabel: string;
  metric: string;
  ratingBadge: string;
  summary: string;
  highlights: SubHighlight[];
  tags: string[];
  link?: string;
}

const ACHIEVEMENTS: AchievementItem[] = [
  {
    id: "leetcode",
    title: "LeetCode",
    category: "Platform",
    categoryLabel: "Data Structures & Algorithms",
    metric: "Rated 1600 · 150+ Solved",
    ratingBadge: "Rating: 1600",
    summary: "Active competitive problem solver specializing in core data structure patterns, graph algorithms, trees, and dynamic programming.",
    highlights: [
      { label: "Current Rating", value: "Rated 1600" },
      { label: "Peak Rating", value: "1559 Max" },
      { label: "Problems Solved", value: "150+ Solved natively" },
      { label: "Focus Areas", value: "Graphs, Trees & DP Patterns" }
    ],
    tags: ["Rating 1600", "Max 1559", "150+ Solved", "DSA Native", "Dynamic Programming"],
    link: "https://leetcode.com"
  },
  {
    id: "codeforces",
    title: "Codeforces",
    category: "Platform",
    categoryLabel: "Competitive Programming",
    metric: "Rated Pupil (1359 Max) · 300+ Solved · Global #2048",
    ratingBadge: "Pupil (1359)",
    summary: "Consistently compete in time-pressured global rounds with deep emphasis on number theory, greedy heuristics, and fast mathematical logic.",
    highlights: [
      { label: "Rating & Rank", value: "Pupil (Max: 1359)" },
      { label: "Problems Solved", value: "300+ Competitive Problems" },
      { label: "CF Round 1096 (Div. 3)", value: "Global Rank #2048", badge: "11k+ Participants" },
      { label: "Specialty", value: "Greedy, Math & Constructive Logic" }
    ],
    tags: ["Pupil", "Max 1359", "300+ Solved", "Global #2048", "Round 1096 Div.3"],
    link: "https://codeforces.com"
  },
  {
    id: "codechef",
    title: "CodeChef",
    category: "Platform",
    categoryLabel: "Competitive Programming",
    metric: "Rated 2 Star (1475 Max) · 250+ Solved · Global #423",
    ratingBadge: "2 Star (1475)",
    summary: "Regular participant in rated Starters division challenges with multiple top-percentile global finishes against thousands of competitive programmers worldwide.",
    highlights: [
      { label: "Rating & Star", value: "Rated 2 Star (Max: 1475)" },
      { label: "Starters 236 (Rated)", value: "Global Rank #423", badge: "35k+ Contestants" },
      { label: "Starters 234 & 247", value: "Rank #818 & #951", badge: "23k+ Participants" },
      { label: "Problems Solved", value: "250+ Algorithmic Challenges" }
    ],
    tags: ["2 Star", "Max 1475", "Global #423", "Rank #818 & #951", "35k+ Contestants"],
    link: "https://codechef.com"
  },
  {
    id: "datasphere",
    title: "DataSphere Hackathon",
    category: "Hackathon",
    categoryLabel: "Hackathon Podium",
    metric: "Top 4 Finalist / 24+ Teams",
    ratingBadge: "Top 4 Finalist",
    summary: "Engineered and presented a rapid, end-to-end full-stack data intelligence platform within a strict 36-hour sprint, qualifying in the top 4 finalists.",
    highlights: [
      { label: "Podium Finish", value: "Top 4 Finalist", badge: "24+ Teams" },
      { label: "Hackofiesta 6.0 & 6.1", value: "Active Competitor", badge: "National Level" },
      { label: "Sprint Duration", value: "36-Hour Rapid Prototyping" },
      { label: "Focus", value: "Full-Stack Architecture & Real-Time Data" }
    ],
    tags: ["Top 4 Finalist", "DataSphere", "Hackofiesta 6.0 & 6.1", "Rapid Prototyping"]
  },
  {
    id: "gpt-challenge",
    title: "GPT Challenge Hackathon",
    category: "Hackathon",
    categoryLabel: "Hackathon Podium",
    metric: "Top 10 Finalist / 25 Teams",
    ratingBadge: "Top 10 Finalist",
    summary: "Built an innovative Generative AI workflow automation MVP evaluated by engineering leaders, securing a Top 10 finish among 25 competing teams.",
    highlights: [
      { label: "Podium Finish", value: "Top 10 Finalist", badge: "25 Teams" },
      { label: "Core Technology", value: "LLM Orchestration & Web Agent" },
      { label: "Evaluation", value: "Technical Architecture & Product Polish" }
    ],
    tags: ["Top 10 Finalist", "GPT Challenge", "Generative AI", "LLM Workflows"]
  }
];

export function Achievements() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="achievements" className="py-24 md:py-36 relative bg-[#020813] text-white overflow-hidden">
      {/* Background ambient subtle glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[550px] bg-white/[0.02] rounded-full blur-[200px] pointer-events-none -z-10" />

      <div className="max-w-[1240px] mx-auto px-6 md:px-12 w-full">
        {/* Clean Header: Only Text with Normal Case */}
        <div className="mb-14 md:mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-heading text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-white leading-none tracking-tight"
          >
            Achievements
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-sans text-white/60 text-sm sm:text-base md:text-lg mt-4 font-normal max-w-xl"
          >
            Recent milestones, competitive ratings & hackathon podiums.
          </motion.p>
        </div>

        {/* Horizontal Stacked List Rows */}
        <div className="border-t border-white/15 divide-y divide-white/15">
          {ACHIEVEMENTS.map((item, index) => {
            const isExpanded = expandedId === item.id;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group cursor-pointer transition-all duration-300 hover:bg-white/[0.02]"
                onClick={() => toggleExpand(item.id)}
              >
                <div className="py-7 sm:py-9 flex flex-col md:flex-row md:items-center justify-between gap-4">
                  {/* Left Side: Boxed Arrow + Title with Proper Case */}
                  <div className="flex items-center gap-4 sm:gap-6">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-white/5 border border-white/20 flex items-center justify-center text-white group-hover:bg-white group-hover:text-black group-hover:border-white transition-all duration-300 flex-shrink-0 shadow-sm">
                      <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>

                    <h3 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-wide text-white group-hover:translate-x-2 transition-transform duration-300">
                      {item.title}
                    </h3>
                  </div>

                  {/* Right Side: Key Metric & Category Tag */}
                  <div className="flex items-center justify-between md:justify-end gap-3 sm:gap-4 pl-12 md:pl-0">
                    <span className="font-sans text-xs sm:text-sm font-semibold text-white/90">
                      {item.metric}
                    </span>

                    <span className="font-sans text-[11px] font-medium text-white/50 bg-white/5 border border-white/10 px-3.5 py-1 rounded-full group-hover:border-white/30 group-hover:text-white/90 transition-colors">
                      {item.categoryLabel}
                    </span>

                    <div className="w-7 h-7 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-white/30 transition-colors">
                      <ChevronDown
                        className={`w-3.5 h-3.5 text-white/50 transition-transform duration-300 ${
                          isExpanded ? "rotate-180 text-white" : "group-hover:text-white"
                        }`}
                      />
                    </div>
                  </div>
                </div>

                {/* Expanded Detailed Accordion Content */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.35, ease: "easeInOut" }}
                      className="overflow-hidden pb-8 pl-12 sm:pl-16 pr-4"
                    >
                      <div className="bg-[#090d16]/90 border border-white/10 rounded-2xl p-6 sm:p-8 backdrop-blur-xl shadow-2xl space-y-6">
                        {/* Summary */}
                        <p className="font-sans text-white/80 text-sm sm:text-base leading-relaxed max-w-3xl">
                          {item.summary}
                        </p>

                        {/* Structured Highlights Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                          {item.highlights.map((h, hIdx) => (
                            <div
                              key={hIdx}
                              className="bg-white/[0.03] border border-white/10 rounded-xl p-4 flex flex-col justify-between"
                            >
                              <span className="font-sans text-xs text-white/50 mb-1">
                                {h.label}
                              </span>
                              <div className="flex items-center justify-between gap-2">
                                <span className="font-sans text-sm font-bold text-white">
                                  {h.value}
                                </span>
                                {h.badge && (
                                  <span className="font-sans text-[10px] font-semibold text-black bg-white px-2 py-0.5 rounded-full">
                                    {h.badge}
                                  </span>
                                )}
                              </div>
                            </div>
                          ))}
                        </div>

                        {/* Tag Pills & Profile Action Link */}
                        <div className="flex flex-wrap items-center justify-between gap-4 pt-2 border-t border-white/5">
                          <div className="flex flex-wrap gap-2">
                            {item.tags.map((tag, tagIdx) => (
                              <span
                                key={tagIdx}
                                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-white/80 text-xs font-sans font-medium"
                              >
                                <span className="w-1.5 h-1.5 rounded-full bg-white/70" />
                                {tag}
                              </span>
                            ))}
                          </div>

                          {item.link && (
                            <a
                              href={item.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 font-sans text-xs font-semibold text-black bg-white hover:bg-white/90 px-4 py-1.5 rounded-full transition-all shadow-md"
                            >
                              <span>View Profile</span>
                              <ExternalLink className="w-3 h-3" />
                            </a>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
