import express from "express";
import { LogOut, Login, Register } from "../controllers/auth.ctr.js";

const authRouter = express.Router();

authRouter.post("/register", Register);
authRouter.post("/login", Login);
authRouter.get("/logOut", LogOut);

export default authRouter;
