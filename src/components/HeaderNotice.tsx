import React from 'react';
import { Tag, Sparkles } from 'lucide-react';

export const HeaderNotice: React.FC = () => {
  return (
    <header className="w-full bg-gradient-to-r from-[#2A201A] via-[#3D2C22] to-[#2A201A] text-[#F9F4EE] text-xs sm:text-sm py-2.5 px-4 shadow-sm border-b border-[#C85A17]/20">
      <div className="max-w-4xl mx-auto flex items-center justify-center gap-2 text-center font-bold tracking-wide">
        <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-[#C85A17]/30 text-[#E5B899] shrink-0">
          <Tag className="w-3 h-3 text-[#F5C29B]" />
        </span>
        <span className="text-[#F9F4EE] uppercase tracking-wider text-[11px] sm:text-xs">
          Oferta por tempo limitado
        </span>
        <Sparkles className="w-3.5 h-3.5 text-[#E5B899] animate-pulse-subtle hidden sm:inline" />
      </div>
    </header>
  );
};


