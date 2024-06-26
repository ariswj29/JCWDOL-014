import express, { NextFunction, Request, Response } from "express";
import todoRouter from "./routes/todo-route.js";

const app = express();
const PORT = 8000;
const filePath = "./src/data/todos.json";

app.use(express.json());

app.use("/api/v1/todos", todoRouter);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
