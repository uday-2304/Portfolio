"use client";

import { useState } from "react";
import { motion, useScroll, useTransform, useAnimationFrame, useMotionValue } from "framer-motion";
import { useRef } from "react";
import { PenTool, Atom, Wind, Flame, Send, Sparkles, Terminal, Code2, Layers, Cpu, CheckCircle2, AlertCircle, Loader2, Mail } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-24 md:py-36 relative flex items-center z-10 bg-transparent">
      {/* Background Gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#020813]/90 to-[#020813] -z-10" />
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-[#e61919]/[0.04] rounded-full blur-[180px] pointer-events-none -z-10" />
      
      <div className="max-w-[1240px] mx-auto px-6 md:px-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Image Side with Spider-Man Theme Frame */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative aspect-[4/5] w-full max-w-md mx-auto lg:mx-0 rounded-3xl overflow-hidden shadow-[0_0_60px_rgba(230,25,25,0.2)] border border-[#e61919]/30 group"
          >
            <img 
              src="/profile.png" 
              alt="Uday Tejan" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
            />
          </motion.div>

          {/* Text Side */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#e61919]/10 border border-[#e61919]/30 text-[#e61919] font-sans text-xs font-semibold uppercase tracking-widest mb-4">
                <Sparkles className="w-3.5 h-3.5" />
                <span>About Me</span>
              </div>
              <h2 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-3 leading-tight">
                I am <span className="text-[#e61919]">Uday</span>.
              </h2>
              <h3 className="font-heading text-2xl md:text-3xl text-white/50">
                Crafting High-Performance Web Applications
              </h3>
            </div>
            
            <div className="space-y-6 font-sans text-base md:text-lg text-white/70 leading-relaxed font-normal">
              <p>
                I specialize in crafting immersive digital experiences that live at the intersection of performance and aesthetics. Driven by high standards of engineering, I transform complex ideas into blazing-fast, intuitive web interfaces.
              </p>
              <p>
                With deep expertise across modern frontend frameworks, 3D WebGL interactions, and algorithmic problem-solving, I engineer applications tailored for seamless real-world usability.
              </p>
            </div>

            {/* Stat Counters */}
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-white/10">
              <div>
                <p className="font-heading text-3xl md:text-4xl font-bold text-white">700+</p>
                <p className="font-sans text-xs text-white/50 mt-1">DSA & CP Solved</p>
              </div>
              <div>
                <p className="font-heading text-3xl md:text-4xl font-bold text-white">Top 4</p>
                <p className="font-sans text-xs text-white/50 mt-1">Hackathon Podiums</p>
              </div>
              <div>
                <p className="font-heading text-3xl md:text-4xl font-bold text-white">100%</p>
                <p className="font-sans text-xs text-white/50 mt-1">Responsive & Fluid</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export { ProjectsSection as Projects } from "./ProjectsSection";
export { Achievements } from "./Achievements";

export function Abilities() {
  const languages = [
    {
      name: "Python (Advanced)",
      icon: (
        <div className="w-12 h-12 flex items-center justify-center">
          <svg className="w-10 h-10" viewBox="0 0 128 128">
            <path fill="#3776AB" d="M63.5 16.5c-23.7 0-22.2 10.3-22.2 10.3l.1 10.7h22.6v3.2H32.2S16 38.9 16 63.3s14.1 23.6 14.1 23.6h8.4v-11.8s-.5-14.1 13.9-14.1h22.4s13.3.2 13.3-13V29.5s2-13-24.6-13zm-12.7 7.2a4 4 0 1 1 0 8 4 4 0 0 1 0-8z"/>
            <path fill="#FFD438" d="M64.5 111.5c23.7 0 22.2-10.3 22.2-10.3l-.1-10.7H64v-3.2h31.8s16.2 1.8 16.2-22.6-14.1-23.6-14.1-23.6h-8.4v11.8s.5 14.1-13.9 14.1H53.2s-13.3-.2-13.3 13v21.5s-2 13 24.6 13zm12.7-7.2a4 4 0 1 1 0-8 4 4 0 0 1 0 8z"/>
          </svg>
        </div>
      ),
    },
    {
      name: "C++",
      icon: (
        <div className="w-12 h-12 bg-[#00599C] rounded-xl flex items-center justify-center font-bold text-white text-lg shadow-[0_0_15px_rgba(0,89,156,0.35)]">
          C++
        </div>
      ),
    },
    {
      name: "Java",
      icon: (
        <div className="w-12 h-12 bg-[#E76F00]/20 border border-[#E76F00]/40 rounded-xl flex items-center justify-center shadow-[0_0_15px_rgba(231,111,0,0.3)]">
          <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
            <path d="M12 2C8 6 6 8 8 11C10 14 13 13 14 15C15 17 13 19 10 20" stroke="#EA2D2E" strokeWidth="2" strokeLinecap="round"/>
            <path d="M7 6C5 9 5 11 7 13C9 15 11 14 12 16" stroke="#5382A1" strokeWidth="2" strokeLinecap="round"/>
            <path d="M4 21C8 22 16 22 20 21" stroke="#5382A1" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </div>
      ),
    },
    {
      name: "JavaScript",
      icon: (
        <div className="w-12 h-12 bg-[#F7DF1E] rounded-xl flex items-center justify-center font-bold text-black text-xl shadow-[0_0_15px_rgba(247,223,30,0.3)]">
          JS
        </div>
      ),
    },
    {
      name: "SQL",
      icon: (
        <div className="w-12 h-12 bg-[#336791]/20 border border-[#336791]/40 rounded-xl flex items-center justify-center shadow-[0_0_15px_rgba(51,103,145,0.3)]">
          <svg className="w-7 h-7 text-[#4FC3F7]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <ellipse cx="12" cy="5" rx="9" ry="3"/>
            <path d="M3 5V19A9 3 0 0 0 21 19V5"/>
            <path d="M3 12A9 3 0 0 0 21 12"/>
          </svg>
        </div>
      ),
    },
    {
      name: "C",
      icon: (
        <div className="w-12 h-12 bg-[#A8B9CC] rounded-xl flex items-center justify-center font-bold text-[#00599C] text-2xl shadow-[0_0_15px_rgba(168,185,204,0.3)]">
          C
        </div>
      ),
    },
  ];

  const toolsAndFrameworks = [
    {
      name: "LangChain",
      icon: (
        <div className="w-12 h-12 bg-[#00A67E]/15 border border-[#00A67E]/40 rounded-xl flex items-center justify-center shadow-[0_0_15px_rgba(0,166,126,0.3)]">
          <svg className="w-7 h-7 text-[#00A67E]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
            <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
          </svg>
        </div>
      ),
    },
    {
      name: "LangGraph",
      icon: (
        <div className="w-12 h-12 bg-[#06B6D4]/15 border border-[#06B6D4]/40 rounded-xl flex items-center justify-center shadow-[0_0_15px_rgba(6,182,212,0.3)]">
          <svg className="w-7 h-7 text-[#06B6D4]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="18" cy="5" r="3"/>
            <circle cx="6" cy="12" r="3"/>
            <circle cx="18" cy="19" r="3"/>
            <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/>
            <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
          </svg>
        </div>
      ),
    },
    {
      name: "CrewAI",
      icon: (
        <div className="w-12 h-12 bg-[#FF5722]/15 border border-[#FF5722]/40 rounded-xl flex items-center justify-center shadow-[0_0_15px_rgba(255,87,34,0.3)]">
          <svg className="w-7 h-7 text-[#FF5722]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
            <circle cx="9" cy="7" r="4"/>
            <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
            <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
          </svg>
        </div>
      ),
    },
    {
      name: "Claude",
      icon: (
        <div className="w-12 h-12 bg-[#D97706]/15 border border-[#D97706]/40 rounded-xl flex items-center justify-center shadow-[0_0_15px_rgba(217,119,6,0.3)]">
          <svg className="w-7 h-7 text-[#F59E0B]" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L14.4 9.6L22 12L14.4 14.4L12 22L9.6 14.4L2 12L9.6 9.6L12 2Z"/>
          </svg>
        </div>
      ),
    },
    {
      name: "Cursor",
      icon: (
        <div className="w-12 h-12 bg-white/10 border border-white/30 rounded-xl flex items-center justify-center shadow-[0_0_15px_rgba(255,255,255,0.2)]">
          <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="currentColor">
            <path d="M3 3L10.07 20.97L13.58 13.58L20.97 10.07L3 3Z"/>
          </svg>
        </div>
      ),
    },
    {
      name: "Git",
      icon: (
        <div className="w-12 h-12 bg-[#F05032]/15 border border-[#F05032]/40 rounded-xl flex items-center justify-center shadow-[0_0_15px_rgba(240,80,50,0.3)]">
          <svg className="w-7 h-7 text-[#F05032]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="6" y1="3" x2="6" y2="15"/>
            <circle cx="18" cy="6" r="3"/>
            <circle cx="6" cy="18" r="3"/>
            <path d="M18 9a9 9 0 0 1-9 9"/>
          </svg>
        </div>
      ),
    },
    {
      name: "GitHub Actions",
      icon: (
        <div className="w-12 h-12 bg-[#2088FF]/15 border border-[#2088FF]/40 rounded-xl flex items-center justify-center shadow-[0_0_15px_rgba(32,136,255,0.3)]">
          <svg className="w-7 h-7 text-[#2088FF]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
          </svg>
        </div>
      ),
    },
    {
      name: "Linux",
      icon: (
        <div className="w-12 h-12 bg-[#FCC624]/15 border border-[#FCC624]/40 rounded-xl flex items-center justify-center shadow-[0_0_15px_rgba(252,198,36,0.3)]">
          <svg className="w-7 h-7 text-[#FCC624]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="4 17 10 11 4 5"/>
            <line x1="12" y1="19" x2="20" y2="19"/>
          </svg>
        </div>
      ),
    },
  ];

  const marqueeText = "Technologies and Tools I Use · Skills & Stack · Technologies and Tools I Use · Skills & Stack · ";

  return (
    <section id="abilities" className="py-24 md:py-32 relative bg-[#020813] overflow-hidden flex flex-col justify-center gap-16">
      {/* Infinite Seamless Scrolling Watermark Text Above Icons */}
      <div className="w-full overflow-hidden whitespace-nowrap opacity-15 z-0 flex items-center pointer-events-none select-none">
        <motion.div 
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 25 }}
          className="flex whitespace-nowrap gap-6 font-heading text-[5vw] md:text-[6vw] font-black text-white tracking-tighter uppercase"
        >
          <span>{marqueeText}{marqueeText}</span>
          <span>{marqueeText}{marqueeText}</span>
        </motion.div>
      </div>

      <div className="relative z-10 max-w-[1240px] mx-auto px-6 w-full">
        {/* Section Header */}
        <div className="text-center mb-14">
          <p className="font-sans text-white/50 text-xs font-semibold uppercase tracking-widest mb-2">My Tech Arsenal</p>
          <h3 className="font-heading text-4xl md:text-5xl font-bold text-white tracking-tight">Technologies & Tools</h3>
        </div>

        {/* Row 1: Programming Languages & Databases */}
        <div className="mb-10">
          <p className="text-center font-mono text-xs uppercase tracking-widest text-white/40 mb-6">Programming Languages & Databases</p>
          <div className="flex flex-wrap justify-center gap-5 sm:gap-6 md:gap-8">
            {languages.map((tech, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.04 }}
                className="flex flex-col items-center gap-3 group"
              >
                <div className="w-20 h-20 bg-[#090d16]/90 border border-white/10 rounded-2xl flex items-center justify-center shadow-xl group-hover:-translate-y-2 group-hover:border-white/40 group-hover:shadow-[0_0_30px_rgba(255,255,255,0.15)] transition-all duration-300 relative overflow-hidden backdrop-blur-md">
                  <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  {tech.icon}
                </div>
                <span className="font-sans text-xs text-white/60 font-medium group-hover:text-white transition-colors duration-300">{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Row 2: AI Frameworks & Developer Tools */}
        <div>
          <p className="text-center font-mono text-xs uppercase tracking-widest text-white/40 mb-6">AI Frameworks & Developer Tools</p>
          <div className="flex flex-wrap justify-center gap-5 sm:gap-6 md:gap-8">
            {toolsAndFrameworks.map((tech, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.04 }}
                className="flex flex-col items-center gap-3 group"
              >
                <div className="w-20 h-20 bg-[#090d16]/90 border border-white/10 rounded-2xl flex items-center justify-center shadow-xl group-hover:-translate-y-2 group-hover:border-white/40 group-hover:shadow-[0_0_30px_rgba(255,255,255,0.15)] transition-all duration-300 relative overflow-hidden backdrop-blur-md">
                  <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  {tech.icon}
                </div>
                <span className="font-sans text-xs text-white/60 font-medium group-hover:text-white transition-colors duration-300">{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    scope: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMessage("Please fill in your name, email, and message.");
      return;
    }

    setStatus("submitting");
    setErrorMessage(null);

    try {
      const response = await fetch("https://formsubmit.co/ajax/udaytejan23@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          project_scope: formData.scope || "Not specified",
          message: formData.message,
          _subject: `🔥 Portfolio Inquiry from ${formData.name} (${formData.email})`,
          _template: "table",
          _captcha: "false",
        }),
      });

      const data = await response.json();
      if (response.ok && (data.success === "true" || data.success === true || response.status === 200)) {
        setStatus("success");
        setFormData({ name: "", email: "", scope: "", message: "" });
      } else {
        setStatus("error");
        setErrorMessage(data.message || "Failed to deliver message. Please try again or email directly.");
      }
    } catch (err) {
      console.error("Form submission error:", err);
      setStatus("error");
      setErrorMessage("Network error occurred. You can reach out directly to udaytejan23@gmail.com.");
    }
  };

  return (
    <section id="contact" className="py-28 md:py-36 relative bg-[#01040a] min-h-screen flex flex-col justify-between border-t border-white/10 overflow-hidden">
      {/* Spider-Man ambient red glow */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[650px] h-[650px] bg-[#e61919]/[0.05] rounded-full blur-[220px] pointer-events-none -z-10" />

      <div className="max-w-[1100px] mx-auto px-6 md:px-12 w-full my-auto">
        <div className="mb-16 relative">
          <h2 className="font-heading text-6xl md:text-8xl lg:text-[9rem] font-bold text-white leading-none z-10 relative tracking-tighter uppercase">
            LET'S WORK
          </h2>
          <h2 className="font-heading text-6xl md:text-8xl lg:text-[9rem] font-bold text-white/10 leading-none absolute top-10 sm:top-14 left-0 -z-0 tracking-tighter uppercase select-none">
            TOGETHER
          </h2>
        </div>
        
        {/* Contact Form Card */}
        <div className="bg-[#090d16]/90 backdrop-blur-xl border border-white/10 rounded-3xl p-8 sm:p-12 shadow-2xl">
          {status === "success" ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="text-center py-10 space-y-6"
            >
              <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 mx-auto flex items-center justify-center shadow-[0_0_30px_rgba(16,185,129,0.2)]">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div className="space-y-2 max-w-md mx-auto">
                <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white">
                  Message Delivered!
                </h3>
                <p className="font-sans text-white/70 text-sm sm:text-base leading-relaxed">
                  Thank you for reaching out! Your message has been routed directly to <span className="text-white font-semibold underline underline-offset-4 decoration-[#e61919]">udaytejan23@gmail.com</span>.
                </p>
                <p className="font-sans text-white/50 text-xs mt-2">
                  I will review your project requirements and reply to your email as soon as possible.
                </p>
              </div>

              <button
                type="button"
                onClick={() => setStatus("idle")}
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-sans text-xs sm:text-sm font-semibold px-6 py-3 rounded-xl transition-all"
              >
                <span>Send Another Message</span>
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {errorMessage && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-red-500/10 border border-red-500/30 text-red-300 text-xs sm:text-sm p-4 rounded-xl flex items-center justify-between gap-3"
                >
                  <div className="flex items-center gap-2.5">
                    <AlertCircle className="w-4 h-4 text-red-400 flex-shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                  <a
                    href="mailto:udaytejan23@gmail.com"
                    className="underline hover:text-white font-semibold text-xs whitespace-nowrap"
                  >
                    Direct Email
                  </a>
                </motion.div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-white/70 text-xs font-sans block font-semibold uppercase tracking-wider">
                    Your Name <span className="text-[#e61919]">*</span>
                  </label>
                  <input 
                    type="text" 
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Alex Miller" 
                    className="w-full bg-white/[0.04] border border-white/10 rounded-xl p-4 text-white placeholder-white/30 focus:outline-none focus:border-[#e61919] focus:ring-1 focus:ring-[#e61919] transition-all font-sans text-sm" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-white/70 text-xs font-sans block font-semibold uppercase tracking-wider">
                    Your Email <span className="text-[#e61919]">*</span>
                  </label>
                  <input 
                    type="email" 
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="alex@example.com" 
                    className="w-full bg-white/[0.04] border border-white/10 rounded-xl p-4 text-white placeholder-white/30 focus:outline-none focus:border-[#e61919] focus:ring-1 focus:ring-[#e61919] transition-all font-sans text-sm" 
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-white/70 text-xs font-sans block font-semibold uppercase tracking-wider">Project Budget / Scope</label>
                <div className="relative">
                  <select 
                    value={formData.scope}
                    onChange={(e) => setFormData({ ...formData, scope: e.target.value })}
                    className="w-full bg-white/[0.04] border border-white/10 rounded-xl p-4 text-white appearance-none focus:outline-none focus:border-[#e61919] focus:ring-1 focus:ring-[#e61919] transition-all cursor-pointer font-sans text-sm"
                  >
                    <option value="" className="bg-[#090d16] text-white/40">Select project scope (optional)...</option>
                    <option value="Under $1k (Small project / Bugfix)" className="bg-[#090d16] text-white">Under $1k (Small project / Bugfix)</option>
                    <option value="$1k - $5k (Full Web App / MVP)" className="bg-[#090d16] text-white">$1k - $5k (Full Web App / MVP)</option>
                    <option value="$5k+ (Full-Stack / Enterprise Architecture)" className="bg-[#090d16] text-white">$5k+ (Full-Stack / Enterprise Architecture)</option>
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                    <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 1.5L6 6.5L11 1.5" stroke="white" strokeOpacity="0.5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-white/70 text-xs font-sans block font-semibold uppercase tracking-wider">
                  Your Message <span className="text-[#e61919]">*</span>
                </label>
                <textarea 
                  required
                  rows={4} 
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell me about your project, timeline, and goals..." 
                  className="w-full bg-white/[0.04] border border-white/10 rounded-xl p-4 text-white placeholder-white/30 focus:outline-none focus:border-[#e61919] focus:ring-1 focus:ring-[#e61919] transition-all resize-y font-sans text-sm" 
                />
              </div>
              
              <button 
                type="submit" 
                disabled={status === "submitting"}
                className="w-full bg-[#e61919] hover:bg-[#ff1a1a] disabled:bg-[#e61919]/60 disabled:cursor-not-allowed text-white font-heading font-bold text-base py-4 rounded-xl transition-all duration-300 uppercase tracking-widest shadow-lg shadow-[#e61919]/25 hover:shadow-[#e61919]/50 cursor-pointer flex items-center justify-center gap-2 group"
              >
                {status === "submitting" ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Sending Message...</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
      
      {/* Footer */}
      <footer className="w-full max-w-[1240px] mx-auto p-6 md:px-12 flex flex-col sm:flex-row justify-between items-center gap-4 text-white/50 font-sans text-xs uppercase tracking-wider border-t border-white/5">
        <div>© 2026 UDAY TEJAN · ALL RIGHTS RESERVED</div>
        <div className="flex items-center gap-8">
          <a href="https://github.com/uday-2304" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GitHub</a>
          <a href="mailto:udaytejan23@gmail.com" className="hover:text-white transition-colors flex items-center gap-1.5">
            <Mail className="w-3.5 h-3.5" />
            <span>udaytejan23@gmail.com</span>
          </a>
        </div>
      </footer>
    </section>
  );
}
