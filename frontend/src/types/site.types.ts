/**
 * ============================================================
 * ASAD KENYA FINANCE
 * Frontend Public Website Types
 * ============================================================
 */

export interface SiteIdentity {
  name: string;
  legalName: string;
  tagline: string;
  description: string;
}

export interface SiteContact {
  email: string;
  phone: string;
  whatsapp?: string;
  address?: string;
}

export interface SiteAbout {
  title: string;
  introduction: string;
  history: string;
  mission: string;
  vision: string;
  coreValues: string[];
}

export interface LoanProduct {
  id: string;
  name: string;
  description: string;
  eligibility: string[];
  features: string[];
  callToAction: string;
}

export interface SiteContent {
  identity: SiteIdentity;
  contact: SiteContact;
  about: SiteAbout;
  loanProducts: LoanProduct[];
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface SiteMedia {
  id: string;
  title: string;
  description?: string;
  imageUrl: string;
  altText: string;
  order: number;
  active: boolean;
}