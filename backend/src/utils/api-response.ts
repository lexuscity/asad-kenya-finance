import type { Response } from "express";

/**
 * ============================================================
 * ASAD KENYA FINANCE
 * API Response Utility
 * ============================================================
 *
 * Keeps public API responses consistent.
 * ============================================================
 */

export const sendSuccess = <T>(
  response: Response,
  data: T,
  statusCode = 200,
  message?: string,
): void => {
  response.status(statusCode).json({
    success: true,
    ...(message ? { message } : {}),
    data,
  });
};

export const sendError = (
  response: Response,
  message: string,
  statusCode = 400,
  errors?: unknown,
): void => {
  response.status(statusCode).json({
    success: false,
    message,
    ...(errors !== undefined ? { errors } : {}),
  });
};