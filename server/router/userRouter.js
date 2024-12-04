import express from "express";
import {
  Deletes,
  Update,
  UserID,
  Users,
  UploadImg,
  userProperties,
} from "../controllers/user.js";
import { Authenticate } from "../Auth/auth.js";
import upload from "../middleware/multer.js";

const userRouter = express.Router();

userRouter.get("/users", Users);
userRouter.get("/user/:id", Authenticate, UserID);
userRouter.put("/:id", Authenticate, Update);
userRouter.delete("/:id", Authenticate, Deletes);
userRouter.get("/user/properties/:id", userProperties);
userRouter.post("/user/upload/:id", upload.single("image"), UploadImg);
export default userRouter;
