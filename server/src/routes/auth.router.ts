import { Router } from "express";

import {
  googleAuth,
  googleAuthCallback,
  redirectToHome,
} from "../middleware/middleware.js";
const router = Router();
router.get("/", googleAuth);
router.get("/callback", googleAuthCallback, redirectToHome);
router.get("/failure", (req, res) => {
  res.status(400).json({ message: "Failed to login" });
});
export default router;
