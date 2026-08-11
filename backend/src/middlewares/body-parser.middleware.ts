import express, { type Express } from "express";

import { env } from "../config/env.js";

/**
 * ============================================================
 * ASAD KENYA FINANCE
 * Request Body Parser Configuration
 * ============================================================
 *
 * Controls how Express parses incoming request bodies.
 *
 * Security principles:
 * - Requests have explicit size limits.
 * - JSON payloads are parsed only when appropriate.
 * - URL-encoded payloads are restricted.
 * - Large requests are rejected before reaching controllers.
 * ============================================================
 */

/**
 * Configures Express request-body parsing.
 */
export const configureBodyParser = (app: Express): void => {
  app.use(
    express.json({
      limit: env.MAX_FILE_SIZE,
      strict: true,
      type: "application/json",
    }),
  );

  app.use(
    express.urlencoded({
      extended: false,
      limit: env.MAX_FILE_SIZE,
      parameterLimit: 100,
    }),
  );
};