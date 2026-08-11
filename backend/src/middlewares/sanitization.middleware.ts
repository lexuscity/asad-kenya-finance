import type { RequestHandler } from "express";

/**
 * ============================================================
 * ASAD KENYA FINANCE
 * Request Sanitization Middleware
 * ============================================================
 *
 * Performs safe normalization of request metadata.
 *
 * Important:
 * We do NOT blindly modify request bodies or query parameters.
 * Business-data validation belongs to each module's Zod schema.
 *
 * This middleware only removes obviously dangerous control
 * characters from selected request metadata.
 * ============================================================
 */

const CONTROL_CHARACTER_REGEX = /[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g;

const sanitizeHeaderValue = (value: string): string => {
  return value.replace(CONTROL_CHARACTER_REGEX, "").trim();
};

export const sanitizationMiddleware: RequestHandler = (
  request,
  _response,
  next,
): void => {
  const userAgent = request.get("user-agent");

  if (userAgent) {
    request.headers["user-agent"] = sanitizeHeaderValue(userAgent);
  }

  const requestId = request.get("x-request-id");

  if (requestId) {
    request.headers["x-request-id"] =
      sanitizeHeaderValue(requestId);
  }

  next();
};