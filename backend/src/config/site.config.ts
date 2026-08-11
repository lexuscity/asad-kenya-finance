import { env } from "./env.js";

/**
 * ============================================================
 * ASAD KENYA FINANCE
 * Public Website Configuration
 * ============================================================
 */

export const siteConfig = {
  name: env.COMPANY_NAME,
  url: env.APP_URL,

  contact: {
    email: env.COMPANY_EMAIL,
    phone: env.COMPANY_PHONE,
  },

  branding: {
    name: "ASAD KENYA",
    motto: "TOGETHER WE GROW",
  },

  social: {
    facebook: "",
    instagram: "",
    whatsapp: "",
    x: "",
  },
} as const;