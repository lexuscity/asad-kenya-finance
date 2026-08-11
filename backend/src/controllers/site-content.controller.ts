import type { Request, Response } from "express";

import { siteContentService } from "../services/site-content.service.js";
import { sendError, sendSuccess } from "../utils/api-response.js";

/**
 * ============================================================
 * ASAD KENYA FINANCE
 * Public Website Content Controller
 * ============================================================
 */

export class SiteContentController {
  /**
   * GET /api/site
   */
  getSiteContent = (
    _request: Request,
    response: Response,
  ): void => {
    sendSuccess(
      response,
      siteContentService.getSiteContent(),
    );
  };

  /**
   * GET /api/site/identity
   */
  getIdentity = (
    _request: Request,
    response: Response,
  ): void => {
    sendSuccess(
      response,
      siteContentService.getIdentity(),
    );
  };

  /**
   * GET /api/site/contact
   */
  getContact = (
    _request: Request,
    response: Response,
  ): void => {
    sendSuccess(
      response,
      siteContentService.getContact(),
    );
  };

  /**
   * GET /api/site/about
   */
  getAbout = (
    _request: Request,
    response: Response,
  ): void => {
    sendSuccess(
      response,
      siteContentService.getAbout(),
    );
  };

  /**
   * GET /api/site/loan-products
   */
  getLoanProducts = (
    _request: Request,
    response: Response,
  ): void => {
    sendSuccess(
      response,
      siteContentService.getLoanProducts(),
    );
  };

  /**
   * GET /api/site/loan-products/:id
   */
  getLoanProduct = (
    request: Request,
    response: Response,
  ): void => {
    const { id } = request.params;

    if (typeof id !== "string") {
      sendError(
        response,
        "Invalid loan product identifier.",
        400,
      );

      return;
    }

    const product =
      siteContentService.getLoanProductById(id);

    if (!product) {
      sendError(
        response,
        "Loan product information was not found.",
        404,
      );

      return;
    }

    sendSuccess(response, product);
  };
}

export const siteContentController =
  new SiteContentController();