/**
 * ============================================================
 * ASAD KENYA FINANCE
 * Public Website Content Types
 * ============================================================
 *
 * These types describe information that can safely be exposed
 * through the public website.
 *
 * This file intentionally contains NO:
 * - member information
 * - loan balances
 * - repayment records
 * - savings records
 * - transaction references
 * - authentication data
 * - administrative data
 * ============================================================
 */

export interface SiteContact {
  email: string;
  phone: string;
  whatsapp?: string;
}

export interface SiteIdentity {
  name: string;
  legalName?: string;
  tagline: string;
  description: string;
}

export interface AboutContent {
  title: string;
  introduction: string;
  history: string;
  mission: string;
  vision: string;
  coreValues: string[];
}

export interface LoanProductInformation {
  id: string;
  name: string;
  description: string;
  eligibility: string[];
  features: string[];
  callToAction: string;
}

export interface SiteInformation {
  identity: SiteIdentity;
  contact: SiteContact;
  about: AboutContent;
  loanProducts: LoanProductInformation[];
}