"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const index_1 = __importDefault(require("./routers/index"));
const app = (0, express_1.default)();
const PORT = 5670;
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use(index_1.default);
app.get("/", (req, res) => {
    res.send("Hello World!");
});
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
