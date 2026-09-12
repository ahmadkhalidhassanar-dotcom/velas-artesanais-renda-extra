import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface FinalCtaSectionProps {
  onCtaClick: () => void;
}

export const FinalCtaSection: React.FC<FinalCtaSectionProps> = ({ onCtaClick }) => {
  return (
    <section id="cta-final" className="py-12 sm:py-16 px-4 bg-gradient-to-b from-[#FAF7F2] via-[#F5ECE0] to-[#EFE2D2] border-t border-[#E8DFD3] relative overflow-hidden">
      <div className="max-w-xl mx-auto text-center">
        {/* Title */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#231D18] leading-tight uppercase mb-3">
          SUA PRIMEIRA VELA PODE SER O COMEÇO DE ALGO SEU
        </h2>

        <p className="text-sm sm:text-base text-[#554A42] leading-relaxed mb-7 max-w-md mx-auto">
          Comece com poucas unidades, ganhe prática no seu tempo e construa uma fonte de renda extra em casa.
        </p>

        {/* Main CTA Button */}
        <div className="space-y-3 max-w-md mx-auto">
          <button
            type="button"
            id="final-cta-button"
            onClick={onCtaClick}
            className="w-full py-4 sm:py-4.5 px-6 rounded-2xl bg-gradient-to-r from-[#D96522] via-[#C85A17] to-[#B34C0E] hover:from-[#C85A17] hover:to-[#9E3E08] active:scale-[0.98] text-white font-black text-lg sm:text-xl shadow-[0_12px_28px_-6px_rgba(200,90,23,0.4)] transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>QUERO COMEÇAR AGORA</span>
            <ArrowUpRight className="w-5 h-5" />
          </button>

          <p className="text-xs sm:text-sm text-[#6C6057] font-medium">
            Acesso imediato • Videoaulas + Apostilas • 7 dias de garantia
          </p>
        </div>
      </div>
    </section>
  );
};

