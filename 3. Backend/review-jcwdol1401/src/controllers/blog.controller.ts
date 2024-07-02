import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getAllBlogs = async (req: Request, res: Response) => {
  try {
    const blogs = await prisma.blog.findMany();
    res.status(200).json({ message: "success", data: blogs });
  } catch (error) {
    res.status(400).json({ error: "error" });
  }
};

export const createBlog = async (req: Request, res: Response) => {
  try {
    const { title, content, category, image } = req.body;
    const blog = await prisma.blog.create({
      data: {
        title,
        content,
        category,
        image,
      },
    });
    res.status(201).json({ message: "success", data: blog });
  } catch (error) {
    res.status(400).json({ error: "error" });
  }
};

export const getBlogById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const blog = await prisma.blog.findUnique({
      where: {
        id: Number(id),
      },
    });
    res.status(200).json({ message: "success", data: blog });
  } catch (error) {
    res.status(400).json({ error: "error" });
  }
};

export const updateBlog = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { title, content, category, image } = req.body;
    const blog = await prisma.blog.update({
      where: {
        id: Number(id),
      },
      data: {
        title,
        content,
        category,
        image,
      },
    });
    res.status(200).json({ message: "success", data: blog });
  } catch (error) {
    res.status(400).json({ error: "error" });
  }
};

export const deleteBlog = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const blog = await prisma.blog.delete({
      where: {
        id: Number(id),
      },
    });
    res.status(200).json({ message: "success", data: blog });
  } catch (error) {
    res.status(400).json({ error: "error" });
  }
};
