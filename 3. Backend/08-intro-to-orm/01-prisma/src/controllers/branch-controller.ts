import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

export async function getBranches(req: Request, res: Response) {
  try {
    const branches = await prisma.branch.findMany();

    res.status(200).json({
      ok: true,
      branches,
    });
  } catch (error) {
    console.log(error);
  }
}

export async function createBranch(req: Request, res: Response) {
  try {
    const branch = await prisma.branch.create({
      data: req.body,
    });

    res.status(201).json({
      ok: true,
      message: "Branch created successfully",
      branch,
    });
  } catch (error) {
    console.log(error);
  }
}

export async function getBranch(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const branch = await prisma.branch.findUnique({
      where: {
        id: parseInt(id),
      },
    });

    if (!branch) throw new Error(`Branch with ID ${id} not found`);

    res.status(200).json({
      ok: true,
      branch,
    });
  } catch (error) {
    console.log(error);
  }
}

export async function updateBranch(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const branch = await prisma.branch.update({
      where: {
        id: parseInt(id),
      },
      data: { ...req.body, updatedAt: new Date() },
    });

    res.status(200).json({
      ok: true,
      message: "Branch updated successfully",
      branch,
    });
  } catch (error) {
    console.log(error);
  }
}

export async function deleteBranch(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const branch = await prisma.branch.delete({
      where: {
        id: parseInt(id),
      },
    });

    res.status(200).json({
      ok: true,
      message: "Branch deleted successfully",
      branch,
    });
  } catch (error) {
    console.log(error);
  }
}

export async function getBranchStats(req: Request, res: Response) {
  try {
    const branch = await prisma.branch.aggregate({
      _count: {
        _all: true,
      },
      _max: {
        createdAt: true,
      },
      _min: {
        createdAt: true,
      },
    });

    res.status(200).json({
      ok: true,
      branch,
    });
  } catch (error) {
    console.log(error);
  }
}
