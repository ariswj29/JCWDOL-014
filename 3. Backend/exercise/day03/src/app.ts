import express, { NextFunction, Request, Response } from "express";
import expensesRouter from "./routes/expenses-route.js";

const app = express();
const PORT = 8000;
const filePath = "./src/data/expenses.json";

app.use(express.json());

app.use("/api/v1/expenses", expensesRouter);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
