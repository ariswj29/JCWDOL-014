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
exports.adminGuard = exports.verifyToken = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
const verifyToken = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const token = (_a = req.header("Authorization")) === null || _a === void 0 ? void 0 : _a.replace("Bearer ", "");
        if (!token) {
            return res.status(401).json({ error: "Unautorized" });
        }
        const secret = process.env.JWT_SECRET;
        const verifyUser = (0, jsonwebtoken_1.verify)(token, "mySecret");
        if (!verifyUser) {
            return res.status(401).json({ error: "Unautorized" });
        }
        req.user = verifyUser;
        next();
    }
    catch (error) {
        res.status(400).json({ error: "Invalid token" });
    }
});
exports.verifyToken = verifyToken;
const adminGuard = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        if (((_a = req.user) === null || _a === void 0 ? void 0 : _a.role) !== "admin") {
            return res.status(401).json({ error: "Unauthorized" });
        }
        next();
    }
    catch (error) {
        res.status(400).json({ error: "Invalid token" });
    }
});
exports.adminGuard = adminGuard;
