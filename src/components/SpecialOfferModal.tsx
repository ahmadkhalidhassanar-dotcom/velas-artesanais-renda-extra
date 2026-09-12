import React from 'react';
import { TrendingUp, X } from 'lucide-react';
import { CHECKOUT_URL_COMPLETE_DISCOUNT_19, CHECKOUT_URL_BASIC_10 } from '../data/content';

interface SpecialOfferModalProps {
  isOpen: boolean;
  onAcceptDiscount: () => void;
  onDeclineAndBuyBasic: () => void;
  onClose: () => void;
}

export const SpecialOfferModal: React.FC<SpecialOfferModalProps> = ({
  isOpen,
  onAcceptDiscount,
  onDeclineAndBuyBasic,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs transition-opacity animate-in fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative bg-[#FCFAF7] w-full max-w-[390px] rounded-2xl shadow-2xl border border-stone-200/80 pt-7 pb-6 px-5 sm:px-6 text-center animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button 'X' */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-3.5 right-3.5 text-stone-400 hover:text-stone-700 transition-colors p-1 cursor-pointer"
          aria-label="Fechar pop-up"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Title in Serif Display */}
        <h2 className="font-serif-display text-xl sm:text-[22px] font-bold text-[#2A241F] text-center mb-4 tracking-tight leading-snug">
          Espere! Oferta Especial Para Você
        </h2>

        {/* Dashed Border Highlight Box */}
        <div className="border-2 border-dashed border-[#2E6B4B] rounded-2xl py-5 px-4 text-center mb-5 bg-white/40">
          <p className="text-stone-700 text-sm sm:text-[15px] font-normal">
            Leve o <strong className="font-bold text-stone-900">Plano Completo</strong> por apenas
          </p>

          {/* Big Green Price */}
          <div className="font-serif-display text-5xl sm:text-[54px] font-bold text-[#2E6B4B] my-1.5 tracking-tight">
            R$19
          </div>

          {/* Subtitle inside dashed box */}
          <p className="text-xs sm:text-[13px] text-stone-600 font-medium leading-relaxed max-w-[280px] mx-auto">
            Método 2.0, suporte no WhatsApp, e 8 Bônus incríveis completamente DE GRAÇA!
          </p>
        </div>

        {/* Main CTA Button */}
        <a
          id="btn-accept-discount"
          href={CHECKOUT_URL_COMPLETE_DISCOUNT_19}
          onClick={onAcceptDiscount}
          className="w-full py-3.5 px-4 rounded-xl bg-[#E07204] hover:bg-[#CC6600] active:scale-[0.98] text-white font-bold text-base sm:text-[17px] shadow-[0_4px_14px_rgba(224,114,4,0.35)] transition-all flex items-center justify-center gap-2 cursor-pointer mb-3.5 no-underline"
        >
          <TrendingUp className="w-5 h-5 text-white stroke-[2.5]" />
          <span>Sim, Quero Aproveitar o Desconto!</span>
        </a>

        {/* Decline Underlined Link */}
        <a
          id="btn-decline-discount"
          href={CHECKOUT_URL_BASIC_10}
          onClick={onDeclineAndBuyBasic}
          className="w-full text-xs sm:text-[13px] text-stone-500 hover:text-stone-800 underline underline-offset-3 cursor-pointer transition-colors text-center mb-4 block"
        >
          Não, quero comprar o básico e perder a oferta.
        </a>

        {/* Footer info text */}
        <p className="text-xs sm:text-[13px] text-stone-500 text-center font-normal">
          Suporte Personalizado no WhatsApp
        </p>
      </div>
    </div>
  );
};

