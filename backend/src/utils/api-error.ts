/**
 * ============================================================
 * ASAD KENYA FINANCE
 * API Error
 * ============================================================
 *
 * Represents an expected application error.
 *
 * This allows services to communicate safe, intentional errors
 * to the central error middleware.
 * ============================================================
 */

export class ApiError extends Error {
  public readonly statusCode: number;
  public readonly isOperational: boolean;

  constructor(
    message: string,
    statusCode = 500,
    isOperational = true,
  ) {
    super(message);

    this.name = "ApiError";
    this.statusCode = statusCode;
    this.isOperational = isOperational;

    Object.setPrototypeOf(this, ApiError.prototype);
  }
}