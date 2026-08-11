import { randomUUID } from "node:crypto";
import type { RequestHandler } from "express";

/**
 * ============================================================
 * ASAD KENYA FINANCE
 * Request ID Middleware
 * ============================================================
 *
 * Gives every request a unique identifier.
 *
 * The identifier is returned to the client and can also be
 * used to correlate application logs.
 *
 * Security:
 * - We never use personal information as a request ID.
 * - The ID contains no authentication or financial data.
 * - A client-supplied ID is accepted only when it is a valid
 *   UUID; otherwise a new ID is generated.
 * ============================================================
 */

const UUID_REGEX =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

export const requestIdMiddleware: RequestHandler = (
  request,
  response,
  next,
): void => {
  const incomingRequestId = request.header("x-request-id");

  const requestId =
    incomingRequestId && UUID_REGEX.test(incomingRequestId)
      ? incomingRequestId
      : randomUUID();

  response.setHeader("X-Request-ID", requestId);

  request.requestId = requestId;

  next();
};