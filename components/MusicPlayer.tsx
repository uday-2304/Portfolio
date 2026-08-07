"use client";

import { motion } from "framer-motion";
import { Play, Pause, SkipBack, SkipForward, Volume2, VolumeX, Heart, Music2 } from "lucide-react";
import { useMusic } from "./MusicContext";
import Image from "next/image";

export function MusicPlayer() {
  const {
    currentSong,
    isPlaying,
    currentTime,
    duration,
    isMuted,
    isLiked,
    togglePlay,
    handleNext,
    handlePrev,
    handleSeek,
    toggleMute,
    toggleLike
  } = useMusic();

  const handleSeekFromBar = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const clickRatio = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
    const targetTime = clickRatio * (duration || currentSong.defaultDuration);
    handleSeek(targetTime);
  };

  const formatTime = (seconds: number) => {
    if (!seconds || isNaN(seconds)) return "0:00";
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

  const progressPercent = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <div className="relative group/player select-none pointer-events-auto">
      {/* "Listening to" Title with Animated Note */}
      <div className="flex items-center gap-2 mb-2 pl-1">
        <Music2 className="w-4 h-4 text-[#e61919] animate-pulse" />
        <span className="font-mono text-xs tracking-wider text-white/50 uppercase">
          Listening to
        </span>
      </div>

      {/* Spider-Man Glass Player Container with Beautiful Curved Edges */}
      <motion.div
        layout
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative w-[320px] sm:w-[360px] md:w-[390px] bg-[#0c0d12]/90 backdrop-blur-xl border border-white/10 rounded-[28px] p-5 shadow-[0_20px_60px_rgba(0,0,0,0.85)] overflow-hidden transition-all duration-300 hover:border-[#e61919]/40 hover:shadow-[0_0_40px_rgba(230,25,25,0.25)] flex flex-col gap-4"
      >
        {/* Subtle Spider Web Background Grid */}
        <div 
          className="absolute inset-0 opacity-[0.08] pointer-events-none bg-[radial-gradient(#e61919_1px,transparent_1px)] [background-size:16px_16px]" 
        />
        
        {/* Ambient Corner Glow */}
        <div 
          className="absolute -top-12 -right-12 w-36 h-36 rounded-full blur-3xl pointer-events-none transition-colors duration-700"
          style={{ backgroundColor: currentSong.accentGlow }}
        />

        {/* Top: Original Album Art & Song Details */}
        <div className="flex items-center gap-3.5 relative z-10">
          
          {/* Original Album Art Container with Smooth Curved Edges */}
          <div className="relative w-14 h-14 rounded-2xl overflow-hidden flex-shrink-0 bg-black border border-white/20 shadow-[0_4px_16px_rgba(0,0,0,0.8)] group">
            <img
              src={currentSong.coverImg}
              alt={currentSong.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            
            {/* Live pulsating dot when playing */}
            {isPlaying && (
              <span className="absolute bottom-1.5 right-1.5 w-2 h-2 rounded-full bg-[#e61919] animate-ping" />
            )}
          </div>

          {/* Song Info */}
          <div className="flex-1 min-w-0">
            <h3 className="font-heading font-bold text-sm sm:text-base text-white truncate tracking-wide">
              {currentSong.title}
            </h3>
            <p className="font-sans text-xs text-white/50 truncate mt-0.5 font-medium">
              {currentSong.artist}
            </p>
          </div>
        </div>

        {/* Middle: Controls */}
        <div className="flex items-center justify-between relative z-10 px-1">
          {/* Mute/Unmute */}
          <button 
            onClick={toggleMute}
            className="w-8 h-8 flex items-center justify-center text-white/60 hover:text-white transition-colors cursor-pointer"
            aria-label={isMuted ? "Unmute" : "Mute"}
          >
            {isMuted ? <VolumeX className="w-5 h-5 text-[#e61919]" /> : <Volume2 className="w-5 h-5" />}
          </button>

          {/* Previous, Play/Pause, Next */}
          <div className="flex items-center gap-3.5">
            <button
              onClick={handlePrev}
              className="w-8 h-8 flex items-center justify-center text-white/70 hover:text-[#e61919] transition-all hover:scale-110 active:scale-95 cursor-pointer"
              aria-label="Previous Song"
            >
              <SkipBack className="w-5 h-5 fill-current" />
            </button>

            <button
              onClick={togglePlay}
              className="w-11 h-11 rounded-full bg-white text-black hover:bg-[#e61919] hover:text-white flex items-center justify-center shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_25px_rgba(230,25,25,0.6)] transition-all duration-300 transform active:scale-90 cursor-pointer"
              aria-label={isPlaying ? "Pause" : "Play"}
            >
              {isPlaying ? (
                <Pause className="w-5 h-5 fill-current" />
              ) : (
                <Play className="w-5 h-5 fill-current ml-0.5" />
              )}
            </button>

            <button
              onClick={handleNext}
              className="w-8 h-8 flex items-center justify-center text-white/70 hover:text-[#e61919] transition-all hover:scale-110 active:scale-95 cursor-pointer"
              aria-label="Next Song"
            >
              <SkipForward className="w-5 h-5 fill-current" />
            </button>
          </div>

          {/* Favorite Heart */}
          <button
            onClick={toggleLike}
            className="w-8 h-8 flex items-center justify-center text-white/60 hover:text-[#e61919] transition-colors cursor-pointer"
            aria-label="Like"
          >
            <Heart 
              className={`w-5 h-5 transition-all ${isLiked ? "fill-[#e61919] text-[#e61919]" : "hover:text-white"}`} 
            />
          </button>
        </div>

        {/* Bottom: Progress Bar & Timestamps */}
        <div className="relative z-10">
          <div 
            className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden relative cursor-pointer group/bar"
            onClick={handleSeekFromBar}
          >
            <motion.div
              className="h-full bg-gradient-to-r from-[#b30000] via-[#e61919] to-[#ff4d4d] rounded-full relative"
              style={{ width: `${progressPercent}%` }}
            >
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2.5 h-2.5 bg-white rounded-full shadow-[0_0_8px_#fff] opacity-0 group-hover/bar:opacity-100 transition-opacity" />
            </motion.div>
          </div>

          <div className="flex justify-between items-center mt-1 text-[11px] font-mono text-white/40">
            <span>{formatTime(currentTime)}</span>
            <span>{formatTime(duration)}</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
