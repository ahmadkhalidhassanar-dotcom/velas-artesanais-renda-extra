import React from 'react';
import { CheckCircle2, Home, Sparkles, Coins } from 'lucide-react';

export const PainIdentificationSection: React.FC = () => {
  const highlights = [
    {
      title: 'Pode começar em casa',
      icon: Home,
      bg: 'bg-[#FAF0E6] text-[#B25E3B] border-[#F2DECE]',
    },
    {
      title: 'Não precisa ter experiência',
      icon: Sparkles,
      bg: 'bg-[#EFF6EE] text-emerald-800 border-[#D4EAD1]',
    },
    {
      title: 'Comece com pouco investimento',
      icon: Coins,
      bg: 'bg-[#F9F3EA] text-amber-800 border-[#EDE1CF]',
    },
  ];

  return (
    <section id="dor" className="py-12 sm:py-16 px-4 bg-[#F5EFE6]/70 border-y border-[#EAE0D2]">
      <div className="max-w-2xl mx-auto text-center">
        {/* Dopaminergic Mini-Badge */}
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-black uppercase tracking-wider mb-3.5 border border-emerald-300 shadow-xs max-w-full">
          <Sparkles className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
          <span>Comece a vender velas aromáticas e terapêuticas sem sair de casa</span>
        </div>

        {/* Striking Section Title */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#231D18] leading-[1.2] uppercase mb-8 tracking-tight">
          BENEFÍCIOS EXCLUSIVOS
        </h2>

        {/* 3 Checks Blocks */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 sm:gap-4 text-left">
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="flex items-center gap-3 bg-white p-4 rounded-2xl border border-[#E6DDD1] shadow-xs hover:border-[#C85A17]/30 transition-colors"
              >
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border ${item.bg}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-extrabold text-[#231D18] text-sm sm:text-base flex items-center gap-1.5 leading-snug">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 inline" />
                    <span>{item.title}</span>
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

