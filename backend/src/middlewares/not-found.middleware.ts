import type { RequestHandler } from "express";

/**
 * ============================================================
 * ASAD KENYA FINANCE
 * 404 Not Found Middleware
 * ============================================================
 *
 * Handles requests that do not match any registered route.
 * ============================================================
 */

export const notFoundHandler: RequestHandler = (
  request,
  response,
): void => {
  response.status(404).json({
    success: false,
    message: "The requested resource was not found.",
    path: request.originalUrl,
  });
};