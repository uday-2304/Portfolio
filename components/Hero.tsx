"use client";

import { motion } from "framer-motion";



export function Hero() {
  return (
    <section className="relative h-screen w-full pointer-events-none overflow-hidden">
      
      {/* Sticky Typography Container */}
      <motion.div 
        className="absolute inset-0 w-full h-full flex flex-col items-center justify-center pb-32"
      >
        <div className="max-w-[1600px] w-full px-6 md:px-12 flex justify-between items-center h-full relative">
          
          {/* Left - Scroll Down */}
          <div className="absolute left-6 md:left-12 bottom-32 flex flex-col items-center gap-4">
            <div className="w-[1px] h-12 bg-[#e61919]/30 relative" />
            <div className="border border-[#e61919]/30 rounded-full w-12 h-32 flex items-center justify-center">
              <span className="font-sans text-[9px] uppercase tracking-[0.3em] text-white/50 whitespace-nowrap -rotate-90">Scroll Down</span>
            </div>
            <div className="w-[1px] h-12 bg-[#e61919]/30 relative" />
          </div>

          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, delay: 0.5, ease: [0.76, 0, 0.24, 1] }}
            className="flex flex-col z-10 pl-24 md:pl-32"
          >
            <span className="font-heading italic text-5xl md:text-6xl lg:text-7xl text-white">between</span>
            <span className="font-heading text-7xl md:text-8xl lg:text-[11rem] leading-none text-white font-medium ml-4 md:ml-12 drop-shadow-2xl">Reality</span>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, delay: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="flex flex-col items-end z-10 mt-32 lg:mt-64 pr-24 md:pr-32"
          >
            <span className="font-heading italic text-5xl md:text-6xl lg:text-7xl text-white drop-shadow-2xl">&</span>
            <span className="font-heading text-7xl md:text-8xl lg:text-[11rem] leading-none text-white font-medium drop-shadow-2xl">Dream</span>
          </motion.div>


        </div>

        {/* Bottom - Text */}
        <div className="absolute bottom-12 w-full text-center">
          <span className="font-sans text-[10px] uppercase tracking-[0.4em] text-white/40">Shots that will change your mind</span>
        </div>
      </motion.div>
    </section>
  );
}
