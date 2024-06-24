import express from "express";
import {
  getTodos,
  getTodo,
  addTodo,
  updateTodo,
  deleteTodo,
} from "../controllers/todo-controller.js";

const router = express.Router();

router.route("/").get(getTodos).post(addTodo);
router.route("/:id").get(getTodo).put(updateTodo).delete(deleteTodo);

export default router;
