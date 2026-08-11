import compression from "compression";
import express from "express";
import type { Express } from "express";

import { configureBodyParser } from "./middlewares/body-parser.middleware.js";
import { errorHandler } from "./middlewares/error.middleware.js";
import { notFoundHandler } from "./middlewares/not-found.middleware.js";
import { apiRateLimiter } from "./middlewares/rate-limit.middleware.js";
import { requestIdMiddleware } from "./middlewares/request-id.middleware.js";
import { sanitizationMiddleware } from "./middlewares/sanitization.middleware.js";
import { configureSecurity } from "./middlewares/security.middleware.js";
import apiRoutes from "./routes/index.js";

/**
 * ============================================================
 * ASAD KENYA FINANCE
 * Express Application
 * ============================================================
 *
 * Creates and configures the public website API application.
 *
 * Business routes will be registered separately as the
 * approved website modules are implemented.
 * ============================================================
 */

export const createApp = (): Express => {
  const app = express();

  /**
   * HTTP security configuration.
   */
  configureSecurity(app);

  /**
   * Request correlation.
   */
  app.use(requestIdMiddleware);

  /**
   * Basic request metadata normalization.
   */
  app.use(sanitizationMiddleware);

  /**
   * Request body parsing and size restrictions.
   */
  configureBodyParser(app);

  /**
   * Response compression.
   */
  app.use(
    compression({
      threshold: 1024,
    }),
  );

  /**
   * General API protection.
   */
  app.use(apiRateLimiter);

  /**
   * API health endpoint.
   *
   * This is intentionally simple. It allows monitoring
   * systems and deployment checks to confirm that the
   * application is running.
   */
  app.use("/api", apiRoutes);

  /**
   * Unknown routes.
   */
  app.use(notFoundHandler);

  /**
   * Centralized error handling.
   *
   * This MUST remain the final middleware.
   */
  app.use(errorHandler);

  return app;
};