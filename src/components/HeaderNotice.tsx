import React, { useMemo } from 'react';

export const HeaderNotice: React.FC = () => {
  // Generates the current date dynamically (e.g. 17/09/2026)
  const formattedDate = useMemo(() => {
    const now = new Date();
    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const year = now.getFullYear();
    return `${day}/${month}/${year}`;
  }, []);

  return (
    <header className="w-full bg-gradient-to-r from-[#2A201A] via-[#3D2C22] to-[#2A201A] text-[#F9F4EE] text-xs sm:text-sm py-2 px-3 sm:px-4 shadow-sm border-b border-[#C85A17]/20">
      <div className="max-w-4xl mx-auto flex items-center justify-center text-center font-bold tracking-wide">
        <span className="text-[#F9F4EE] text-[11.5px] sm:text-xs tracking-normal">
          Oferta válida somente hoje{' '}
          <span className="inline-block bg-[#C85A17]/30 text-[#FAD5BA] font-extrabold px-1.5 py-0.5 rounded border border-[#C85A17]/40 ml-0.5 tracking-tight">
            {formattedDate}
          </span>
        </span>
      </div>
    </header>
  );
};
