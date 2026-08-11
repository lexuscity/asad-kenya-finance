import type { Request, Response } from "express";

import { contactSchema } from "../validations/contact.validation.js";
import { contactService } from "../services/contact.service.js";

/**
 * ============================================================
 * ASAD KENYA FINANCE
 * Contact Controller
 * ============================================================
 *
 * Handles public Contact Us enquiries.
 *
 * This controller only handles website enquiries.
 * It does not create member, loan, savings, or transaction
 * records.
 * ============================================================
 */

export class ContactController {
  /**
   * POST /api/contact
   *
   * Validates and processes a public website enquiry.
   */
  submitContact = async (
    request: Request,
    response: Response,
  ): Promise<void> => {
    const result = contactSchema.safeParse(
      request.body,
    );

    if (!result.success) {
      response.status(400).json({
        success: false,
        message: "Validation failed.",
        errors: result.error.issues.map(
          (issue) => ({
            field:
              issue.path.join(".") ||
              "request",
            message: issue.message,
          }),
        ),
      });

      return;
    }

    try {
      /**
       * Wait for the enquiry to be processed.
       *
       * The visitor only receives a success response
       * after the email service successfully accepts
       * the enquiry.
       */
      await contactService.submitContact(
        result.data,
      );

      response.status(202).json({
        success: true,
        message:
          "Your enquiry has been received. Thank you for contacting ASAD Kenya Finance.",
      });
    } catch (error) {
      /**
       * Do not expose SMTP credentials or internal
       * email-service errors to the public.
       */
      console.error(
        "Failed to process website contact enquiry:",
        error,
      );

      response.status(500).json({
        success: false,
        message:
          "We could not send your enquiry at this time. Please try again later.",
      });
    }
  };
}

export const contactController =
  new ContactController();