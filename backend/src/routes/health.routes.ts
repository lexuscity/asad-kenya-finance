import { Router } from "express";

import { env } from "../config/env.js";

const router = Router();

/**
 * GET /api/health
 *
 * Public infrastructure health check.
 */
router.get("/", (_request, response) => {
  response.status(200).json({
    success: true,
    message: "ASAD Kenya Finance website API is running.",
    environment: env.NODE_ENV,
  });
});

export default router;