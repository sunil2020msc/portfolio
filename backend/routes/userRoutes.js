import express from "express";
import { login, register, profile } from "../controllers/userController.js";
import protect from "../middlewares/authMiddleware.js";
const userRouter = express.Router();

userRouter.post("/", login);
userRouter.post("/register", register);
userRouter.get("/profile", protect, profile);

export default userRouter;