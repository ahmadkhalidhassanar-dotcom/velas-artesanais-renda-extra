import React from 'react';
import { Video, BookOpen } from 'lucide-react';
import { COURSE_MOCKUP_IMAGE, COURSE_MOCKUP_IMAGE_FALLBACK } from '../data/content';

export const DeliverablesSection: React.FC = () => {
  return (
    <section id="conteudo" className="py-12 sm:py-16 px-4 bg-[#F5EFE6]/80 border-y border-[#EAE0D2]">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-[#231D18] leading-tight uppercase">
            O QUE VOCÊ VAI RECEBER
          </h2>
          <p className="text-sm sm:text-base text-[#6C6057] mt-2">
            Acesso 100% online, organizado para assistir e consultar quando quiser:
          </p>
        </div>

        {/* Two Clear Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-7">
          {/* Card 1 */}
          <div className="bg-white rounded-2xl p-5 sm:p-6 border border-[#E6DDD1] shadow-xs">
            <div className="w-11 h-11 rounded-xl bg-[#FAF0E6] text-[#C85A17] flex items-center justify-center shrink-0 border border-[#F2DECE] mb-3">
              <Video className="w-6 h-6" />
            </div>
            <h3 className="font-black text-base text-[#231D18] mb-1.5 uppercase">
              Videoaulas Práticas
            </h3>
            <p className="text-sm text-[#574D45] leading-relaxed">
              Passo a passo visual mostrando ponto da cera, pavio, essências e acabamento profissional.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-2xl p-5 sm:p-6 border border-[#E6DDD1] shadow-xs">
            <div className="w-11 h-11 rounded-xl bg-[#EFF6EE] text-emerald-800 flex items-center justify-center shrink-0 border border-[#D4EAD1] mb-3">
              <BookOpen className="w-6 h-6" />
            </div>
            <h3 className="font-black text-base text-[#231D18] mb-1.5 uppercase">
              +90 Receitas e Apostilas
            </h3>
            <p className="text-sm text-[#574D45] leading-relaxed">
              Guia completo de velas aromáticas, decorativas e terapêuticas prontas para produzir e vender.
            </p>
          </div>
        </div>

        {/* Content Mockup */}
        <div className="rounded-3xl overflow-hidden border-2 border-[#EFE5D6] bg-white shadow-[0_12px_32px_rgba(40,30,20,0.06)] group">
          <div className="relative">
            <img
              src={COURSE_MOCKUP_IMAGE}
              alt="Mockup do curso de velas com videoaulas e apostilas digitais"
              className="w-full h-auto object-cover max-h-[420px] transition-transform duration-500 group-hover:scale-[1.01]"
              referrerPolicy="no-referrer"
              loading="lazy"
              onError={(e) => {
                if (e.currentTarget.src !== COURSE_MOCKUP_IMAGE_FALLBACK) {
                  e.currentTarget.src = COURSE_MOCKUP_IMAGE_FALLBACK;
                }
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

