import rateLimit from "express-rate-limit";

import { env } from "../config/env.js";

/**
 * ============================================================
 * ASAD KENYA FINANCE
 * Rate Limiting Middleware
 * ============================================================
 *
 * Protects the API against excessive requests and basic
 * automated abuse.
 *
 * Important:
 * This is application-level protection. In production,
 * infrastructure-level protection such as a reverse proxy,
 * firewall, and managed hosting controls should also be used.
 * ============================================================
 */

/**
 * General API rate limiter.
 *
 * This is intentionally moderate because the public website
 * will contain read-heavy endpoints.
 */
export const apiRateLimiter = rateLimit({
  windowMs: env.RATE_LIMIT_WINDOW_MS,

  limit: env.RATE_LIMIT_MAX_REQUESTS,

  standardHeaders: "draft-8",

  legacyHeaders: false,

  message: {
    success: false,
    message:
      "Too many requests. Please wait before trying again.",
  },

  skip: (request) => {
    return request.method === "OPTIONS";
  },
});

/**
 * Stricter limiter for sensitive endpoints.
 *
 * This limiter will eventually be applied to endpoints such as
 * authentication and other administrative operations.
 */
export const sensitiveRateLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,

  limit: 20,

  standardHeaders: "draft-8",

  legacyHeaders: false,

  message: {
    success: false,
    message:
      "Too many attempts. Please wait before trying again.",
  },

  skip: (request) => {
    return request.method === "OPTIONS";
  },
});