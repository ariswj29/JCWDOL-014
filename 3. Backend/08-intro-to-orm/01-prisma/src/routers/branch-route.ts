import express from "express";

import {
  getBranches,
  createBranch,
  getBranch,
  updateBranch,
  deleteBranch,
  getBranchStats,
} from "../controllers/branch-controller.js";

const router = express.Router();

router.route("/branch").get(getBranches).post(createBranch);
router.route("/branch/stats").get(getBranchStats);
router
  .route("/branch/:id")
  .get(getBranch)
  .put(updateBranch)
  .delete(deleteBranch);

export default router;
