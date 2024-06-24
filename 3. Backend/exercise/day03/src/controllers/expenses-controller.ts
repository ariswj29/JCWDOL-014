import { Request, Response } from "express";
import fs from "fs/promises";

const filePath = "./src/data/expenses.json";

async function getAllExpenses() {
  try {
    const data = await fs.readFile(filePath, "utf-8");
    const expenses = JSON.parse(data);
    return expenses;
  } catch (error) {
    console.error(error);
  }
}

export async function getExpenses(req: Request, res: Response) {
  try {
    const expenses = await getAllExpenses();
    res.status(200).json({ message: "Success", expenses });
  } catch (error) {
    res.status(500).json({ message: error });
  }
}

export async function addExpense(req: Request, res: Response) {
  try {
    const { title, nominal, type, category, date } = req.body;

    if (!title || !nominal || !type || !category || !date) {
      res.status(400).json({ message: "All fields are required" });
    } else if (typeof nominal !== "number") {
      res.status(400).json({ message: "Nominal must be a number" });
    } else if (type !== "income" && type !== "expense") {
      res
        .status(400)
        .json({ message: "Type must be either income or expense" });
    } else if (
      category !== "income" &&
      category !== "food" &&
      category !== "transport"
    ) {
      res.status(400).json({
        message: "Category must be either income, food, or transport",
      });
    } else {
      const expenses = await getAllExpenses();
      const newExpense = { id: expenses.length + 1, ...req.body };
      expenses.push(newExpense);
      await fs.writeFile(filePath, JSON.stringify(expenses, null, 2));
      res
        .status(201)
        .json({ message: "Expense created successfully", newExpense });
    }
  } catch (error) {
    res.status(500).json({ message: error });
  }
}

export async function getExpense(req: Request, res: Response) {
  try {
    const expenses = await getAllExpenses();
    const expense = expenses.find(
      (expense: { id: number }) => expense.id === Number(req.params.id)
    );
    if (!expense) {
      res.status(404).json({ message: "Expense not found" });
      return;
    }
    res.status(200).json({ message: "Success", expense });
  } catch (error) {
    res.status(500).json({ message: error });
  }
}

export async function updateExpense(req: Request, res: Response) {
  try {
    const expenses = await getAllExpenses();
    const expenseIndex = expenses.findIndex(
      (expense: { id: number }) => expense.id === Number(req.params.id)
    );
    const expense = expenses[expenseIndex];

    if (!expense) {
      res.status(404).json({ message: "Expense not found" });
    }
    expenses[expenseIndex] = { ...expense, ...req.body };
    await fs.writeFile(filePath, JSON.stringify(expenses, null, 2));
    res.status(200).json({ message: "Expense updated successfully", expenses });
  } catch (error) {
    res.status(500).json({ message: error });
  }
}

export async function deleteExpense(req: Request, res: Response) {
  try {
    const expenses = await getAllExpenses();
    const expenseIndex = expenses.findIndex(
      (expense: { id: number }) => expense.id === Number(req.params.id)
    );
    if (expenseIndex === -1) {
      res.status(404).json({ message: "Expense not found" });
    }
    expenses.splice(expenseIndex, 1);
    await fs
      .writeFile(filePath, JSON.stringify(expenses, null, 2))
      .then(() => {
        res.status(200).json({ message: "Expense deleted successfully" });
      })
      .catch((error) => {
        res.status(500).json({ message: error });
      });
  } catch (error) {
    res.status(500).json({ message: error });
  }
}

export async function totalExpenseByDate(req: Request, res: Response) {
  try {
    const expenses = await getAllExpenses();
    const { startDate, endDate } = req.query as {
      startDate?: string;
      endDate?: string;
    };

    if (!startDate || !endDate) {
      return res
        .status(400)
        .json({ message: "Start date and end date are required" });
    }

    const filteredExpenses = expenses.filter(
      (expense: { date: string; type: string }) =>
        expense.type === "expense" &&
        expense.date >= startDate &&
        expense.date <= endDate
    );
    const total = filteredExpenses.reduce(
      (acc: number, expense: { nominal: number }) => acc + expense.nominal,
      0
    );
    res.status(200).json({
      message: `Total expenses from ${startDate} to ${endDate}`,
      total,
    });
  } catch (error) {
    res.status(500).json({ message: error });
  }
}

export async function totalExpenseByCategory(req: Request, res: Response) {
  try {
    const expenses = await getAllExpenses();
    const filteredExpenses = expenses.filter(
      (expense: { category: string }) =>
        expense.category === req.params.category
    );
    const total = filteredExpenses.reduce(
      (acc: number, expense: { nominal: number }) => acc + expense.nominal,
      0
    );
    res
      .status(200)
      .json({ message: `Total expenses from ${req.params.category}`, total });
  } catch (error) {
    res.status(500).json({ message: error });
  }
}
