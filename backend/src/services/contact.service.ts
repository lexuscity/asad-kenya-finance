import type { ContactInput } from "../validations/contact.validation.js";
import { logger } from "../utils/logger.js";
import { emailService } from "./email.service.js";

/**
 * ============================================================
 * ASAD KENYA FINANCE
 * Contact Service
 * ============================================================
 *
 * Handles validated public website enquiries.
 *
 * Public enquiries are sent to the configured ASAD Kenya
 * business email.
 *
 * This service does not create member, loan, savings,
 * payment, or transaction records.
 * ============================================================
 */

export class ContactService {
  /**
   * Processes a validated website enquiry.
   */
  async submitContact(
    input: ContactInput,
  ): Promise<void> {
    await emailService.sendContactEnquiry(input);

    /**
     * Never log the complete message or personal information.
     */
    logger.info(
      "Public website contact enquiry processed successfully.",
      {
        subject: input.subject,
      },
    );
  }
}

export const contactService =
  new ContactService();