import { Router } from "express";

import { contactController } from "../controllers/contact.controller.js";
import { sensitiveRateLimiter } from "../middlewares/rate-limit.middleware.js";

/**
 * ============================================================
 * ASAD KENYA FINANCE
 * Public Contact Routes
 * ============================================================
 *
 * Routes for the public website Contact Us form.
 * ============================================================
 */

const router = Router();

/**
 * POST /api/contact
 *
 * The stricter limiter helps prevent automated abuse of the
 * public enquiry endpoint.
 */
router.post(
  "/",
  sensitiveRateLimiter,
  contactController.submitContact,
);

export default router;