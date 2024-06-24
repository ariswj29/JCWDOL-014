import { Request, Response } from "express";
import fs from "fs/promises";

const filePath = "./src/data/todos.json";

async function getAllTodos() {
  try {
    const data = await fs.readFile(filePath, "utf-8");
    const todos = JSON.parse(data);
    return todos;
  } catch (error) {
    console.error(error);
  }
}

export async function getTodos(req: Request, res: Response) {
  try {
    const todos = await getAllTodos();
    res.status(200).json({ message: "Success", todos });
  } catch (error) {
    res.status(500).json({ message: error });
  }
}

export async function getTodo(req: Request, res: Response) {
  try {
    const todos = await getAllTodos();
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
}

export async function addTodo(req: Request, res: Response) {
  try {
    const { title, description, completed } = req.body;

    if (!title || !description || completed === undefined) {
      res.status(400).json({ message: "All fields are required" });
    }

    const todos = await getAllTodos();
    const newTodo = { id: todos.length + 1, ...req.body };
    todos.push(newTodo);
    await fs.writeFile(filePath, JSON.stringify(todos, null, 2));
    res.status(201).json({ message: "Todo created successfully", newTodo });
  } catch (error) {
    res.status(500).json({ message: error });
  }
}

export async function updateTodo(req: Request, res: Response) {
  try {
    const todos = await getAllTodos();
    const todoIndex = todos.findIndex(
      (todo: { id: number }) => todo.id === Number(req.params.id)
    );
    const todo = todos[todoIndex];

    if (!todo) {
      res.status(404).json({ message: "Todo not found" });
    }
    todos[todoIndex] = { ...todo, ...req.body };
    await fs.writeFile(filePath, JSON.stringify(todos, null, 2));
    res.status(200).json({ message: "Todo updated successfully", todos });
  } catch (error) {
    res.status(500).json({ message: error });
  }
}

export async function deleteTodo(req: Request, res: Response) {
  try {
    const todos = await getAllTodos();
    const todoIndex = todos.findIndex(
      (todo: { id: number }) => todo.id === Number(req.params.id)
    );
    if (todoIndex === -1) {
      res.status(404).json({ message: "Todo not found" });
    }
    todos.splice(todoIndex, 1);
    await fs
      .writeFile(filePath, JSON.stringify(todos, null, 2))
      .then(() => {
        res.status(200).json({ message: "Todo deleted successfully" });
      })
      .catch((error) => {
        res.status(500).json({ message: error });
      });
  } catch (error) {
    res.status(500).json({ message: error });
  }
}
