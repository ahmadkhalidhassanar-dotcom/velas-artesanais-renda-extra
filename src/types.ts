export interface TestimonialItem {
  id: string;
  initials: string;
  name: string;
  tagline: string;
  comment: string;
  stars: number;
}

export interface StudentProof {
  id: string;
  url: string;
  fallbackUrl: string;
  alt: string;
}

export interface BonusItem {
  id: string;
  badge: string;
  title: string;
  originalPrice: string;
  description: string;
  image?: string;
  fallbackImage?: string;
  items?: { name: string; desc: string }[];
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface PlanItem {
  id: string;
  name: string;
  originalPrice?: string;
  price: string;
  period?: string;
  description: string;
  isPopular?: boolean;
  badge?: string;
  features: string[];
  ctaText: string;
  checkoutUrl?: string;
}
