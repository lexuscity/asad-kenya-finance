import type { SiteInformation } from "../types/content.types.js";

/**
 * ============================================================
 * ASAD KENYA FINANCE
 * Public Website Content
 * ============================================================
 *
 * This is public-facing institutional information only.
 *
 * Do not place private, member, financial-account, transaction,
 * authentication, or administrative information in this file.
 * ============================================================
 */

export const siteContent: SiteInformation = {
  identity: {
    name: "ASAD KENYA",
    legalName: "ASAD Kenya Finance",
    tagline: "TOGETHER WE GROW",
    description:
      "ASAD Kenya Finance is a Kenyan financial organization focused on providing accessible financial solutions and supporting communities to grow together.",
  },

  contact: {
    email: "asadkenyafinance@gmail.com",
    phone: "+254 740720460",
    whatsapp: "+254 740720460",
  },

  about: {
    title: "About ASAD Kenya",
    introduction:
      "ASAD Kenya Finance was established to support individuals and communities through accessible financial solutions and a group-based approach.",

    history:
      "ASAD Kenya was established in 2019 and has focused on serving communities Kenya such as those in the Nyanza and Western regions of Kenya with the CEO being Milia Akhungu Nanzushi.",

    mission:
      "To provide accessible financial solutions that empower individuals and communities to improve their economic wellbeing.",

    vision:
      "To build stronger communities where people can grow together through accessible and responsible financial solutions.",

    coreValues: [
      "Integrity",
      "Transparency",
      "Accountability",
      "Community",
      "Growth",
      "Customer Focus",
    ],
  },

  loanProducts: [
    {
      id: "general-finance",
      name: "General Finance",
      description:
        "A flexible financial solution designed to support eligible customers with their financial needs.",

      eligibility: [
        "Meet the applicable ASAD Kenya eligibility requirements.",
        "Provide the required registration information.",
        "Comply with the applicable terms and conditions.",
      ],

      features: [
        "Accessible financial support.",
        "Clear terms and conditions.",
        "Community-focused approach.",
      ],

      callToAction: "Contact Us to Learn More",
    },

    {
      id: "short-term-finance",
      name: "Short-Term Finance",
      description:
        "A short-term financial solution designed for eligible customers with temporary financial needs.",

      eligibility: [
        "Meet the applicable ASAD Kenya eligibility requirements.",
        "Provide the required registration information.",
        "Comply with the applicable terms and conditions.",
      ],

      features: [
        "Short-term financial support.",
        "Clear repayment terms.",
        "Community-focused approach.",
      ],

      callToAction: "Contact Us to Learn More",
    },
  ],
};