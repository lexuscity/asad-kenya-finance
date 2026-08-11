import "dotenv/config";
import { z } from "zod";

/**
 * ============================================================
 * ASAD KENYA FINANCE
 * Environment Configuration
 * ============================================================
 *
 * All environment variables used by the backend are validated
 * here before the application starts.
 *
 * Application modules should import `env` rather than reading
 * process.env directly.
 * ============================================================
 */

const envSchema = z.object({
  // ----------------------------------------------------------
  // Application
  // ----------------------------------------------------------
  NODE_ENV: z
    .enum(["development", "test", "production"])
    .default("development"),

  PORT: z.coerce
    .number()
    .int()
    .min(1)
    .max(65535)
    .default(5000),

  APP_NAME: z
    .string()
    .min(1, "APP_NAME is required.")
    .default("ASAD Kenya Finance"),

  APP_URL: z
    .string()
    .url("APP_URL must be a valid URL."),

  FRONTEND_URL: z
    .string()
    .url("FRONTEND_URL must be a valid URL."),

  // ----------------------------------------------------------
  // Database
  // ----------------------------------------------------------
  DATABASE_URL: z
    .string()
    .min(1, "DATABASE_URL is required."),

  // ----------------------------------------------------------
  // Authentication
  // ----------------------------------------------------------
  JWT_SECRET: z
    .string()
    .min(32, "JWT_SECRET must contain at least 32 characters."),

  JWT_EXPIRES_IN: z
    .string()
    .min(1)
    .default("1d"),

  BCRYPT_SALT_ROUNDS: z.coerce
    .number()
    .int()
    .min(10)
    .max(15)
    .default(12),

  // ----------------------------------------------------------
  // File uploads
  // ----------------------------------------------------------
  MAX_FILE_SIZE: z.coerce
    .number()
    .int()
    .positive()
    .default(5 * 1024 * 1024),

  UPLOAD_PATH: z
    .string()
    .min(1)
    .default("uploads"),

  // ----------------------------------------------------------
  // CORS
  // ----------------------------------------------------------
  CORS_ORIGIN: z
    .string()
    .min(1),

  // ----------------------------------------------------------
  // Rate limiting
  // ----------------------------------------------------------
  RATE_LIMIT_WINDOW_MS: z.coerce
    .number()
    .int()
    .positive()
    .default(15 * 60 * 1000),

  RATE_LIMIT_MAX_REQUESTS: z.coerce
    .number()
    .int()
    .positive()
    .default(100),

  // ----------------------------------------------------------
  // Logging
  // ----------------------------------------------------------
  LOG_LEVEL: z
    .enum(["fatal", "error", "warn", "info", "debug"])
    .default("info"),

  // ----------------------------------------------------------
  // Swagger
  // ----------------------------------------------------------
  SWAGGER_ENABLED: z
    .string()
    .transform((value) => value.toLowerCase() === "true")
    .default(false),

  // ----------------------------------------------------------
  // Company information
  // ----------------------------------------------------------
  COMPANY_NAME: z
    .string()
    .min(1)
    .default("ASAD Kenya Finance"),

  COMPANY_EMAIL: z
    .string()
    .email("COMPANY_EMAIL must be a valid email address."),

  COMPANY_PHONE: z
    .string()
    .min(7, "COMPANY_PHONE must be valid."),

    // ----------------------------------------------------------
  // Email / SMTP
  // ----------------------------------------------------------
  SMTP_HOST: z
    .string()
    .min(1, "SMTP_HOST is required."),

  SMTP_PORT: z.coerce
    .number()
    .int()
    .positive()
    .default(465),

  SMTP_SECURE: z
    .string()
    .transform((value) => value.toLowerCase() === "true")
    .default(true),

  SMTP_USER: z
    .string()
    .email("SMTP_USER must be a valid email address."),

  SMTP_PASSWORD: z
    .string()
    .min(1, "SMTP_PASSWORD is required."),

  CONTACT_EMAIL: z
    .string()
    .email("CONTACT_EMAIL must be a valid email address."),
  // ----------------------------------------------------------
  // Cookies
  // ----------------------------------------------------------
  COOKIE_SECRET: z
    .string()
    .min(32, "COOKIE_SECRET must contain at least 32 characters."),

  COOKIE_SECURE: z
    .string()
    .transform((value) => value.toLowerCase() === "true")
    .default(false),

  COOKIE_SAME_SITE: z
    .enum(["strict", "lax", "none"])
    .default("lax"),
});

const parsedEnv = envSchema.safeParse(process.env);

if (!parsedEnv.success) {
  console.error("Environment configuration validation failed.");

  console.error(
    parsedEnv.error.issues.map((issue) => ({
      field: issue.path.join("."),
      message: issue.message,
    })),
  );

  process.exit(1);
}

export const env = parsedEnv.data;