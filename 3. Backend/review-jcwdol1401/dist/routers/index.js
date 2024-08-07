"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_router_js_1 = __importDefault(require("./auth.router.js"));
const blog_router_js_1 = __importDefault(require("./blog.router.js"));
const router = express_1.default.Router();
router.use("/users", auth_router_js_1.default);
router.use("/blogs", blog_router_js_1.default);
exports.default = router;
