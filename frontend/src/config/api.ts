/**
 * ============================================================
 * ASAD KENYA FINANCE
 * API Configuration
 * ============================================================
 */

const configuredApiUrl =
  import.meta.env.VITE_API_URL;

export const API_BASE_URL =
  configuredApiUrl?.replace(/\/+$/, "") ||
  "http://localhost:5000/api";