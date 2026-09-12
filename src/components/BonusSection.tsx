import React from 'react';
import { BONUS_BUNDLE_IMAGE, BONUS_BUNDLE_IMAGE_FALLBACK, BONUSES, PLUS_FIVE_BONUSES } from '../data/content';
import { Gift, Award, Calculator, DollarSign, Check } from 'lucide-react';

export const BonusSection: React.FC = () => {
  const getSubBonusIcon = (index: number) => {
    switch (index) {
      case 0:
      case 1:
        return <Award className="w-4 h-4 text-amber-600" />;
      case 2:
        return <Calculator className="w-4 h-4 text-[#C85A17]" />;
      case 3:
        return <DollarSign className="w-4 h-4 text-emerald-700" />;
      default:
        return <Check className="w-4 h-4 text-emerald-700" />;
    }
  };

  return (
    <section id="bonus" className="bg-[#F5EFE6]/80 border-y border-[#EAE0D2] pb-14 sm:pb-20">
      {/* Full-width Black Banner covering entire lateral width */}
      <div id="antes-de-continuar" className="w-full bg-black text-white py-7 sm:py-9 px-4 text-center mb-10 sm:mb-12 shadow-md scroll-mt-2">
        <div className="max-w-2xl mx-auto flex flex-col items-center justify-center">
          <span className="inline-flex items-center justify-center gap-2 text-xl sm:text-2xl md:text-3xl font-black text-white tracking-wide mb-2.5">
            <span>👀</span> ANTES DE VOCÊ CONTINUAR...
          </span>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl font-extrabold text-white leading-snug max-w-xl mx-auto">
            ESCOLHENDO O PLANO COMPLETO VOCE RECEBE DE BONUS TODOS ESSES MATERIAIS ABAIXO:👇
          </p>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-4">
        {/* Bonus Cards (1, 2, 3, 4) with Real Images */}
        <div className="space-y-7 sm:space-y-9 mb-9">
          {BONUSES.map((bonus) => (
            <div
              key={bonus.id}
              className="bg-white rounded-3xl p-5 sm:p-7 border border-[#E8DFD3] shadow-[0_6px_24px_rgba(0,0,0,0.03)] hover:border-[#C85A17]/35 hover:shadow-md transition-all text-center"
            >
              {/* Identificação do Bônus */}
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#FAF0E6] text-[#C85A17] font-extrabold text-xs uppercase tracking-wider mb-3.5 border border-[#F2DECE]">
                <Gift className="w-3.5 h-3.5 text-[#C85A17]" />
                <span>{bonus.badge}</span>
              </div>

              {/* Título */}
              <h3 className="text-lg sm:text-xl font-black text-[#231D18] mb-4">
                {bonus.title}
              </h3>

              {/* Real Mockup Image from Album */}
              {bonus.image && (
                <div className="rounded-2xl overflow-hidden shadow-sm mb-5 max-w-lg mx-auto bg-[#F8F5EF] border border-[#EAE1D3]">
                  <img
                    src={bonus.image}
                    alt={bonus.title}
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    onError={(e) => {
                      if (bonus.fallbackImage && e.currentTarget.src !== bonus.fallbackImage) {
                        e.currentTarget.src = bonus.fallbackImage;
                      }
                    }}
                    className="w-full h-auto object-contain hover:scale-[1.01] transition-transform duration-300 block"
                  />
                </div>
              )}

              {/* Valor Normal Riscado em Vermelho */}
              <div className="mb-1 flex items-center justify-center gap-2">
                <span className="text-xs uppercase font-bold text-stone-400">Preço normal:</span>
                <span className="text-base sm:text-lg font-bold text-red-500 line-through">
                  {bonus.originalPrice}
                </span>
              </div>

              {/* HOJE: GRÁTIS em Verde com Bastante Destaque */}
              <div className="mb-4">
                <span className="inline-block bg-emerald-600 text-white text-sm sm:text-base font-black px-4 py-1.5 rounded-xl shadow-xs tracking-wide">
                  HOJE: GRÁTIS
                </span>
              </div>

              {/* Descrição Curta */}
              <p className="text-sm sm:text-base text-[#574D45] leading-relaxed max-w-md mx-auto">
                {bonus.description}
              </p>
            </div>
          ))}

          {/* +4 BONUS Section */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-emerald-500/40 shadow-[0_8px_30px_rgba(16,185,129,0.08)] text-center">
            {/* Identificação */}
            <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-800 font-black text-xs uppercase tracking-wider mb-3.5 border border-emerald-300/60">
              <Gift className="w-4 h-4 text-emerald-700" />
              <span>{PLUS_FIVE_BONUSES.badge}</span>
            </div>

            {/* Título */}
            <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-[#231D18] mb-5 leading-snug">
              {PLUS_FIVE_BONUSES.title}
            </h3>

            {/* Mockup de Todos os Materiais */}
            <div className="rounded-2xl overflow-hidden border-2 border-[#E5DBCF] mb-6 max-w-lg mx-auto shadow-sm">
              <img
                src={BONUS_BUNDLE_IMAGE}
                onError={(e) => {
                  const target = e.currentTarget;
                  if (target.src !== BONUS_BUNDLE_IMAGE_FALLBACK) {
                    target.src = BONUS_BUNDLE_IMAGE_FALLBACK;
                  }
                }}
                alt="Mockup do pacote de bônus extras de velas artesanais"
                className="w-full h-auto object-cover max-h-[320px]"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
              <div className="bg-[#FAF7F2] py-2.5 px-4 text-xs text-[#6C6057] font-semibold border-t border-[#EAE0D2]">
                Pacote exclusivo de ferramentas e modelos prontos para impressão e uso
              </div>
            </div>

            {/* Lista dos Bônus Restantes */}
            <div className="space-y-3 text-left max-w-lg mx-auto mb-6">
              {PLUS_FIVE_BONUSES.items.map((item, idx) => (
                <div key={idx} className="bg-[#FAF7F2] p-4 rounded-2xl border border-[#EAE0D2] shadow-2xs hover:border-emerald-300 transition-colors">
                  <div className="flex items-center gap-2 font-black text-sm sm:text-base text-[#231D18]">
                    <span className="text-emerald-700 shrink-0">
                      {getSubBonusIcon(idx)}
                    </span>
                    <span>✅ {item.name}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#5C5249] mt-1 pl-6 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Finalização com destaque */}
            <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-emerald-50 via-emerald-100/70 to-emerald-50 border-2 border-emerald-300 inline-block w-full max-w-md shadow-xs">
              <p className="text-xs sm:text-sm font-bold text-emerald-950 uppercase tracking-wider">
                TODOS ESSES MATERIAIS:
              </p>
              <p className="text-xl sm:text-2xl font-black text-emerald-800 mt-0.5">
                HOJE: GRÁTIS NO PLANO COMPLETO
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

