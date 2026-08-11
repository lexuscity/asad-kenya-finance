import { Router } from "express";

import healthRoutes from "./health.routes.js";
import siteContentRoutes from "./site-content.routes.js";
import contactRoutes from "./contact.routes.js";
import legalRoutes from "./legal.routes.js";
import faqRoutes from "./faq.routes.js";
import mediaRoutes from "./media.routes.js";

const router = Router();

/**
 * Infrastructure health.
 */
router.use("/health", healthRoutes);

/**
 * Public website information.
 */
router.use("/site", siteContentRoutes);

router.use("/contact", contactRoutes);

router.use("/legal", legalRoutes);

router.use("/faq", faqRoutes);

router.use("/media", mediaRoutes);

export default router;