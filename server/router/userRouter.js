import express from "express";
import {
  Deletes,
  Login,
  Register,
  Update,
  UserID,
  Users,
} from "../controllers/user.js";

const userRouter = express.Router();

userRouter.post("/register", Register);
userRouter.post("/login", Login);
userRouter.get("/users", Users);
userRouter.get("/user/:id", UserID);
userRouter.put("/:id", Update);
userRouter.delete("/:id", Deletes);
export default userRouter;
