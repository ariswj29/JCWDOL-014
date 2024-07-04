"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_controller_1 = require("../controllers/auth.controller");
const router = (0, express_1.Router)();
router.get("/", 
//   (req: Request, res: Response, next: NextFunction) => {
//     console.log("Hello from auth router");
//     const getAccess = false;
//     if (getAccess) {
//       console.log("Access granted");
//       next();
//     } else {
//       res.status(401).json({ message: "Access denied" });
//     }
//   },
auth_controller_1.getAllUsers);
router.post("/register", auth_controller_1.register);
router.post("/login", auth_controller_1.login);
exports.default = router;
