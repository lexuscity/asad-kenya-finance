import { siteContent } from "../data/site-content.js";

/**
 * ============================================================
 * ASAD KENYA FINANCE
 * Public Website Content Service
 * ============================================================
 *
 * Provides controlled access to public website information.
 *
 * Keeping this behind a service layer means the route does not
 * need to know where the content comes from.
 *
 * Today the content is local static data.
 * The architecture can later support a database or CMS if
 * that is explicitly approved for a future version.
 * ============================================================
 */

export class SiteContentService {
  /**
   * Returns the complete public website information.
   */
  getSiteContent() {
    return siteContent;
  }

  /**
   * Returns public company identity information.
   */
  getIdentity() {
    return siteContent.identity;
  }

  /**
   * Returns public contact information.
   */
  getContact() {
    return siteContent.contact;
  }

  /**
   * Returns public About Us information.
   */
  getAbout() {
    return siteContent.about;
  }

  /**
   * Returns public loan product information.
   */
  getLoanProducts() {
    return siteContent.loanProducts;
  }

  /**
   * Returns one public loan product by its public identifier.
   */
  getLoanProductById(id: string) {
    return siteContent.loanProducts.find(
      (product) => product.id === id,
    );
  }
}

export const siteContentService = new SiteContentService();