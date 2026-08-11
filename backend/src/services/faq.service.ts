import { faqContent } from "../data/faq-content.js";

/**
 * ============================================================
 * ASAD KENYA FINANCE
 * FAQ Service
 * ============================================================
 */

export class FaqService {
  /**
   * Returns all public FAQ items.
   */
  getAll() {
    return faqContent;
  }

  /**
   * Returns one FAQ item by public identifier.
   */
  getById(id: string) {
    return faqContent.find(
      (faq) => faq.id === id,
    );
  }
}

export const faqService = new FaqService();