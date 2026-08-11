import type {
  ErrorRequestHandler,
  Request,
  Response,
  NextFunction,
} from "express";

import { env } from "../config/env.js";
import { ApiError } from "../utils/api-error.js";
import { logger } from "../utils/logger.js";

/**
 * ============================================================
 * ASAD KENYA FINANCE
 * Central Error Handler
 * ============================================================
 */

export const errorHandler: ErrorRequestHandler = (
  error: unknown,
  request: Request,
  response: Response,
  _next: NextFunction,
): void => {
  const requestId = request.requestId;

  /**
   * Expected application error.
   *
   * These errors contain a safe message intended for the
   * client.
   */
  if (error instanceof ApiError) {
    logger.warn("Operational application error.", {
      message: error.message,
      statusCode: error.statusCode,
      requestId,
    });

    if (!response.headersSent) {
      response.status(error.statusCode).json({
        success: false,
        message: error.message,
        requestId,
      });
    }

    return;
  }

  /**
   * Unexpected error.
   *
   * Never expose internal error details to the public website.
   */
  if (error instanceof Error) {
    logger.error("Unhandled application error.", {
      message: error.message,
      requestId,
      stack:
        env.NODE_ENV === "production"
          ? undefined
          : error.stack,
    });
  } else {
    logger.error("Unhandled unknown application error.", {
      requestId,
      error: String(error),
    });
  }

  if (response.headersSent) {
    return;
  }

  response.status(500).json({
    success: false,
    message:
      "An unexpected error occurred. Please try again later.",
    requestId,
  });
};