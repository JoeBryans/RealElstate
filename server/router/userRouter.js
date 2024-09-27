import express from "express";
import { Create } from "../controllers/user.js";

const userRouter = express.Router();

userRouter.post("/register", Create);
userRouter.post("/login");
userRouter.get("/userr");
userRouter.get("/userr/:id");
userRouter.put("/:id");
userRouter.delete("/:id");
export default userRouter;
