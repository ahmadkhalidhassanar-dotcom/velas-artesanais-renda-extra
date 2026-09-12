import React from 'react';
import { PRODUCTION_IMAGE, PRODUCTION_IMAGE_FALLBACK } from '../data/content';
import { Sparkles } from 'lucide-react';

export const ObjectiveSection: React.FC = () => {
  return (
    <section id="objetivo" className="py-12 sm:py-16 px-4 bg-[#FAF7F2]">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-6">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-[#231D18] leading-tight uppercase">
            TENHA ALGO SEU PARA FAZER, VENDER E LUCRAR
          </h2>
          <p className="text-sm sm:text-base text-[#554A42] max-w-lg mx-auto mt-2 leading-relaxed">
            Faça velas aromáticas e decorativas em casa, comece com poucas unidades e venda para pessoas próximas ou clientes.
          </p>
        </div>

        {/* Image: Small production / candles ready for sale */}
        <div className="rounded-3xl overflow-hidden border-2 border-[#EFE5D6] shadow-[0_12px_32px_rgba(40,30,20,0.06)] bg-white group">
          <div className="relative">
            <img
              src={PRODUCTION_IMAGE}
              alt="Pequena produção de velas artesanais feitas em casa prontas para venda"
              className="w-full h-auto object-cover max-h-[420px] transition-transform duration-500 group-hover:scale-[1.01]"
              referrerPolicy="no-referrer"
              loading="lazy"
              onError={(e) => {
                if (e.currentTarget.src !== PRODUCTION_IMAGE_FALLBACK) {
                  e.currentTarget.src = PRODUCTION_IMAGE_FALLBACK;
                }
              }}
            />
            <div className="absolute top-3.5 right-3.5 bg-white/95 backdrop-blur-md text-[#231D18] text-xs font-bold px-3 py-1.5 rounded-xl shadow-sm border border-stone-200 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#C85A17]" />
              Produção artesanal em casa
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

