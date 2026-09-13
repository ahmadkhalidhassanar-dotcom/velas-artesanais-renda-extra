import React from 'react';
import { ArrowDown } from 'lucide-react';
import { HERO_IMAGE, HERO_IMAGE_FALLBACK } from '../data/content';

interface HeroSectionProps {
  onCtaClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onCtaClick }) => {
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

        {/* Main Finished Candles Image */}
        <div className="relative mb-7 rounded-3xl overflow-hidden shadow-[0_12px_32px_rgba(40,30,20,0.08)] border-2 border-[#EFE5D6] bg-white">
          <img
            src={HERO_IMAGE}
            alt="Velas artesanais aromáticas feitas em casa para renda extra"
            className="w-full h-auto object-cover max-h-[420px] mx-auto block"
            referrerPolicy="no-referrer"
            loading="eager"
            onError={(e) => {
              if (e.currentTarget.src !== HERO_IMAGE_FALLBACK) {
                e.currentTarget.src = HERO_IMAGE_FALLBACK;
              }
            }}
          />
        </div>

        {/* Primary CTA Button */}
        <div className="w-full max-w-md mx-auto space-y-3">
          <button
            type="button"
            id="hero-cta-button"
            onClick={onCtaClick}
            className="w-full py-4 sm:py-4.5 px-6 rounded-2xl bg-gradient-to-r from-[#D96522] via-[#C85A17] to-[#B34C0E] hover:from-[#C85A17] hover:to-[#9E3E08] active:scale-[0.98] text-white font-extrabold text-lg sm:text-xl shadow-[0_12px_28px_-6px_rgba(200,90,23,0.4)] transition-all duration-200 flex items-center justify-center gap-2.5 cursor-pointer"
          >
            <span>QUERO COMEÇAR AGORA</span>
            <ArrowDown className="w-5 h-5 animate-bounce" />
          </button>

          <p className="text-xs sm:text-sm text-[#6C6057] font-medium">
            Acesso imediato • Videoaulas + Apostilas • 7 dias de garantia
          </p>
        </div>
      </div>
    </section>
  );
};

