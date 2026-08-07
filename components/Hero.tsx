"use client";

import { motion } from "framer-motion";
import { MusicProvider } from "./MusicContext";
import { MusicPlayer } from "./MusicPlayer";
import { MusicLyrics } from "./MusicLyrics";

export function Hero() {
  return (
    <MusicProvider>
      <section className="relative h-screen w-full pointer-events-none overflow-hidden">
        {/* Main Content Container */}
        <motion.div 
          className="absolute inset-0 w-full h-full flex flex-col items-center justify-center pb-20 md:pb-28"
        >
          <div className="max-w-[1700px] w-full px-4 sm:px-8 md:px-12 flex justify-between items-center h-full relative">
            
            {/* Left Side: Spider-Man Themed Synchronized Live Lyrics */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, delay: 0.3, ease: [0.76, 0, 0.24, 1] }}
              className="flex flex-col items-start z-20 pl-2 sm:pl-6 md:pl-10 lg:pl-14"
            >
              <MusicLyrics />
            </motion.div>

            {/* Right Side: Spider-Man Themed Music Player */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, delay: 0.5, ease: [0.76, 0, 0.24, 1] }}
              className="flex flex-col items-end z-20 pr-2 sm:pr-6 md:pr-10 lg:pr-14"
            >
              <MusicPlayer />
            </motion.div>

          </div>

          {/* Bottom - Scroll Down Indicator */}
          <div className="absolute bottom-10 w-full flex flex-col items-center justify-center gap-2 pointer-events-none">
            <span className="font-sans text-[10px] uppercase tracking-[0.4em] text-white/40">
              Scroll to explore
            </span>
            <div className="w-[1px] h-6 bg-gradient-to-b from-[#e61919]/60 to-transparent animate-pulse" />
          </div>
        </motion.div>
      </section>
    </MusicProvider>
  );
}
