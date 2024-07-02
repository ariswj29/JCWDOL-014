import express from "express";
import user from "./user.router.js";
import blog from "./blog.router.js";

const router = express.Router();

router.use("/users", user);
router.use("/blogs", blog);

export default router;
