import express from "express";
import {
  Create,
  DeleteItem,
  GetItem,
  GetItems,
  UpdateItem,
} from "../controllers/blog.js";
import { Agent, Authenticate } from "../Auth/auth.js";

const blogRouter = express.Router();

blogRouter.post("/", Authenticate, Agent, Create);
blogRouter.get("/", GetItems);
blogRouter.get("/:id", GetItem);
blogRouter.put("/:id", UpdateItem);
blogRouter.delete("/:id", DeleteItem);
export default blogRouter;
