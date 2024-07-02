"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteBlog = exports.updateBlog = exports.getBlogById = exports.createBlog = exports.getAllBlogs = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const getAllBlogs = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const blogs = yield prisma.blog.findMany();
        res.status(200).json({ message: "success", data: blogs });
    }
    catch (error) {
        res.status(400).json({ error: "error" });
    }
});
exports.getAllBlogs = getAllBlogs;
const createBlog = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { title, content, category, image } = req.body;
        const blog = yield prisma.blog.create({
            data: {
                title,
                content,
                category,
                image,
            },
        });
        res.status(201).json({ message: "success", data: blog });
    }
    catch (error) {
        res.status(400).json({ error: "error" });
    }
});
exports.createBlog = createBlog;
const getBlogById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const blog = yield prisma.blog.findUnique({
            where: {
                id: Number(id),
            },
        });
        res.status(200).json({ message: "success", data: blog });
    }
    catch (error) {
        res.status(400).json({ error: "error" });
    }
});
exports.getBlogById = getBlogById;
const updateBlog = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const { title, content, category, image } = req.body;
        const blog = yield prisma.blog.update({
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
    }
    catch (error) {
        res.status(400).json({ error: "error" });
    }
});
exports.updateBlog = updateBlog;
const deleteBlog = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const blog = yield prisma.blog.delete({
            where: {
                id: Number(id),
            },
        });
        res.status(200).json({ message: "success", data: blog });
    }
    catch (error) {
        res.status(400).json({ error: "error" });
    }
});
exports.deleteBlog = deleteBlog;
