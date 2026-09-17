/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { HeaderNotice } from './components/HeaderNotice';
import { HeroSection } from './components/HeroSection';
import { PainIdentificationSection } from './components/PainIdentificationSection';
import { ObjectiveSection } from './components/ObjectiveSection';
import { DeliverablesSection } from './components/DeliverablesSection';
import { SocialProofSection } from './components/SocialProofSection';
import { BonusSection } from './components/BonusSection';
import { OfferSection } from './components/OfferSection';
import { GuaranteeSection } from './components/GuaranteeSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { CheckoutModal } from './components/CheckoutModal';
import { SpecialOfferModal } from './components/SpecialOfferModal';
import { SalesNotification } from './components/SalesNotification';
import { PlanItem } from './types';
import { PLANS, CHECKOUT_URL_COMPLETE_DISCOUNT_19, CHECKOUT_URL_BASIC_10 } from './data/content';

export default function App() {
  const [selectedPlan, setSelectedPlan] = useState<PlanItem | null>(null);
  const [showSpecialOffer, setShowSpecialOffer] = useState(false);

  const scrollToCompletePlan = () => {
    const card = document.getElementById('card-plano-completo') || document.getElementById('oferta');
    if (card) {
      card.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  const scrollToBeforeYouContinue = () => {
    const section = document.getElementById('antes-de-continuar') || document.getElementById('bonus');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleSelectPlan = (plan: PlanItem) => {
    if (plan.id === 'basic') {
      setShowSpecialOffer(true);
    } else if (plan.checkoutUrl) {
      window.location.href = plan.checkoutUrl;
    } else {
      setSelectedPlan(plan);
    }
  };

  const handleAcceptDiscount = () => {
    setShowSpecialOffer(false);
    window.location.href = CHECKOUT_URL_COMPLETE_DISCOUNT_19;
  };

  const handleDeclineAndBuyBasic = () => {
    setShowSpecialOffer(false);
    window.location.href = CHECKOUT_URL_BASIC_10;
  };

  const handleCloseCheckout = () => {
    setSelectedPlan(null);
  };

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#2C2724] flex flex-col font-sans selection:bg-[#E27D60] selection:text-white">
      {/* 0. Notice Bar */}
      <HeaderNotice />

      <main className="flex-1 w-full max-w-full overflow-x-hidden">
        {/* 1. PROMESSA */}
        <HeroSection onCtaClick={scrollToBeforeYouContinue} />

        {/* 2. IDENTIFICAÇÃO / DOR */}
        <PainIdentificationSection />

        {/* 3. OBJETIVO */}
        <ObjectiveSection />

        {/* 4. O QUE VOCÊ VAI RECEBER */}
        <DeliverablesSection />

        {/* 5. PROVA SOCIAL */}
        <SocialProofSection />

        {/* 6. BÔNUS (com Divisor Visual) */}
        <BonusSection />

        {/* 7. OFERTA */}
        <OfferSection onSelectPlan={handleSelectPlan} />

        {/* 8. FAQ */}
        <FaqSection />

        {/* 9. GARANTIA DE 7 DIAS / CTA QUERO COMEÇAR SEM RISCO */}
        <GuaranteeSection onCtaClick={scrollToCompletePlan} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Recent Sales Notification (Top Right) */}
      <SalesNotification />

      {/* Special Offer Pop-up for Basic Plan Leads */}
      <SpecialOfferModal
        isOpen={showSpecialOffer}
        onAcceptDiscount={handleAcceptDiscount}
        onDeclineAndBuyBasic={handleDeclineAndBuyBasic}
        onClose={() => setShowSpecialOffer(false)}
      />

      {/* Interactive Checkout Modal */}
      {selectedPlan && (
        <CheckoutModal plan={selectedPlan} onClose={handleCloseCheckout} />
      )}
    </div>
  );
}
