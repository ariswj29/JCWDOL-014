import express from "express";
import {
  getExpenses,
  getExpense,
  addExpense,
  updateExpense,
  deleteExpense,
  totalExpenseByCategory,
  totalExpenseByDate,
} from "../controllers/expenses-controller.js";

const router = express.Router();

router.route("/expenses/").get(getExpenses).post(addExpense);
router
  .route("/expenses/:id")
  .get(getExpense)
  .put(updateExpense)
  .delete(deleteExpense);
router.route("/total-expenses").get(totalExpenseByDate);
router.route("/total-expenses/:category").get(totalExpenseByCategory);

export default router;
