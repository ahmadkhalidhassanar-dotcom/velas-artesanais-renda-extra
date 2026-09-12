import React, { useState } from 'react';
import { FAQS } from '../data/content';
import { ChevronDown } from 'lucide-react';

export const FaqSection: React.FC = () => {
  // First item open by default for immediate engagement
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-12 sm:py-16 px-4 bg-[#FAF7F2]">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-7">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-[#231D18] leading-tight uppercase">
            DÚVIDAS FREQUENTES
          </h2>
          <p className="text-xs sm:text-sm text-[#6C6057] mt-1.5">
            Toque nas perguntas para ver as respostas:
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`bg-white rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'border-[#C85A17]/40 shadow-sm'
                    : 'border-[#E8DFD3] hover:border-[#D5C7B7]'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(idx)}
                  className="w-full p-4.5 sm:p-5 text-left font-extrabold text-sm sm:text-base text-[#231D18] flex items-center justify-between gap-3 hover:bg-[#FAF7F2] transition-colors cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="leading-snug">{faq.question}</span>
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen
                        ? 'rotate-180 bg-[#FAF0E6] text-[#C85A17]'
                        : 'bg-[#F5EDE1] text-[#7A4532]'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-4.5 pb-5 sm:px-5 sm:pb-6 pt-1 text-sm sm:text-base text-[#554A42] leading-relaxed border-t border-[#F2EAE0] whitespace-pre-line bg-[#FFFDF9]">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

