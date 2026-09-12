import React, { useState } from 'react';
import { X } from 'lucide-react';
import { STUDENT_PROOFS } from '../data/content';
import { StudentProof } from '../types';

export const SocialProofSection: React.FC = () => {
  const [activePhoto, setActivePhoto] = useState<StudentProof | null>(null);

  return (
    <section id="depoimentos" className="py-12 sm:py-16 px-4 bg-[#FAF7F2]">
      <div className="max-w-2xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#231D18] leading-tight uppercase mb-2">
            RESULTADOS DE QUEM JÁ COMEÇOU
          </h2>
          <p className="text-sm sm:text-base text-[#6C6057] max-w-lg mx-auto">
            Veja alunas que começaram do zero e já estão produzindo e recebendo encomendas:
          </p>
        </div>

        {/* Attached Photos Gallery */}
        <div className="space-y-6 sm:space-y-8">
          {STUDENT_PROOFS.map((proof, idx) => (
            <div
              key={proof.id}
              className="overflow-hidden rounded-2xl sm:rounded-3xl cursor-pointer bg-white shadow-xs hover:shadow-md transition-shadow duration-300"
              onClick={() => setActivePhoto(proof)}
              role="button"
              tabIndex={0}
              aria-label={`Ver foto ${idx + 1}`}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setActivePhoto(proof);
                }
              }}
            >
              <img
                src={proof.url}
                alt={proof.alt}
                referrerPolicy="no-referrer"
                loading="lazy"
                onError={(e) => {
                  if (e.currentTarget.src !== proof.fallbackUrl) {
                    e.currentTarget.src = proof.fallbackUrl;
                  }
                }}
                className="w-full h-auto object-contain block"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal to view photos in high resolution */}
      {activePhoto && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-in fade-in"
          onClick={() => setActivePhoto(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative max-w-2xl max-h-[92vh] w-full flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              type="button"
              onClick={() => setActivePhoto(null)}
              className="absolute -top-12 right-0 sm:right-0 bg-white/20 hover:bg-white/40 text-white rounded-full p-2 transition-colors cursor-pointer"
              aria-label="Fechar visualização"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Expanded Image */}
            <div className="bg-transparent rounded-2xl overflow-hidden max-h-[85vh] flex items-center justify-center">
              <img
                src={activePhoto.url}
                alt={activePhoto.alt}
                referrerPolicy="no-referrer"
                onError={(e) => {
                  if (e.currentTarget.src !== activePhoto.fallbackUrl) {
                    e.currentTarget.src = activePhoto.fallbackUrl;
                  }
                }}
                className="max-h-[85vh] w-auto object-contain rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};


