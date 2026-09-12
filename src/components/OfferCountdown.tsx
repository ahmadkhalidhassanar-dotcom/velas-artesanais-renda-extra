import React, { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';

const TIMER_KEY = 'candlemaking_offer_timer_end_v1';
const INITIAL_DURATION_SECONDS = 15 * 60; // 15 minutes

export const OfferCountdown: React.FC = () => {
  const [secondsLeft, setSecondsLeft] = useState<number>(INITIAL_DURATION_SECONDS);

  useEffect(() => {
    // Check or initialize timer end timestamp
    let targetTime: number;
    const storedTarget = localStorage.getItem(TIMER_KEY);

    if (storedTarget) {
      const parsed = parseInt(storedTarget, 10);
      // If valid and still in future, or within reasonable reset
      if (!isNaN(parsed) && parsed > Date.now()) {
        targetTime = parsed;
      } else {
        // Reset 15 minutes if already expired so the buyer always sees active urgency
        targetTime = Date.now() + INITIAL_DURATION_SECONDS * 1000;
        localStorage.setItem(TIMER_KEY, targetTime.toString());
      }
    } else {
      targetTime = Date.now() + INITIAL_DURATION_SECONDS * 1000;
      localStorage.setItem(TIMER_KEY, targetTime.toString());
    }

    const updateTimer = () => {
      const remaining = Math.max(0, Math.floor((targetTime - Date.now()) / 1000));
      setSecondsLeft(remaining);
      if (remaining <= 0) {
        // Automatically restart 15 minutes window so it never stays stuck at 00
        const newTarget = Date.now() + INITIAL_DURATION_SECONDS * 1000;
        localStorage.setItem(TIMER_KEY, newTarget.toString());
      }
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);

    return () => clearInterval(interval);
  }, []);

  const hours = Math.floor(secondsLeft / 3600).toString().padStart(2, '0');
  const minutes = Math.floor((secondsLeft % 3600) / 60).toString().padStart(2, '0');
  const seconds = (secondsLeft % 60).toString().padStart(2, '0');

  return (
    <div className="flex flex-col items-center justify-center mb-6 select-none">
      {/* Title with Clock Icon */}
      <div className="flex items-center justify-center gap-2 mb-3.5 text-[#2C3442]">
        <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-[#2C3442] stroke-[2.2]" />
        <span className="font-extrabold text-base sm:text-lg tracking-tight">
          Oferta especial expira em:
        </span>
      </div>

      {/* 3 Red Rounded Blocks */}
      <div className="flex items-center justify-center gap-2.5 sm:gap-4">
        {/* Hours */}
        <div className="flex flex-col items-center">
          <div className="w-18 h-18 sm:w-22 sm:h-22 bg-[#DE3636] rounded-2xl sm:rounded-[20px] flex items-center justify-center shadow-md shadow-red-500/20">
            <span className="text-white text-3xl sm:text-4xl font-black tracking-tight">
              {hours}
            </span>
          </div>
          <span className="text-[11px] sm:text-xs font-black text-[#5A6474] uppercase tracking-wider mt-2">
            HORAS
          </span>
        </div>

        {/* Minutes */}
        <div className="flex flex-col items-center">
          <div className="w-18 h-18 sm:w-22 sm:h-22 bg-[#DE3636] rounded-2xl sm:rounded-[20px] flex items-center justify-center shadow-md shadow-red-500/20">
            <span className="text-white text-3xl sm:text-4xl font-black tracking-tight">
              {minutes}
            </span>
          </div>
          <span className="text-[11px] sm:text-xs font-black text-[#5A6474] uppercase tracking-wider mt-2">
            MIN
          </span>
        </div>

        {/* Seconds */}
        <div className="flex flex-col items-center">
          <div className="w-18 h-18 sm:w-22 sm:h-22 bg-[#DE3636] rounded-2xl sm:rounded-[20px] flex items-center justify-center shadow-md shadow-red-500/20">
            <span className="text-white text-3xl sm:text-4xl font-black tracking-tight">
              {seconds}
            </span>
          </div>
          <span className="text-[11px] sm:text-xs font-black text-[#5A6474] uppercase tracking-wider mt-2">
            SEG
          </span>
        </div>
      </div>
    </div>
  );
};
