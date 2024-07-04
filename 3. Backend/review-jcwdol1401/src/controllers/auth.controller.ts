import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { compare, genSalt, hash } from "bcrypt";
import { sign } from "jsonwebtoken";
import { config } from "dotenv";

const prisma = new PrismaClient();

export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const users = await prisma.user.findMany();
    res.status(200).json({ message: "success", data: users });
  } catch (error) {
    res.status(400).json({ error: "error" });
  }
};

export const register = async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body;

    const existingUser = await prisma.user.findFirst({
      where: {
        email,
      },
    });

    if (existingUser) {
      return res.status(400).json({ error: "User already exists" });
    }

    const salt = await genSalt(10);
    const hashedPassword = await hash(password, salt);

    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });

    res.status(201).json({ message: "success", data: user });
  } catch (error) {
    res.status(400).json({ error: "error" });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const user = await prisma.user.findFirst({
      where: {
        email,
      },
    });

    if (!user) {
      return res.status(400).json({ error: "Invalid email or password" });
    }

    const invalidPassword = await compare(password, user.password);

    if (!invalidPassword) {
      return res.status(400).json({ error: "Invalid email or password" });
    }

    const jwtPayload = { name: user.name, email: user.email, role: user?.role };
    const token = await sign(jwtPayload, "mySecret", {
      expiresIn: "1h",
    });

    res.status(200).json({ message: "success", data: user, token });
  } catch (error) {
    res.status(400).json({ error: "error" });
  }
};
