"use client";

import React, { createContext, useContext, useState, useRef, useEffect } from "react";

export interface LyricLine {
  time: number;
  text: string;
}

export interface Song {
  id: string;
  title: string;
  artist: string;
  defaultDuration: number;
  audioSrc: string;
  coverImg: string;
  themeColor: string;
  accentGlow: string;
  coverType: "sunflower" | "loser" | "starboy";
  lyrics: LyricLine[];
}

export const PLAYLIST: Song[] = [
  {
    id: "sunflower",
    title: "Sunflower - Spider-Man: Into the Spider-Verse",
    artist: "Song • Post Malone, Swae Lee",
    defaultDuration: 158,
    audioSrc: "/music/sunflower.mp3",
    coverImg: "/music/covers/sunflower.png",
    themeColor: "#e61919",
    accentGlow: "rgba(230, 25, 25, 0.45)",
    coverType: "sunflower",
    lyrics: [
      { time: 0, text: "Intro - Post Malone & Swae Lee" },
      { time: 4.4, text: "Ayy, ayy, ayy, ayy (Ooh)" },
      { time: 9.3, text: "Ooh, ooh, ooh, ooh (Ooh)" },
      { time: 11.2, text: "Ayy, ayy" },
      { time: 16.0, text: "Ooh, ooh, ooh, ooh" },
      { time: 27.4, text: "Needless to say, I keep in check" },
      { time: 29.8, text: "She was all bad-bad, nevertheless" },
      { time: 33.1, text: "Callin' it quits now, baby, I'm a wreck" },
      { time: 35.4, text: "Crash at my place, baby, you're a wreck" },
      { time: 37.8, text: "Needless to say, I'm keepin' in check" },
      { time: 40.3, text: "She was all bad-bad, nevertheless" },
      { time: 43.3, text: "Callin' it quits now, baby, I'm a wreck" },
      { time: 45.7, text: "Crash at my place, baby, you're a wreck" },
      { time: 48.4, text: "Thinkin' in a bad way, losin' your grip" },
      { time: 51.0, text: "Screamin' at my face, baby, don't trip" },
      { time: 53.7, text: "Someone took a big L, don't know how that felt" },
      { time: 56.6, text: "Lookin' at you sideways, party on tilt" },
      { time: 59.1, text: "Ooh-ooh, some things you just can't refuse" },
      { time: 63.9, text: "She wanna ride me like a cruise" },
      { time: 66.6, text: "And I'm not tryna lose" },
      { time: 70.5, text: "Then you're left in the dust" },
      { time: 73.2, text: "Unless I stuck by ya" },
      { time: 76.0, text: "You're a sunflower" },
      { time: 78.5, text: "I think your love would be too much" },
      { time: 81.1, text: "Or you'll be left in the dust" },
      { time: 84.0, text: "Unless I stuck by ya" },
      { time: 86.7, text: "You're the sunflower" },
      { time: 89.4, text: "You're the sunflower" },
      { time: 91.6, text: "Every time I'm leavin' on ya" },
      { time: 94.2, text: "You don't make it easy, no, no" },
      { time: 96.8, text: "Wish I could be there for ya" },
      { time: 99.5, text: "Give me a reason to go" },
      { time: 102.6, text: "Every time I'm walkin' out" },
      { time: 104.7, text: "I can hear you tellin' me to turn around" },
      { time: 107.2, text: "Fightin' for my trust and you won't back down" },
      { time: 109.8, text: "Even if we gotta risk it all right now, oh" },
      { time: 112.9, text: "I know you're scared of the unknown" },
      { time: 115.6, text: "You don't wanna be alone" },
      { time: 118.1, text: "I know I always come and go" },
      { time: 120.8, text: "But it's out of my control" },
      { time: 124.3, text: "And you'll be left in the dust" },
      { time: 126.8, text: "Unless I stuck by ya" },
      { time: 129.2, text: "You're a sunflower" },
      { time: 131.8, text: "I think your love would be too much" },
      { time: 134.5, text: "Or you'll be left in the dust" },
      { time: 137.3, text: "Unless I stuck by ya" },
      { time: 140.0, text: "You're the sunflower" },
      { time: 142.5, text: "You're the sunflower" }
    ]
  },
  {
    id: "starboy",
    title: "Starboy",
    artist: "Song • The Weeknd, Daft Punk",
    defaultDuration: 230,
    audioSrc: "/music/starboy.mp3",
    coverImg: "/music/covers/starboy.png",
    themeColor: "#ff0055",
    accentGlow: "rgba(255, 0, 85, 0.45)",
    coverType: "starboy",
    lyrics: [
      { time: 0, text: "Intro - Daft Punk Synth & Beat" },
      { time: 15.5, text: "I'm tryna put you in the worst mood, ah" },
      { time: 18.0, text: "P1 cleaner than your church shoes, ah" },
      { time: 20.5, text: "Milli point two just to hurt you, ah" },
      { time: 23.0, text: "All red Lamb' just to tease you, ah" },
      { time: 25.5, text: "None of these toys on lease too, ah" },
      { time: 28.0, text: "Made your whole year in a week too, yah" },
      { time: 30.5, text: "Main girl out your league too, ah" },
      { time: 33.0, text: "Side girl out of your league too, ah" },
      { time: 35.5, text: "House so empty, need a centerpiece" },
      { time: 38.0, text: "20 racks a table cut from ebony" },
      { time: 40.5, text: "Cut that ivory into skinny pieces" },
      { time: 43.0, text: "Then she clean it with her face, man I love my baby" },
      { time: 46.0, text: "You talkin' money, need a hearing aid" },
      { time: 48.5, text: "You talkin' 'bout me, I don't see the shade" },
      { time: 51.0, text: "Switch up my style, I take any lane" },
      { time: 53.5, text: "I switch up my cup, I kill any pain" },
      { time: 55.8, text: "Ha-ha-ha-ha-ha-ha-ha-ha-ha-ha" },
      { time: 58.2, text: "Look what you've done" },
      { time: 60.6, text: "Ha-ha-ha-ha-ha-ha-ha-ha-ha-ha" },
      { time: 63.2, text: "I'm a motherfuckin' starboy" },
      { time: 65.8, text: "Ha-ha-ha-ha-ha-ha-ha-ha-ha-ha" },
      { time: 68.4, text: "Look what you've done" },
      { time: 70.8, text: "Ha-ha-ha-ha-ha-ha-ha-ha-ha-ha" },
      { time: 73.4, text: "I'm a motherfuckin' starboy" },
      { time: 75.8, text: "Everyday a rival try to test me, ah" },
      { time: 78.4, text: "Every day they try to end me, ah" },
      { time: 80.8, text: "Pull up in that Roadster SV, ah" },
      { time: 83.3, text: "Pockets overweight, gettin' hefty, ah" },
      { time: 85.8, text: "Coming for the king, that's a far cry, ah" },
      { time: 88.3, text: "I come alive in the fall time, I" },
      { time: 90.8, text: "No competition, don't hesitate" },
      { time: 93.4, text: "Let's float this city together, make 'em elevate" },
      { time: 95.9, text: "Ha-ha-ha-ha-ha-ha-ha-ha-ha-ha" },
      { time: 98.3, text: "Look what you've done" },
      { time: 100.8, text: "Ha-ha-ha-ha-ha-ha-ha-ha-ha-ha" },
      { time: 103.3, text: "I'm a motherfuckin' starboy" },
      { time: 105.9, text: "Ha-ha-ha-ha-ha-ha-ha-ha-ha-ha" },
      { time: 108.4, text: "Look what you've done" },
      { time: 110.9, text: "Ha-ha-ha-ha-ha-ha-ha-ha-ha-ha" },
      { time: 113.4, text: "I'm a motherfuckin' starboy" },
      { time: 116.0, text: "Let a brother brag, let a brother brag" },
      { time: 118.5, text: "Buy the whole store and get the best bag" },
      { time: 121.0, text: "Star Trek roof in that Wraith, yeah" },
      { time: 123.5, text: "Girls get loose when they hear this, yeah" },
      { time: 126.0, text: "100 on the dash, get me close to God" },
      { time: 128.5, text: "We don't pray for love, we just pray for cars" },
      { time: 131.0, text: "House so empty, need a centerpiece" },
      { time: 133.5, text: "20 racks a table cut from ebony" },
      { time: 136.0, text: "Cut that ivory into skinny pieces" },
      { time: 138.5, text: "Then she clean it with her face, man I love my baby" },
      { time: 141.2, text: "You talkin' money, need a hearing aid" },
      { time: 143.8, text: "You talkin' 'bout me, I don't see the shade" },
      { time: 146.3, text: "Switch up my style, I take any lane" },
      { time: 148.8, text: "I switch up my cup, I kill any pain" },
      { time: 151.2, text: "Ha-ha-ha-ha-ha-ha-ha-ha-ha-ha" },
      { time: 153.7, text: "Look what you've done" },
      { time: 156.2, text: "Ha-ha-ha-ha-ha-ha-ha-ha-ha-ha" },
      { time: 158.7, text: "I'm a motherfuckin' starboy" },
      { time: 161.2, text: "Ha-ha-ha-ha-ha-ha-ha-ha-ha-ha" },
      { time: 163.7, text: "Look what you've done" },
      { time: 166.2, text: "Ha-ha-ha-ha-ha-ha-ha-ha-ha-ha" },
      { time: 168.7, text: "I'm a motherfuckin' starboy" }
    ]
  },
  {
    id: "loser",
    title: "The Less I Know The Better",
    artist: "Song • Tame Impala",
    defaultDuration: 214,
    audioSrc: "/music/loser.mp3",
    coverImg: "/music/covers/loser.png",
    themeColor: "#ff3366",
    accentGlow: "rgba(255, 51, 102, 0.45)",
    coverType: "loser",
    lyrics: [
      { time: 0, text: "Intro - Psychedelic Bassline" },
      { time: 25.1, text: "Someone said they left together" },
      { time: 29.2, text: "I ran out the door to get her" },
      { time: 33.5, text: "She was holding hands with Trevor" },
      { time: 37.7, text: "Not the greatest feeling ever" },
      { time: 42.0, text: "Said, \"Pull yourself together\"" },
      { time: 45.8, text: "\"You should try your luck with Heather\"" },
      { time: 49.8, text: "Then I heard they slept together" },
      { time: 53.8, text: "Oh, the less I know the better" },
      { time: 62.7, text: "The less I know the better" },
      { time: 66.8, text: "Oh, my love, can't you see yourself by my side?" },
      { time: 74.7, text: "No surprise when you're on his shoulder like every night" },
      { time: 82.8, text: "Oh, my love, can't you see that you're on my mind?" },
      { time: 91.4, text: "Don't suppose we could convince your lover to change his mind?" },
      { time: 99.2, text: "So goodbye" },
      { time: 107.2, text: "She said, \"It's not now or never" },
      { time: 111.5, text: "Wait ten years, we'll be together\"" },
      { time: 115.6, text: "I said, \"Better late than never" },
      { time: 119.5, text: "Just don't make me wait forever\"" },
      { time: 128.2, text: "Don't make me wait forever" },
      { time: 136.6, text: "Don't make me wait forever" },
      { time: 140.5, text: "Oh, my love, can't you see yourself by my side?" },
      { time: 148.8, text: "I don't suppose you could convince your lover to change his mind?" },
      { time: 157.6, text: "I was doing fine without ya" },
      { time: 161.5, text: "Till I saw your face, now I can't erase" },
      { time: 165.7, text: "Giving in to all his bullshit" },
      { time: 169.8, text: "Is this what you want? Is this who you are?" },
      { time: 174.1, text: "I was doing fine without ya" },
      { time: 177.7, text: "Till I saw your eyes turn away from mine" },
      { time: 182.1, text: "Oh, sweet darling, where he wants..." }
    ]
  }
];

