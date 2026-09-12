import React from 'react';
import { PLANS } from '../data/content';
import { PlanItem } from '../types';
import { Sparkles, ShieldCheck, CreditCard, Lock, CheckCircle2 } from 'lucide-react';
import { OfferCountdown } from './OfferCountdown';

interface OfferSectionProps {
  onSelectPlan: (plan: PlanItem) => void;
}

export const OfferSection: React.FC<OfferSectionProps> = ({ onSelectPlan }) => {
  const basicPlan = PLANS.find((p) => p.id === 'basic')!;
  const completePlan = PLANS.find((p) => p.id === 'complete')!;

  return (
    <section id="oferta" className="py-14 sm:py-22 px-4 bg-[#FAF7F2] scroll-mt-6">
      <div className="max-w-2xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-9 sm:mb-12">
          {/* 15-Minute Countdown matching uploaded reference */}
          <OfferCountdown />

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#231D18] leading-tight uppercase mb-3.5">
            ESCOLHA COMO VOCÊ QUER COMEÇAR
          </h2>
          <p className="text-sm sm:text-base text-[#574D45] leading-relaxed max-w-lg mx-auto">
            Você pode começar apenas aprendendo a fazer suas velas ou escolher o plano completo e também receber os materiais extras para começar a vender.
          </p>
        </div>

        {/* Pricing Cards Stacked (Mobile First) */}
        <div className="space-y-8 sm:space-y-10">
          {/* PLANO BÁSICO (Clean, but visually more discreet) */}
          <div className="bg-white rounded-3xl p-6 sm:p-7 border border-[#E8DFD3] text-center shadow-xs">
            <h3 className="text-xl sm:text-2xl font-black text-[#231D18] uppercase">
              {basicPlan.name}
            </h3>
            <p className="text-xs sm:text-sm text-[#6C6057] mt-1 max-w-sm mx-auto">
              {basicPlan.description}
            </p>

            {/* Price */}
            <div className="mt-4 flex items-center justify-center gap-1.5">
              <span className="text-sm font-semibold text-stone-500">Por apenas</span>
              <span className="text-3xl sm:text-4xl font-black text-[#231D18]">
                {basicPlan.price}
              </span>
              <span className="text-xs text-stone-500 font-medium">pagamento único</span>
            </div>

            {/* Checklist */}
            <div className="border-t border-b border-[#EFE5D6] py-4 my-5 space-y-2.5 text-left max-w-xs mx-auto">
              {basicPlan.features.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2 text-sm text-[#483E36]">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>

            {/* Button */}
            <button
              type="button"
              id="cta-basic-plan"
              onClick={() => onSelectPlan(basicPlan)}
              className="w-full max-w-sm mx-auto py-3.5 px-5 rounded-xl bg-stone-800 hover:bg-stone-900 active:scale-[0.98] text-white font-bold text-sm sm:text-base transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm"
            >
              <span>{basicPlan.ctaText}</span>
            </button>
          </div>

          {/* PLANO COMPLETO (Highlighted, clearly superior value) */}
          <div id="card-plano-completo" className="relative bg-white rounded-3xl p-6 sm:p-9 border-3 border-[#C85A17] shadow-[0_16px_40px_rgba(200,90,23,0.14)] mt-4 scroll-mt-6">
            {/* Top Pill / Badge: ⭐ MAIS ESCOLHIDO */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#D96522] to-[#B34C0E] text-white text-xs sm:text-sm font-black px-5 py-1.5 rounded-full shadow-md flex items-center gap-1.5 uppercase tracking-wider whitespace-nowrap border-2 border-white">
              <Sparkles className="w-3.5 h-3.5 text-amber-200" />
              <span>⭐ MAIS ESCOLHIDO</span>
            </div>

            <div className="text-center pt-2 mb-6">
              <span className="text-xs font-black text-[#C85A17] uppercase tracking-widest block mb-1">
                MELHOR CUSTO-BENEFÍCIO
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-[#231D18] uppercase">
                {completePlan.name}
              </h3>
              <p className="text-xs sm:text-sm text-[#6C6057] mt-1.5 max-w-sm mx-auto">
                {completePlan.description}
              </p>

              {/* Price */}
              <div className="mt-5 p-4 rounded-2xl bg-[#F7FBF8] border-2 border-emerald-200/80 inline-block w-full max-w-xs shadow-xs">
                {/* Original price in red, crossed-out and small */}
                <div className="flex items-center justify-center gap-1.5 text-xs sm:text-sm font-bold text-stone-500">
                  <span className="uppercase tracking-wider text-[11px] sm:text-xs">De</span>
                  <span className="text-red-600 line-through decoration-red-500 decoration-2 font-black text-sm sm:text-base">
                    {completePlan.originalPrice || 'R$197,99'}
                  </span>
                  <span className="uppercase tracking-wider text-[11px] sm:text-xs">por apenas</span>
                </div>

                {/* Promotional price in green */}
                <div className="flex items-baseline justify-center gap-1 my-1">
                  <span className="text-4xl sm:text-5xl font-black text-emerald-600 tracking-tight">
                    {completePlan.price}
                  </span>
                </div>
                <span className="text-xs text-stone-500 font-medium block">pagamento único • sem mensalidades</span>
              </div>
              <p className="text-xs text-emerald-800 font-bold mt-2">
                Acesso completo com videoaulas + apostilas + todos os bônus
              </p>
            </div>

            {/* Checklist of Features */}
            <div className="border-t border-b border-[#EFE5D6] py-5 mb-6 space-y-3">
              {completePlan.features.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-sm sm:text-base text-[#352B24]">
                  <CheckCircle2 className="w-4.5 h-4.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span className={idx >= 3 ? 'font-bold text-[#A84A22]' : 'font-medium'}>
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* Large Call to Action Button */}
            <a
              id="cta-complete-plan"
              href={completePlan.checkoutUrl || 'https://pay.cakto.com.br/7mkzsaq_1103195'}
              onClick={(e) => {
                if (!completePlan.checkoutUrl) {
                  e.preventDefault();
                  onSelectPlan(completePlan);
                }
              }}
              className="w-full py-4 sm:py-4.5 px-6 rounded-2xl bg-gradient-to-r from-[#D96522] via-[#C85A17] to-[#B34C0E] hover:from-[#C85A17] hover:to-[#9E3E08] active:scale-[0.98] text-white font-black text-lg sm:text-xl shadow-[0_12px_28px_-6px_rgba(200,90,23,0.4)] hover:shadow-[0_16px_32px_-4px_rgba(200,90,23,0.5)] transition-all flex items-center justify-center gap-2 cursor-pointer no-underline text-center"
            >
              <span>{completePlan.ctaText}</span>
              <Sparkles className="w-5 h-5 text-amber-200" />
            </a>

            <div className="mt-4 flex flex-wrap items-center justify-center gap-4 text-xs text-[#6C6057]">
              <span className="inline-flex items-center gap-1 font-semibold text-emerald-800">
                <Lock className="w-3.5 h-3.5 text-emerald-700" />
                Compra 100% Segura
              </span>
              <span>•</span>
              <span className="inline-flex items-center gap-1 font-medium">
                <CreditCard className="w-3.5 h-3.5" />
                PIX instantâneo ou Cartão
              </span>
            </div>
          </div>
        </div>

        {/* Security badges row */}
        <div className="mt-9 text-center text-xs text-[#6C6057] flex flex-wrap items-center justify-center gap-4 pt-5 border-t border-[#EAE0D2]">
          <span className="inline-flex items-center gap-1.5 font-bold text-[#231D18]">
            <ShieldCheck className="w-4 h-4 text-emerald-700" />
            Garantia incondicional de 7 dias
          </span>
          <span className="hidden sm:inline">•</span>
          <span className="font-medium">Acesso liberado imediatamente após confirmação</span>
        </div>
      </div>
    </section>
  );
};

