import express from "express";
import { protectRoute } from "../middleware/auth.middleware";
import { getUsersForSidebar } from "../controllers/message.controller";

const router = express.Router();

router.get("/user", protectRoute, getUsersForSidebar);
router.get("/:id", protectRoute, getMessages)

export default router;