interface MusicContextType {
  currentIndex: number;
  currentSong: Song;
  isPlaying: boolean;
  currentTime: number;
  duration: number;
  isMuted: boolean;
  isLiked: boolean;
  audioRef: React.RefObject<HTMLAudioElement | null>;
  togglePlay: () => void;
  handleNext: () => void;
  handlePrev: () => void;
  handleSeek: (time: number) => void;
  toggleMute: () => void;
  toggleLike: () => void;
}

const MusicContext = createContext<MusicContextType | null>(null);

export function MusicProvider({ children }: { children: React.ReactNode }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(PLAYLIST[0].defaultDuration);
  const [isMuted, setIsMuted] = useState(false);
  const [isLiked, setIsLiked] = useState(true);

  const currentSong = PLAYLIST[currentIndex];
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Fast, lightweight time sync timer (100ms interval for silky smooth sync without 60fps overhead)
  useEffect(() => {
    let intervalId: NodeJS.Timeout;
    if (isPlaying) {
      intervalId = setInterval(() => {
        if (audioRef.current) {
          setCurrentTime(audioRef.current.currentTime || 0);
        }
      }, 100);
    }
    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [isPlaying]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    try {
      audio.pause();
      audio.src = currentSong.audioSrc;
      audio.load();
      setCurrentTime(0);
      setDuration(currentSong.defaultDuration);

      if (isPlaying) {
        const playPromise = audio.play();
        if (playPromise && typeof playPromise.catch === "function") {
          playPromise.catch(() => {
            setIsPlaying(false);
          });
        }
      }
    } catch (err) {
      console.warn("Audio switch error handled safely:", err);
    }
  }, [currentIndex, currentSong.audioSrc]);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      const playPromise = audio.play();
      if (playPromise && typeof playPromise.then === "function") {
        playPromise
          .then(() => {
            setIsPlaying(true);
          })
          .catch(() => {
            setIsPlaying(false);
          });
      }
    }
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % PLAYLIST.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + PLAYLIST.length) % PLAYLIST.length);
  };

  const handleSeek = (time: number) => {
    const audio = audioRef.current;
    const clamped = Math.max(0, Math.min(duration, time));
    setCurrentTime(clamped);
    if (audio) {
      try {
        audio.currentTime = clamped;
      } catch (e) {
        console.warn("Audio seek handled safely:", e);
      }
    }
  };

  const toggleMute = () => {
    const next = !isMuted;
    setIsMuted(next);
    if (audioRef.current) audioRef.current.muted = next;
  };

  const toggleLike = () => {
    setIsLiked(!isLiked);
  };

  return (
    <MusicContext.Provider
      value={{
        currentIndex,
        currentSong,
        isPlaying,
        currentTime,
        duration,
        isMuted,
        isLiked,
        audioRef,
        togglePlay,
        handleNext,
        handlePrev,
        handleSeek,
        toggleMute,
        toggleLike
      }}
    >
      {children}
      <audio
        ref={audioRef}
        src={currentSong.audioSrc}
        preload="metadata"
        muted={isMuted}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onEnded={handleNext}
        onError={(e) => {
          e.stopPropagation();
        }}
        onLoadedMetadata={() => {
          if (audioRef.current && !isNaN(audioRef.current.duration) && audioRef.current.duration > 0) {
            setDuration(audioRef.current.duration);
          }
        }}
        onTimeUpdate={() => {
          if (audioRef.current) {
            setCurrentTime(audioRef.current.currentTime || 0);
          }
        }}
      />
    </MusicContext.Provider>
  );
}

export function useMusic() {
  const context = useContext(MusicContext);
  if (!context) {
    throw new Error("useMusic must be used within a MusicProvider");
  }
  return context;
}
