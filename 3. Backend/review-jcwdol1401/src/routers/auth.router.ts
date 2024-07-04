import { NextFunction, Request, Response, Router } from "express";
import { register, getAllUsers, login } from "../controllers/auth.controller";

const router = Router();

router.get(
  "/",
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
  getAllUsers
);
router.post("/register", register);
router.post("/login", login);

export default router;
