import { Router } from "express";

import { mediaController } from "../controllers/media.controller.js";

const router = Router();

/**
 * Homepage carousel/hero media.
 */
router.get(
  "/homepage",
  mediaController.getHomepageMedia,
);

/**
 * Individual public media item.
 */
router.get(
  "/:id",
  mediaController.getById,
);

export default router;