import cors from "cors";
import helmet from "helmet";
import type { Express } from "express";

import { env } from "../config/env.js";

/**
 * ============================================================
 * ASAD KENYA FINANCE
 * HTTP Security Configuration
 * ============================================================
 *
 * Centralizes the security-related Express middleware.
 *
 * This layer protects the application against common HTTP
 * security risks while keeping configuration separate from
 * application bootstrapping.
 * ============================================================
 */

/**
 * Applies HTTP security protections to the Express application.
 */
export const configureSecurity = (app: Express): void => {
  /**
   * Helmet configures a collection of security-related HTTP
   * response headers.
   *
   * CSP is enabled here, but the frontend is served separately.
   * Therefore, the API does not need to permit arbitrary
   * external scripts or frames.
   */
  app.use(
    helmet({
      contentSecurityPolicy: {
        directives: {
          defaultSrc: ["'self'"],
          baseUri: ["'self'"],
          fontSrc: ["'self'", "https:", "data:"],
          formAction: ["'self'"],
          frameAncestors: ["'none'"],
          imgSrc: ["'self'", "data:", "https:"],
          objectSrc: ["'none'"],
          scriptSrc: ["'self'"],
          scriptSrcAttr: ["'none'"],
          styleSrc: ["'self'", "https:", "'unsafe-inline'"],
          upgradeInsecureRequests:
            env.NODE_ENV === "production" ? [] : null,
        },
      },

      /**
       * Prevents the API from being embedded in frames.
       */
      frameguard: {
        action: "deny",
      },

      /**
       * Prevents MIME-type sniffing.
       */
      noSniff: true,

      /**
       * Reduces information exposed through the Referrer header.
       */
      referrerPolicy: {
        policy: "strict-origin-when-cross-origin",
      },

      /**
       * Helps protect against certain legacy browser XSS
       * behavior.
       */
      xssFilter: false,
    }),
  );

  /**
   * CORS
   *
   * Only the configured frontend origin is permitted.
   *
   * Credentials are enabled because authenticated requests
   * may use secure cookies.
   */
  app.use(
    cors({
      origin: env.CORS_ORIGIN,
      credentials: true,
      methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
      allowedHeaders: [
        "Content-Type",
        "Authorization",
        "X-Request-ID",
      ],
      exposedHeaders: ["X-Request-ID"],
      optionsSuccessStatus: 204,
    }),
  );

  /**
   * Removes Express's default identifying header.
   */
  app.disable("x-powered-by");

  /**
   * Trust only the first reverse proxy when running behind a
   * trusted production proxy such as Nginx.
   *
   * This is required for correct client IP detection when
   * rate limiting is enabled.
   */
  app.set("trust proxy", 1);
};