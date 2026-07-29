"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Magnetic } from "./Magnetic";
import { useRef } from "react";
import { ArrowUpRight, PenTool, CreditCard, Bot, BookOpen, Layers, Code2 } from "lucide-react";

export function About() {
  const sentences = [
    "I craft digital experiences",
    "that live between reality",
    "and imagination.",
    "Driven by aesthetics",
    "and performance."
  ];

  return (
    <section id="about" className="py-48 relative min-h-screen flex items-center z-10 bg-transparent">
      {/* Gradient to transition back to solid black for the next sections */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#020813]/80 to-[#020813] -z-10" />
      
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 w-full">
        <div className="max-w-4xl space-y-4">
          {sentences.map((text, i) => (
            <div key={i} className="overflow-hidden">
              <motion.h2 
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, delay: i * 0.1, ease: [0.76, 0, 0.24, 1] }}
                className="font-heading text-4xl md:text-6xl lg:text-7xl font-light text-white tracking-wide"
              >
                {text}
              </motion.h2>
            </div>
          ))}
        </div>
        
        <div className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-[#e61919]/30 pt-12">
          {[
            { label: "Experience", value: "4 YRS" },
            { label: "Projects", value: "20+" },
            { label: "Awards", value: "3" }
          ].map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: i * 0.2 }}
              className="flex flex-col gap-2"
            >
              <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-white/40">{stat.label}</span>
              <span className="font-heading text-5xl text-white">{stat.value}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Renamed from Skills internally, but exported as Skills to maintain app/page.tsx compatibility
export function Skills() {
  const tools = [
    { name: "Framer", desc: "Website Builder", icon: <Layers className="w-8 h-8 text-black" /> },
    { name: "Figma", desc: "Design Tool", icon: <PenTool className="w-8 h-8 text-black" /> },
    { name: "Lemon Squeezy", desc: "Payments Provider", icon: <CreditCard className="w-8 h-8 text-black" /> },
    { name: "ChatGPT", desc: "AI Assistant", icon: <Bot className="w-8 h-8 text-black" /> },
    { name: "Notion", desc: "Productivity Tool", icon: <BookOpen className="w-8 h-8 text-black" /> },
    { name: "Nextjs", desc: "React framework", icon: <Code2 className="w-8 h-8 text-black" /> },
  ];

  return (
    <section id="skills" className="py-32 relative min-h-screen bg-[#020813] text-white flex flex-col justify-center">
      <div className="max-w-[1000px] mx-auto px-6 md:px-12 w-full">
        <div className="mb-24 relative">
          <h2 className="font-heading text-6xl md:text-8xl lg:text-9xl font-bold text-white leading-none z-10 relative tracking-tighter">PREMIUM</h2>
          <h2 className="font-heading text-6xl md:text-8xl lg:text-9xl font-bold text-white/10 leading-none absolute top-12 left-0 -z-0 tracking-tighter">TOOLS</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
          {tools.map((t, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="flex items-center gap-6 p-6 rounded-2xl bg-black/40 border border-white/5 hover:border-[#e61919]/50 hover:shadow-[0_0_30px_rgba(230,25,25,0.15)] transition-all duration-300 group"
            >
              <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                {t.icon}
              </div>
              <div>
                <h3 className="font-heading text-2xl font-bold text-white">{t.name}</h3>
                <p className="font-sans text-white/50 text-sm mt-1">{t.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Projects() {
  const projects = [
    { title: "NajmAI", category: "SaaS Framer Template", bg: "bg-purple-600" },
    { title: "Damas", category: "Free Framer Template", bg: "bg-[#1f4a3e]" },
    { title: "Majd", category: "Free Portfolio Template", bg: "bg-red-700" }
  ];

  return (
    <section id="works" className="py-32 relative min-h-screen bg-[#020813]">
      <div className="max-w-[1000px] mx-auto px-6 md:px-12">
        <div className="mb-24 relative">
          <h2 className="font-heading text-6xl md:text-8xl lg:text-9xl font-bold text-white leading-none z-10 relative tracking-tighter">RECENT</h2>
          <h2 className="font-heading text-6xl md:text-8xl lg:text-9xl font-bold text-white/10 leading-none absolute top-12 left-0 -z-0 tracking-tighter">PROJECTS</h2>
        </div>
        
        <div className="space-y-12">
          {projects.map((p, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.76, 0, 0.24, 1] }}
              className="group relative cursor-pointer flex items-center justify-between py-6 rounded-2xl hover:bg-white/[0.02] transition-colors duration-500"
            >
              <div className="flex items-center gap-8">
                <div className={`w-32 h-32 md:w-48 md:h-48 rounded-xl overflow-hidden ${p.bg} relative shadow-lg shadow-black/50 flex-shrink-0 group-hover:scale-105 transition-transform duration-500 ease-out`}>
                   <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                </div>
                <div>
                  <h3 className="font-heading text-3xl md:text-4xl font-bold text-white mb-2">{p.title}</h3>
                  <p className="font-sans text-sm md:text-base text-white/50">{p.category}</p>
                </div>
              </div>
              <div className="pr-4 md:pr-8">
                <ArrowUpRight className="text-[#e61919] w-8 h-8 opacity-50 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-300" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Contact() {
  return (
    <section id="contact" className="py-32 relative bg-[#01040a] min-h-screen flex items-center border-t border-white/5">
      <div className="max-w-[1000px] mx-auto px-6 md:px-12 w-full">
        <div className="mb-24 relative">
          <h2 className="font-heading text-6xl md:text-8xl lg:text-[9rem] font-bold text-white leading-none z-10 relative tracking-tighter uppercase">LET'S WORK</h2>
          <h2 className="font-heading text-6xl md:text-8xl lg:text-[9rem] font-bold text-white/10 leading-none absolute top-12 left-0 -z-0 tracking-tighter uppercase">TOGETHER</h2>
        </div>
        
        <form className="space-y-8 mt-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label className="text-white/60 text-sm font-sans block font-semibold">Name</label>
              <input type="text" placeholder="Your Name" className="w-full bg-[#111] border-none rounded-lg p-4 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-[#e61919] transition-all" />
            </div>
            <div className="space-y-2">
              <label className="text-white/60 text-sm font-sans block font-semibold">Email</label>
              <input type="email" placeholder="Your@email.com" className="w-full bg-[#111] border-none rounded-lg p-4 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-[#e61919] transition-all" />
            </div>
          </div>
          
          <div className="space-y-2">
            <label className="text-white/60 text-sm font-sans block font-semibold">Budget</label>
            <div className="relative">
              <select defaultValue="" className="w-full bg-[#111] border-none rounded-lg p-4 text-white appearance-none focus:outline-none focus:ring-2 focus:ring-[#e61919] transition-all cursor-pointer">
                <option value="" disabled className="text-white/30">Select...</option>
                <option value="1">Under $1k</option>
                <option value="2">$1k - $5k</option>
                <option value="3">$5k+</option>
              </select>
              <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 1.5L6 6.5L11 1.5" stroke="white" strokeOpacity="0.5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-white/60 text-sm font-sans block font-semibold">Message</label>
            <textarea placeholder="Message" rows={5} className="w-full bg-[#111] border-none rounded-lg p-4 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-[#e61919] transition-all resize-y" />
          </div>
          
          <button type="button" className="w-full bg-[#e61919] hover:bg-[#ff1a1a] text-white font-bold py-4 rounded-lg transition-colors mt-8 uppercase tracking-widest shadow-lg shadow-[#e61919]/20 hover:shadow-[#e61919]/40 cursor-pointer">
            Submit
          </button>
        </form>
      </div>
      
      <footer className="absolute bottom-0 w-full p-6 md:p-12 flex justify-between items-end text-white/40 font-sans text-[10px] uppercase tracking-[0.2em]">
        <div>© 2024 PORTFOLIO</div>
        <div className="flex gap-8">
          <a href="#" className="hover:text-white transition-colors">Twitter</a>
          <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-white transition-colors">Github</a>
        </div>
      </footer>
    </section>
  );
}
