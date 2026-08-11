import type { Request, Response } from "express";

import { faqService } from "../services/faq.service.js";
import { sendError, sendSuccess } from "../utils/api-response.js";

/**
 * ============================================================
 * ASAD KENYA FINANCE
 * Public FAQ Controller
 * ============================================================
 */

export class FaqController {
  /**
   * GET /api/faq
   */
  getAll = (
    _request: Request,
    response: Response,
  ): void => {
    sendSuccess(response, faqService.getAll());
  };

  /**
   * GET /api/faq/:id
   */
  getById = (
    request: Request,
    response: Response,
  ): void => {
    const { id } = request.params;

    if (typeof id !== "string") {
      sendError(
        response,
        "Invalid FAQ identifier.",
        400,
      );

      return;
    }

    const faq = faqService.getById(id);

    if (!faq) {
      sendError(
        response,
        "FAQ information was not found.",
        404,
      );

      return;
    }

    sendSuccess(response, faq);
  };
}

export const faqController = new FaqController();