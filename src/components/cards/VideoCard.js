'use client';

import { useState, useRef } from 'react';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';
import { motion } from 'framer-motion';

export default function VideoCard({
  videoSrc,
  posterSrc,
  title,
  subtitle,
  badge = 'BROADCAST REEL',
  className = '',
  aspectRatio = 'aspect-video',
}) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <div
      className={`relative w-full ${aspectRatio} bg-black clip-angled overflow-hidden group border border-zinc-800 shadow-2xl ${className}`}
    >
      <video
        ref={videoRef}
        src={videoSrc}
        poster={posterSrc}
        autoPlay
        loop
        muted={isMuted}
        playsInline
        className="w-full h-full object-cover"
      />

      {/* Legibility Gradients */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/40 pointer-events-none" />

      {/* Header Info Badge */}
      <div className="absolute top-4 left-4 z-20 flex items-center gap-2">
        <span className="px-3 py-1 text-xs font-heading font-extrabold uppercase tracking-widest bg-brand-red text-white clip-tag shadow-lg">
          {badge}
        </span>
        <span className="flex h-2 w-2 relative">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-red opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-red" />
        </span>
      </div>

      {/* Play/Pause & Mute Interactive Controls */}
      <div className="absolute top-4 right-4 z-20 flex items-center gap-2">
        <button
          onClick={toggleMute}
          aria-label={isMuted ? 'Unmute video' : 'Mute video'}
          className="p-2.5 bg-black/70 hover:bg-zinc-800 text-white rounded-full backdrop-blur-md transition-colors"
        >
          {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
        </button>
        <button
          onClick={togglePlay}
          aria-label={isPlaying ? 'Pause video' : 'Play video'}
          className="p-2.5 bg-black/70 hover:bg-brand-red text-white rounded-full backdrop-blur-md transition-colors"
        >
          {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
        </button>
      </div>

      {/* Bottom Title & Description */}
      {(title || subtitle) && (
        <div className="absolute bottom-4 left-4 right-4 z-20">
          {title && (
            <h4 className="font-heading text-xl sm:text-2xl font-black uppercase text-white drop-shadow-md">
              {title}
            </h4>
          )}
          {subtitle && (
            <p className="text-xs sm:text-sm text-zinc-300 mt-1 max-w-xl drop-shadow">
              {subtitle}
            </p>
          )}
        </div>
      )}
    </div>
  );
}
