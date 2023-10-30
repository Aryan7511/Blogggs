import express from "express";
const router = express.Router();
import {
  createComment,
  updateComment,
  deleteComment,
} from "../controllers/commentControllers.js";
import { authGuard } from "../middleware/authMiddleware.js";

router.post("/", authGuard, createComment);
router
  .route("/:commentId")
  .put(authGuard, updateComment)
  .delete(authGuard, deleteComment);

export default router;
