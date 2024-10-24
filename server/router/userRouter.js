import express from "express";
import {
  Deletes,
  GetItem,
  Login,
  Register,
  Update,
  UserID,
  Users,
} from "../controllers/user.js";
import { Authenticate } from "../Auth/auth.js";

const userRouter = express.Router();

userRouter.post("/register", Register);
userRouter.post("/login", Login);
userRouter.get("/users", Users);
userRouter.get("/user/save", Authenticate, GetItem);
userRouter.get("/user/:id", Authenticate, UserID);
userRouter.put("/:id", Authenticate, Update);
userRouter.delete("/:id", Authenticate, Deletes);
export default userRouter;
