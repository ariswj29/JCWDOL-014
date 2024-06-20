import express, { NextFunction, Request, Response } from "express";
import fs from "fs/promises";

const app = express();
const PORT = 8000;
const filePath = "./src/data/todos.json";

async function getTodos() {
  try {
    const data = await fs.readFile(filePath, "utf-8");
    const todos = JSON.parse(data);
    return todos;
  } catch (error) {
    console.error(error);
  }
}

app.get("/api/v1/todos", async (req, res) => {
  try {
    const todos = await getTodos();
    res.status(200).json({ message: "Success", todos });
  } catch (error) {
    res.status(500).json({ message: error });
  }
});

app.get("/api/v1/todos/:id", async (req, res) => {
  try {
    const todos = await getTodos();
    const todo = todos.find(
      (todo: { id: number }) => todo.id === Number(req.params.id)
    );
    if (!todo) {
      res.status(404).json({ message: "Todo not found" });
      return;
    }
    res.status(200).json({ message: "Success", todo });
  } catch (error) {
    res.status(500).json({ message: error });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
