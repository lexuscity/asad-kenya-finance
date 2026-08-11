import { Router } from "express";

const router = Router();

/**
 * ============================================================
 * ASAD KENYA FINANCE
 * Public Legal Information Routes
 * ============================================================
 *
 * These endpoints provide public website notices.
 *
 * They do not process or expose private user information.
 * ============================================================
 */

/**
 * GET /api/legal/privacy
 */
router.get("/privacy", (_request, response) => {
  response.status(200).json({
    success: true,
    data: {
      title: "Privacy Notice",
      message:
        "ASAD Kenya Finance respects your privacy and is committed to protecting personal information provided through this website.",
    },
  });
});

/**
 * GET /api/legal/cookies
 */
router.get("/cookies", (_request, response) => {
  response.status(200).json({
    success: true,
    data: {
      title: "Cookie Notice",
      message:
        "This website may use cookies and similar technologies where necessary to support website functionality and improve the user experience.",
    },
  });
});

export default router;