import { Router } from "express";

import { faqController } from "../controllers/faq.controller.js";

const router = Router();

/**
 * Public FAQ listing.
 */
router.get("/", faqController.getAll);

/**
 * Individual FAQ.
 */
router.get("/:id", faqController.getById);

export default router;