import React, { useState, useEffect } from 'react';
import { CheckCircle2, X } from 'lucide-react';

interface SaleItem {
  name: string;
  plan: string;
  timeAgo: string;
}

const RECENT_SALES: SaleItem[] = [
  { name: 'Maria Silva', plan: 'Comprou o Plano Completo', timeAgo: 'há 2 minutos' },
  { name: 'Juliana Ferreira', plan: 'Comprou o Plano Completo', timeAgo: 'há 4 minutos' },
  { name: 'Camila Santos', plan: 'Comprou o Plano Completo', timeAgo: 'há 1 minuto' },
  { name: 'Ana Paula Souza', plan: 'Comprou o Plano Completo', timeAgo: 'há 3 minutos' },
  { name: 'Beatriz Lima', plan: 'Comprou o Plano Completo', timeAgo: 'há 5 minutos' },
  { name: 'Fernanda Rocha', plan: 'Comprou o Plano Completo', timeAgo: 'há 2 minutos' },
];

export const SalesNotification: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    if (isDismissed) return;

    // Show first notification after 2 seconds
    const initialTimer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    return () => clearTimeout(initialTimer);
  }, [isDismissed]);

  useEffect(() => {
    if (isDismissed) return;

    // When a notification becomes visible, keep it for 6 seconds then hide
    let hideTimer: NodeJS.Timeout;
    let nextCycleTimer: NodeJS.Timeout;

    if (isVisible) {
      hideTimer = setTimeout(() => {
        setIsVisible(false);
      }, 6000);
    } else {
      // Re-appear every 20 seconds from disappearance (or cycle every 20 seconds)
      nextCycleTimer = setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % RECENT_SALES.length);
        setIsVisible(true);
      }, 20000);
    }

    return () => {
      clearTimeout(hideTimer);
      clearTimeout(nextCycleTimer);
    };
  }, [isVisible, isDismissed]);

  if (isDismissed) return null;

  const currentSale = RECENT_SALES[currentIndex];

  return (
    <aside
      aria-live="polite"
      aria-label="Notificação de compra recente"
      className={`fixed top-3 right-1.5 sm:top-4 sm:right-2.5 z-40 w-[265px] sm:w-[275px] max-w-[calc(100vw-12px)] transition-all duration-500 transform ${
        isVisible
          ? 'opacity-100 translate-y-0 scale-100'
          : 'opacity-0 -translate-y-3 scale-95 pointer-events-none'
      }`}
    >
      <div
        className="relative select-none bg-[#FAF8F5] rounded-[18px] p-3 sm:p-3.5 border border-[#E6E0D6] shadow-[0_8px_24px_-4px_rgba(40,32,25,0.12)] text-left"
      >
        {/* Dismiss Button */}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            setIsDismissed(true);
          }}
          className="absolute top-2.5 right-2.5 p-1 text-[#8C8277] hover:text-[#231D18] hover:bg-[#EDE6DC] rounded-full transition-colors cursor-pointer"
          title="Fechar notificação"
          aria-label="Fechar notificação"
        >
          <X className="w-3.5 h-3.5" />
        </button>

        {/* Top Content Row: Green Circular Check Icon + Text Info */}
        <div className="flex items-start gap-2.5 pr-4">
          {/* Mint/Sage Circular Icon Container */}
          <div className="w-9 h-9 rounded-full bg-[#DAE5DB] flex items-center justify-center flex-shrink-0 mt-0.5">
            <CheckCircle2 className="w-5 h-5 text-[#2E684B]" strokeWidth={2.2} />
          </div>

          {/* Details */}
          <div className="flex-1 min-w-0">
            <h4 className="text-[13px] font-bold text-[#231D18] leading-tight truncate">
              {currentSale.name}
            </h4>
            <p className="text-[11.5px] text-[#5C5248] mt-0.5 leading-snug">
              {currentSale.plan}
            </p>
            <p className="text-[10.5px] text-[#968C81] mt-0.5 font-normal">
              {currentSale.timeAgo}
            </p>
          </div>
        </div>

        {/* Divider Line */}
        <div className="mt-2.5 pt-2 border-t border-[#E8E2D8] flex items-center justify-center gap-1.5 text-[11px] font-medium text-[#65594F]">
          <span className="text-[12px] leading-none">🔥</span>
          <span>+342 pessoas já compraram hoje</span>
        </div>
      </div>
    </aside>
  );
};
