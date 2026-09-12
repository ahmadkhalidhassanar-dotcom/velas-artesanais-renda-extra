import React from 'react';
import { ShieldCheck, ArrowRight } from 'lucide-react';

export const GuaranteeSection: React.FC<{ onCtaClick: () => void }> = ({ onCtaClick }) => {
  return (
    <section id="garantia" className="py-12 sm:py-16 px-4 bg-[#F5EFE6]/80 border-y border-[#EAE0D2]">
      <div className="max-w-xl mx-auto text-center">
        {/* Seal / Icon */}
        <div className="inline-flex items-center justify-center w-18 h-18 rounded-full bg-emerald-100 text-emerald-800 border-2 border-emerald-400/80 shadow-xs mb-4">
          <ShieldCheck className="w-9 h-9" />
        </div>

        {/* Title */}
        <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-[#231D18] leading-tight uppercase mb-3">
          GARANTIA INCONDICIONAL DE 7 DIAS
        </h2>

        {/* Text */}
        <p className="text-sm sm:text-base text-[#554A42] leading-relaxed mb-6 max-w-md mx-auto">
          Acesse todo o conteúdo com segurança. Se em até 7 dias você achar que o método não é para você, solicite o reembolso e receba 100% do seu dinheiro de volta.
        </p>

        {/* CTA */}
        <div>
          <button
            type="button"
            id="cta-guarantee"
            onClick={onCtaClick}
            className="inline-flex items-center justify-center gap-2 py-3.5 px-7 rounded-2xl bg-gradient-to-r from-[#D96522] via-[#C85A17] to-[#B34C0E] hover:from-[#C85A17] hover:to-[#9E3E08] active:scale-[0.98] text-white font-extrabold text-base shadow-[0_10px_24px_-4px_rgba(200,90,23,0.35)] transition-all cursor-pointer"
          >
            <span>QUERO COMEÇAR SEM RISCO</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

