/**
 * ============================================================
 * ASAD KENYA FINANCE
 * Frontend Site Configuration
 * ============================================================
 */

export const siteConfig = {
  name: "ASAD KENYA",
  legalName: "ASAD Kenya Finance",
  motto: "TOGETHER WE GROW",

  navigation: [
    {
      label: "Home",
      path: "/",
    },
    {
      label: "About Us",
      path: "/about",
    },
    {
      label: "Loan Products",
      path: "/loan-products",
    },
    {
      label: "Contact Us",
      path: "/contact",
    },
  ],

  contact: {
    email: "asadkenyafinace@gmail.com",
    phone: "+254 740720460",
  },
} as const;