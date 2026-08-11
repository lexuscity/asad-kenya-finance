import { createServer } from "node:http";

import { createApp } from "./app.js";
import { env } from "./config/env.js";
import { logger } from "./utils/logger.js";

/**
 * ============================================================
 * ASAD KENYA FINANCE
 * HTTP Server Entry Point
 * ============================================================
 */

const app = createApp();

const server = createServer(app);

/**
 * Start the HTTP server.
 */
server.listen(env.PORT, () => {
  logger.info("ASAD Kenya Finance website API started.", {
    environment: env.NODE_ENV,
    port: env.PORT,
  });
});

/**
 * Graceful shutdown.
 *
 * Allows active requests to finish before the process exits.
 */
const shutdown = (signal: string): void => {
  logger.info("Shutdown signal received.", {
    signal,
  });

  server.close((error) => {
    if (error) {
      logger.error("Server shutdown failed.", {
        error: error.message,
      });

      process.exit(1);
    }

    logger.info("HTTP server closed successfully.");

    process.exit(0);
  });
};

/**
 * Handle normal termination signals.
 */
process.on("SIGTERM", () => {
  shutdown("SIGTERM");
});

process.on("SIGINT", () => {
  shutdown("SIGINT");
});

/**
 * Handle unexpected application failures.
 */
process.on("uncaughtException", (error: Error) => {
  logger.fatal("Uncaught exception.", {
    error: error.message,
    stack:
      env.NODE_ENV === "production"
        ? undefined
        : error.stack,
  });

  process.exit(1);
});

/**
 * Handle rejected promises that were not explicitly handled.
 */
process.on(
  "unhandledRejection",
  (reason: unknown) => {
    logger.fatal("Unhandled promise rejection.", {
      reason:
        reason instanceof Error
          ? reason.message
          : String(reason),
    });

    process.exit(1);
  },
);