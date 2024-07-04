import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

type User = {
  id: number;
  name: string;
  email: string;
};

declare namespace Express {
  export interface Request {
    user?: User;
  }
}

export const verifyToken = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const token = req.header("Authorization")?.replace("Bearer ", "");

    if (!token) {
      return res.status(401).json({ error: "Unautorized" });
    }

    const secret = process.env.JWT_SECRET as string;
    const verifyUser = verify(token, "mySecret");

    if (!verifyUser) {
      return res.status(401).json({ error: "Unautorized" });
    }

    req.user = verifyUser as User;

    next();
  } catch (error) {
    res.status(400).json({ error: "Invalid token" });
  }
};

export const adminGuard = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    if (req.user?.role !== "admin") {
      return res.status(401).json({ error: "Unauthorized" });
    }
    next();
  } catch (error) {
    res.status(400).json({ error: "Invalid token" });
  }
};
