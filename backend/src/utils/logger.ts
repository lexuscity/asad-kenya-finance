import { env } from "../config/env.js";

/**
 * ============================================================
 * ASAD KENYA FINANCE
 * Centralized Application Logger
 * ============================================================
 *
 * Provides a single logging interface for the backend.
 *
 * Security rule:
 * Never log passwords, authentication tokens, secrets,
 * database credentials, or other sensitive personal data.
 * ============================================================
 */

type LogMetadata = Record<string, unknown>;

const shouldLogDebug = env.LOG_LEVEL === "debug";

const formatMessage = (
  level: string,
  message: string,
  metadata?: LogMetadata,
): string => {
  const timestamp = new Date().toISOString();

  if (!metadata || Object.keys(metadata).length === 0) {
    return `[${timestamp}] [${level}] ${message}`;
  }

  return `[${timestamp}] [${level}] ${message} ${JSON.stringify(
    metadata,
  )}`;
};

export const logger = {
  /**
   * Logs informational application events.
   */
  info(message: string, metadata?: LogMetadata): void {
    console.info(formatMessage("INFO", message, metadata));
  },

  /**
   * Logs warnings that do not necessarily stop execution.
   */
  warn(message: string, metadata?: LogMetadata): void {
    console.warn(formatMessage("WARN", message, metadata));
  },

  /**
   * Logs application errors.
   */
  error(message: string, metadata?: LogMetadata): void {
    console.error(formatMessage("ERROR", message, metadata));
  },

  /**
   * Logs detailed debugging information.
   *
   * Debug logs are only emitted when LOG_LEVEL=debug.
   */
  debug(message: string, metadata?: LogMetadata): void {
    if (!shouldLogDebug) {
      return;
    }

    console.debug(formatMessage("DEBUG", message, metadata));
  },

  /**
   * Logs fatal application errors.
   */
  fatal(message: string, metadata?: LogMetadata): void {
    console.error(formatMessage("FATAL", message, metadata));
  },
};