import React, { useState } from 'react';
import { Play, Sparkles } from 'lucide-react';

interface VslPlayerProps {
  posterUrl?: string;
  vimeoId?: string;
}

export const VslPlayer: React.FC<VslPlayerProps> = ({
  posterUrl = '/vimeo_thumbnail.jpg',
  vimeoId = '1226440424',
}) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const startPlayback = () => {
    setIsPlaying(true);
  };

  return (
    <div
      id="vsl-video-container"
      className="relative w-full max-w-[340px] sm:max-w-[380px] mx-auto rounded-3xl overflow-hidden shadow-[0_16px_40px_rgba(40,30,20,0.18)] border-4 border-[#231D18]/10 bg-black aspect-[9/16] select-none"
    >
      {/* Top Banner overlay indicator */}
      <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-20 pointer-events-none">
        <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/65 backdrop-blur-md text-white text-[11px] sm:text-xs font-bold shadow-md border border-white/10">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <span>VÍDEO EXCLUSIVO</span>
        </div>
      </div>

      {/* Vimeo Embedded Player */}
      {isPlaying ? (
        <iframe
          src={`https://player.vimeo.com/video/${vimeoId}?autoplay=1&title=0&byline=0&portrait=0&badge=0&dnt=1`}
          className="w-full h-full border-0 absolute inset-0"
          allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          title="VSL Velas Artesanais Lucrativas"
        />
      ) : (
        /* High-converting Cover / Play Prompt with Real Video Poster */
        <div
          onClick={startPlayback}
          className="relative w-full h-full cursor-pointer group flex flex-col items-center justify-center text-center p-5"
        >
          {/* Real Background Poster from the Vimeo Video */}
          <img
            src={posterUrl}
            alt="Capa do vídeo demonstrativo de velas artesanais"
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            onError={(e) => {
              if (e.currentTarget.src !== '/vsl_video_poster.jpg') {
                e.currentTarget.src = '/vsl_video_poster.jpg';
              }
            }}
          />

          {/* Dark Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/50 group-hover:from-black/75 transition-colors" />

          {/* Center Play Button & Call to Action */}
          <div className="relative z-10 flex flex-col items-center">
            <div className="relative mb-4">
              <div className="absolute -inset-2.5 rounded-full bg-emerald-400/35 animate-ping" />
              <div className="relative w-20 h-20 sm:w-22 sm:h-22 rounded-full bg-gradient-to-tr from-[#D96522] via-[#C85A17] to-amber-500 text-white flex items-center justify-center shadow-[0_8px_28px_rgba(200,90,23,0.55)] border-3 border-white group-hover:scale-110 transition-transform">
                <Play className="w-9 h-9 sm:w-10 sm:h-10 ml-1.5 fill-current text-white" />
              </div>
            </div>

            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400 text-[#231D18] text-xs font-black uppercase tracking-wider mb-2.5 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-amber-900" />
              <span>Assista ao Vídeo Completo</span>
            </div>

            <p className="text-white text-base sm:text-lg font-black leading-snug drop-shadow-md max-w-[260px]">
              Toque para ouvir a explicação de como começar hoje
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
