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
exports.login = exports.register = exports.getAllUsers = void 0;
const client_1 = require("@prisma/client");
const bcrypt_1 = require("bcrypt");
const jsonwebtoken_1 = require("jsonwebtoken");
const prisma = new client_1.PrismaClient();
const getAllUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield prisma.user.findMany();
        res.status(200).json({ message: "success", data: users });
    }
    catch (error) {
        res.status(400).json({ error: "error" });
    }
});
exports.getAllUsers = getAllUsers;
const register = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, email, password } = req.body;
        const existingUser = yield prisma.user.findFirst({
            where: {
                email,
            },
        });
        if (existingUser) {
            return res.status(400).json({ error: "User already exists" });
        }
        const salt = yield (0, bcrypt_1.genSalt)(10);
        const hashedPassword = yield (0, bcrypt_1.hash)(password, salt);
        const user = yield prisma.user.create({
            data: {
                name,
                email,
                password: hashedPassword,
            },
        });
        res.status(201).json({ message: "success", data: user });
    }
    catch (error) {
        res.status(400).json({ error: "error" });
    }
});
exports.register = register;
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        const user = yield prisma.user.findFirst({
            where: {
                email,
            },
        });
        if (!user) {
            return res.status(400).json({ error: "Invalid email or password" });
        }
        const invalidPassword = yield (0, bcrypt_1.compare)(password, user.password);
        if (!invalidPassword) {
            return res.status(400).json({ error: "Invalid email or password" });
        }
        const jwtPayload = { name: user.name, email: user.email, role: user === null || user === void 0 ? void 0 : user.role };
        const token = yield (0, jsonwebtoken_1.sign)(jwtPayload, "mySecret", {
            expiresIn: "1h",
        });
        res.status(200).json({ message: "success", data: user, token });
    }
    catch (error) {
        res.status(400).json({ error: "error" });
    }
});
exports.login = login;
