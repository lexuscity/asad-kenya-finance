import { Router } from "express";

import { siteContentController } from "../controllers/site-content.controller.js";

/**
 * ============================================================
 * ASAD KENYA FINANCE
 * Public Website Content Routes
 * ============================================================
 */

const router = Router();

/**
 * Complete public website information.
 */
router.get("/", siteContentController.getSiteContent);

/**
 * Public company identity.
 */
router.get(
  "/identity",
  siteContentController.getIdentity,
);

/**
 * Public contact information.
 */
router.get(
  "/contact",
  siteContentController.getContact,
);

/**
 * Public About Us information.
 */
router.get(
  "/about",
  siteContentController.getAbout,
);

/**
 * Public loan product information.
 */
router.get(
  "/loan-products",
  siteContentController.getLoanProducts,
);

/**
 * Individual public loan product information.
 */
router.get(
  "/loan-products/:id",
  siteContentController.getLoanProduct,
);

export default router;