import { Router } from "express";
import {
  createBlog,
  deleteBlog,
  getAllBlogs,
  getBlogById,
  updateBlog,
} from "../controllers/blog.controller";
import { adminGuard, verifyToken } from "../middleware/jwt.middleware";

const router = Router();

router.get("/", verifyToken, getAllBlogs);
router.post("/", verifyToken, adminGuard, createBlog);
router.get("/:id", getBlogById);
router.put("/:id", updateBlog);
router.delete("/:id", deleteBlog);

export default router;
