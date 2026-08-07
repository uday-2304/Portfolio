"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useMusic } from "./MusicContext";

export function MusicLyrics() {
  const { currentSong, isPlaying, currentTime, handleSeek } = useMusic();
  const containerRef = useRef<HTMLDivElement | null>(null);
  const activeLineRef = useRef<HTMLParagraphElement | null>(null);
  const isUserScrollingRef = useRef(false);
  const userScrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Find active lyric line index based on currentTime
  const lyrics = currentSong.lyrics || [];
  let activeIndex = -1;
  for (let i = 0; i < lyrics.length; i++) {
    if (currentTime >= lyrics[i].time) {
      activeIndex = i;
    } else {
      break;
    }
  }

  // Smoothly scroll active line to center when not manually scrolling
  useEffect(() => {
    if (isUserScrollingRef.current) return;
    if (activeLineRef.current && containerRef.current) {
      const container = containerRef.current;
      const activeEl = activeLineRef.current;
      const targetScroll =
        activeEl.offsetTop - container.offsetTop - container.clientHeight / 2 + activeEl.clientHeight / 2;
      container.scrollTo({
        top: Math.max(0, targetScroll),
        behavior: "smooth"
      });
    }
  }, [activeIndex]);

  const handleWheel = () => {
    isUserScrollingRef.current = true;
    if (userScrollTimeoutRef.current) {
      clearTimeout(userScrollTimeoutRef.current);
    }
    userScrollTimeoutRef.current = setTimeout(() => {
      isUserScrollingRef.current = false;
    }, 2500);
  };

  return (
    <div 
      className="relative pointer-events-auto w-[280px] sm:w-[340px] md:w-[380px] select-none font-smooch"
      style={{ fontFamily: "'Smooch Sans', sans-serif" }}
    >
      {/* Spider-Man with Headphones Image Above Lyrics */}
      <motion.div
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex items-center gap-3 mb-2 pl-1"
      >
        <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden border border-white/20 shadow-[0_8px_24px_rgba(0,0,0,0.7)] bg-black flex-shrink-0">
          <motion.img
            src="/music/spiderman_headphones.png"
            alt="Spider-Man with Headphones"
            className="w-full h-full object-cover"
            animate={{
              scale: isPlaying ? [1, 1.03, 1] : 1,
            }}
            transition={{
              repeat: Infinity,
              duration: 2,
              ease: "easeInOut"
            }}
          />
        </div>

        <div className="flex flex-col">
          <span 
            className="text-white/40 text-sm uppercase tracking-widest font-semibold font-smooch"
            style={{ fontFamily: "'Smooch Sans', sans-serif" }}
          >
            Now Playing
          </span>
          <span 
            className="text-white text-lg sm:text-xl font-bold truncate max-w-[200px] font-smooch"
            style={{ fontFamily: "'Smooch Sans', sans-serif" }}
          >
            {currentSong.id === "sunflower" ? "Sunflower" : currentSong.id === "starboy" ? "Starboy" : "Loser"}
          </span>
        </div>
      </motion.div>

      {/* Pure Lyrics Stream - Clean text without red glows or music symbols */}
      <div
        ref={containerRef}
        onWheel={handleWheel}
        onTouchMove={handleWheel}
        className="relative h-[240px] sm:h-[270px] overflow-y-auto overscroll-contain py-4 space-y-1.5 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden font-smooch"
        style={{
          fontFamily: "'Smooch Sans', sans-serif",
          maskImage: "linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)"
        }}
      >
        {lyrics.map((line, idx) => {
          const isActive = idx === activeIndex;
          const isPassed = idx < activeIndex;

          return (
            <p
              key={idx}
              ref={isActive ? activeLineRef : null}
              onClick={() => handleSeek(line.time)}
              style={{ fontFamily: "'Smooch Sans', sans-serif" }}
              className={`cursor-pointer transition-all duration-200 text-left py-0.5 leading-snug tracking-wider ${
                isActive
                  ? "text-white font-bold text-2xl sm:text-3xl md:text-[30px] drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]"
                  : isPassed
                  ? "text-white/40 font-semibold text-lg sm:text-xl hover:text-white/80"
                  : "text-white/20 font-medium text-lg sm:text-xl hover:text-white/60"
              }`}
            >
              {line.text}
            </p>
          );
        })}
      </div>
    </div>
  );
}
