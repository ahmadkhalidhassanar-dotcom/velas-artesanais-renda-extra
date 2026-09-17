import React, { useState, useRef, useEffect } from 'react';
import { ArrowDown, Play, Pause, Volume2, VolumeX, Maximize, RotateCcw } from 'lucide-react';
import { HERO_VSL_VIDEO } from '../data/content';

interface HeroSectionProps {
  onCtaClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onCtaClick }) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  // Video remains paused on entry as requested
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.pause();
    setIsPlaying(false);
  }, []);

  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    const current = videoRef.current.currentTime;
    const total = videoRef.current.duration || 0;
    setCurrentTime(current);
    if (total > 0) {
      setProgress((current / total) * 100);
    }
  };

  const handleLoadedMetadata = () => {
    if (!videoRef.current) return;
    setDuration(videoRef.current.duration);
  };

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.muted = isMuted;
      videoRef.current
        .play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch(() => {
          if (videoRef.current) {
            videoRef.current.muted = true;
            setIsMuted(true);
            videoRef.current.play();
            setIsPlaying(true);
          }
        });
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const handleUnmute = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (!videoRef.current) return;
    videoRef.current.muted = false;
    setIsMuted(false);
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleMute = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (!videoRef.current) return;
    const newMuted = !videoRef.current.muted;
    videoRef.current.muted = newMuted;
    setIsMuted(newMuted);
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    if (!videoRef.current || duration === 0) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const percent = Math.max(0, Math.min(1, clickX / rect.width));
    videoRef.current.currentTime = percent * duration;
  };

  const toggleFullscreen = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!containerRef.current) return;
    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen?.().catch(() => {});
    } else {
      document.exitFullscreen?.().catch(() => {});
    }
  };

  const formatTime = (seconds: number) => {
    if (isNaN(seconds)) return '0:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  return (
    <section id="promessa" className="relative pt-6 pb-12 sm:pt-12 sm:pb-16 px-4 overflow-hidden bg-gradient-to-b from-[#F7EFE4]/70 via-[#FAF7F2] to-[#FAF7F2]">
      {/* Decorative ambient background glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 sm:w-[540px] h-72 bg-gradient-to-b from-[#F5DFCE]/40 to-transparent blur-3xl pointer-events-none -z-10" />

      <div className="max-w-2xl mx-auto text-center">
        {/* Headline */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[38px] font-black text-[#231D18] leading-[1.2] tracking-tight uppercase mb-4">
          VEJA COMO VOCÊ PODE GANHAR UM <span className="text-emerald-600">DINHEIRO EXTRA</span> FAZENDO VELAS EM CASA
        </h1>

        {/* Subheadline */}
        <p className="text-sm sm:text-base md:text-lg text-[#554A42] leading-relaxed max-w-xl mx-auto mb-7">
          Mesmo que você nunca tenha feito uma vela antes, aprenda receitas simples e o passo a passo prático para começar em casa.
        </p>

        {/* 9:16 VSL Video Container */}
        <div
          ref={containerRef}
          id="hero-vsl-container"
          onClick={togglePlay}
          className="relative mb-7 mx-auto w-full max-w-[340px] sm:max-w-[375px] aspect-[9/16] rounded-3xl overflow-hidden shadow-[0_16px_40px_rgba(40,30,20,0.18)] border-4 border-white ring-1 ring-[#DFD4C4] bg-neutral-950 cursor-pointer select-none group"
        >
          {/* Native HTML5 Video Element */}
          <video
            ref={videoRef}
            src={HERO_VSL_VIDEO}
            playsInline
            muted={isMuted}
            loop
            preload="metadata"
            onTimeUpdate={handleTimeUpdate}
            onLoadedMetadata={handleLoadedMetadata}
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
            className="w-full h-full object-cover"
          />

          {/* Unmute Attention Banner (High-Conversion VSL Best Practice) */}
          {isMuted && isPlaying && (
            <button
              type="button"
              id="vsl-unmute-banner"
              onClick={handleUnmute}
              className="absolute top-4 inset-x-3.5 z-20 py-2.5 px-3.5 rounded-2xl bg-gradient-to-r from-[#D96522] to-[#B34C0E] text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-[0_8px_20px_rgba(200,90,23,0.4)] backdrop-blur-xs transition-transform active:scale-95 animate-pulse cursor-pointer border border-white/20"
            >
              <VolumeX className="w-4 h-4 shrink-0" />
              <span>Seu vídeo já começou! Toque para ouvir</span>
            </button>
          )}

          {/* Center Play Button Overlay (when paused or before start) */}
          {!isPlaying && (
            <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-black/40 backdrop-blur-[2px] transition-opacity">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#D96522] text-white flex items-center justify-center shadow-2xl pl-1 border-2 border-white/40 hover:scale-105 transition-transform duration-200">
                <Play className="w-8 h-8 sm:w-10 sm:h-10 fill-white" />
              </div>
              <p className="text-white text-xs sm:text-sm font-bold uppercase tracking-wider mt-3.5 drop-shadow-md">
                Clique para assistir ao vídeo
              </p>
            </div>
          )}

          {/* Bottom Controls Overlay */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="absolute inset-x-0 bottom-0 z-20 pt-8 pb-3 px-3.5 bg-gradient-to-t from-black/85 via-black/40 to-transparent flex flex-col gap-2 transition-opacity duration-200 opacity-90 group-hover:opacity-100"
          >
            {/* Interactive Progress Bar */}
            <div
              className="w-full h-2.5 bg-white/25 rounded-full overflow-hidden cursor-pointer flex items-center"
              onClick={handleSeek}
              title="Avançar / Retroceder"
            >
              <div
                className="h-full bg-gradient-to-r from-[#D96522] to-[#F59E0B] rounded-full transition-all duration-100"
                style={{ width: `${progress}%` }}
              />
            </div>

            {/* Control Buttons & Timestamp */}
            <div className="flex items-center justify-between text-white text-xs pt-0.5">
              <div className="flex items-center gap-2.5">
                <button
                  type="button"
                  id="vsl-play-toggle"
                  onClick={togglePlay}
                  className="p-1.5 rounded-lg hover:bg-white/20 transition-colors cursor-pointer"
                  title={isPlaying ? 'Pausar' : 'Reproduzir'}
                >
                  {isPlaying ? (
                    <Pause className="w-4 h-4 fill-white" />
                  ) : (
                    <Play className="w-4 h-4 fill-white" />
                  )}
                </button>

                <button
                  type="button"
                  id="vsl-sound-toggle"
                  onClick={toggleMute}
                  className="p-1.5 rounded-lg hover:bg-white/20 transition-colors flex items-center gap-1 cursor-pointer"
                  title={isMuted ? 'Ativar som' : 'Desativar som'}
                >
                  {isMuted ? (
                    <VolumeX className="w-4 h-4 text-amber-300" />
                  ) : (
                    <Volume2 className="w-4 h-4" />
                  )}
                  <span className="text-[11px] font-medium hidden sm:inline">
                    {isMuted ? 'Ativar som' : 'Som ativo'}
                  </span>
                </button>

                <span className="text-[11px] text-white/80 tabular-nums">
                  {formatTime(currentTime)} / {formatTime(duration)}
                </span>
              </div>

              <div className="flex items-center gap-1">
                <button
                  type="button"
                  id="vsl-fullscreen-toggle"
                  onClick={toggleFullscreen}
                  className="p-1.5 rounded-lg hover:bg-white/20 transition-colors cursor-pointer"
                  title="Tela cheia"
                >
                  <Maximize className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Primary CTA Button */}
        <div className="w-full max-w-md mx-auto space-y-3">
          <a
            href="#antes-de-continuar"
            id="hero-cta-button"
            onClick={(e) => {
              e.preventDefault();
              onCtaClick();
            }}
            className="w-full py-4 sm:py-4.5 px-6 rounded-2xl bg-gradient-to-r from-[#D96522] via-[#C85A17] to-[#B34C0E] hover:from-[#C85A17] hover:to-[#9E3E08] active:scale-[0.98] text-white font-extrabold text-lg sm:text-xl shadow-[0_12px_28px_-6px_rgba(200,90,23,0.4)] transition-all duration-200 flex items-center justify-center gap-2.5 cursor-pointer text-center"
          >
            <span>QUERO COMEÇAR AGORA</span>
            <ArrowDown className="w-5 h-5 animate-bounce" />
          </a>

          <p className="text-xs sm:text-sm text-[#6C6057] font-medium">
            Acesso imediato • Videoaulas + Apostilas • 7 dias de garantia
          </p>
        </div>
      </div>
    </section>
  );
};

