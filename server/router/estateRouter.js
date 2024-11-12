import express from "express";
import {
  Create,
  CreateImg,
  DeleteItem,
  GetItem,
  GetItems,
  Search,
  UpdateItem,
} from "../controllers/estate.js";
import { Agent, Authenticate } from "../Auth/auth.js";
import upload from "../middleware/multer.js";

const estateRouter = express.Router();
// Agent,Authenticate
estateRouter.post("/", upload, Create);
estateRouter.post("/upload", upload, CreateImg);
estateRouter.get("/estate", GetItems);
estateRouter.get("/estate/:id", GetItem);
estateRouter.get("/", Search);
estateRouter.put("/:id", UpdateItem);
estateRouter.delete("/:id", DeleteItem);
export default estateRouter;
