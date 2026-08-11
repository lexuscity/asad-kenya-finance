export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

/**
 * ============================================================
 * ASAD KENYA FINANCE
 * Public FAQ Content
 * ============================================================
 *
 * Public informational content only.
 *
 * Do not place private account information, transaction
 * information, loan balances, or internal procedures here.
 * ============================================================
 */

export const faqContent: FaqItem[] = [
  {
    id: "what-is-asad-kenya",
    question: "What is ASAD Kenya Finance?",
    answer:
      "ASAD Kenya Finance is a Kenyan financial organization focused on accessible financial solutions and community growth.",
  },
  {
    id: "when-established",
    question: "When was ASAD Kenya established?",
    answer:
      "ASAD Kenya was established in 2019.",
  },
  {
    id: "where-operates",
    question: "Which regions does ASAD Kenya serve?",
    answer:
      "ASAD Kenya has focused on serving communities in the Nyanza and Western regions of Kenya.",
  },
  {
    id: "loan-information",
    question: "Where can I learn about the available loan products?",
    answer:
      "You can visit the Loan Products section of this website or contact ASAD Kenya Finance for more information.",
  },
  {
    id: "contact",
    question: "How can I contact ASAD Kenya Finance?",
    answer:
      "You can use the contact information provided on the Contact Us section of this website.",
  },
];