"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Home, Folder, Briefcase, Wrench, SquarePen } from "lucide-react";

export function Navbar() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const navItems = [
    { name: "Home", icon: <Home className="w-5 h-5" />, href: "#" },
    { name: "Projects", icon: <Folder className="w-5 h-5" />, href: "#works" },
    { name: "Tools", icon: <Wrench className="w-5 h-5" />, href: "#abilities" },
    { name: "Achievements", icon: <Briefcase className="w-5 h-5" />, href: "#achievements" },
    { name: "Contact", icon: <SquarePen className="w-5 h-5" />, href: "#contact" },
  ];

  return (
    <>
      {/* Top Left: Pure White "Uday" in Bricolage Grotesque with Spider-Web Texture */}
      <div className="absolute top-6 sm:top-8 left-20 sm:left-36 lg:left-52 xl:left-64 z-50">
        <motion.div
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        >
          <Link 
            href="#" 
            className="group relative inline-block select-none hover:opacity-90 transition-opacity"
          >
            <svg 
              viewBox="0 0 180 65" 
              className="h-11 sm:h-13 md:h-15 w-auto" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                {/* Spider-Web Texture Pattern */}
                <pattern id="spiderWebPattern" width="26" height="26" patternUnits="userSpaceOnUse">
                  {/* Concentric curved web strands */}
                  <path d="M 0 13 Q 13 8 26 13" stroke="rgba(0, 0, 0, 0.45)" strokeWidth="1.2" fill="none" />
                  <path d="M 0 0 Q 13 6 26 0" stroke="rgba(0, 0, 0, 0.4)" strokeWidth="1" fill="none" />
                  <path d="M 0 26 Q 13 19 26 26" stroke="rgba(0, 0, 0, 0.4)" strokeWidth="1" fill="none" />
                  {/* Radial web rays */}
                  <path d="M 0 0 L 26 26" stroke="rgba(0, 0, 0, 0.35)" strokeWidth="1" />
                  <path d="M 26 0 L 0 26" stroke="rgba(0, 0, 0, 0.35)" strokeWidth="1" />
                  <path d="M 13 0 L 13 26" stroke="rgba(0, 0, 0, 0.35)" strokeWidth="1" />
                  <path d="M 0 13 L 26 13" stroke="rgba(0, 0, 0, 0.35)" strokeWidth="1" />
                </pattern>

                {/* Text Mask for Web Texture in Bricolage Grotesque */}
                <mask id="webMask">
                  <text
                    x="5"
                    y="50"
                    fontFamily="'Bricolage Grotesque', sans-serif"
                    fontSize="54"
                    letterSpacing="1"
                    fill="#ffffff"
                    fontWeight="800"
                  >
                    Uday
                  </text>
                </mask>
              </defs>

              {/* Pure Crisp White Base Text in Bricolage Grotesque */}
              <text
                x="5"
                y="50"
                fontFamily="'Bricolage Grotesque', sans-serif"
                fontSize="54"
                letterSpacing="1"
                fill="#FFFFFF"
                fontWeight="800"
              >
                Uday
              </text>

              {/* Spider-Web Texture overlay directly on the white text */}
              <rect
                x="0"
                y="0"
                width="180"
                height="65"
                fill="url(#spiderWebPattern)"
                mask="url(#webMask)"
                className="pointer-events-none"
              />
            </svg>
          </Link>
        </motion.div>
      </div>

      {/* Top Center-Right: Navigation Bar */}
      <div className="absolute top-8 sm:top-10 left-1/2 -translate-x-1/2 ml-96 z-50">
        <motion.nav
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
          className="bg-[#111111]/90 backdrop-blur-md border border-white/10 p-2 rounded-full flex items-center gap-2 shadow-2xl"
        >
          {navItems.map((item, i) => (
            <div
              key={i}
              className="relative flex flex-col items-center"
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <Link 
                href={item.href}
                className="w-12 h-12 flex items-center justify-center rounded-full text-white/60 hover:text-white hover:bg-white/10 transition-all duration-300"
              >
                {item.icon}
              </Link>
              
              <AnimatePresence>
                {hoveredIndex === i && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full mt-4 px-3 py-1.5 bg-[#222] border border-white/10 text-white text-xs font-sans rounded-md whitespace-nowrap shadow-xl"
                  >
                    {item.name}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </motion.nav>
      </div>
    </>
  );
}
