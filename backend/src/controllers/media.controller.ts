import type { Request, Response } from "express";

import { mediaService } from "../services/media.service.js";
import { sendError, sendSuccess } from "../utils/api-response.js";

/**
 * ============================================================
 * ASAD KENYA FINANCE
 * Public Media Controller
 * ============================================================
 */

export class MediaController {
  /**
   * GET /api/media/homepage
   */
  getHomepageMedia = (
    _request: Request,
    response: Response,
  ): void => {
    sendSuccess(
      response,
      mediaService.getHomepageMedia(),
    );
  };

  /**
   * GET /api/media/:id
   */
  getById = (
    request: Request,
    response: Response,
  ): void => {
    const { id } = request.params;

    if (typeof id !== "string") {
      sendError(
        response,
        "Invalid media identifier.",
        400,
      );

      return;
    }

    const media = mediaService.getById(id);

    if (!media) {
      sendError(
        response,
        "Media item was not found.",
        404,
      );

      return;
    }

    sendSuccess(response, media);
  };
}

export const mediaController =
  new MediaController();