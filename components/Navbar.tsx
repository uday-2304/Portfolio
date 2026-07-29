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
    { name: "Achievements", icon: <Briefcase className="w-5 h-5" />, href: "#about" },
    { name: "Tools", icon: <Wrench className="w-5 h-5" />, href: "#skills" },
    { name: "Contact", icon: <SquarePen className="w-5 h-5" />, href: "#contact" },
  ];

  return (
    <div className="fixed top-10 left-1/2 -translate-x-1/2 ml-96 z-50">
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
  );
}
