import express from "express";
import {
  Create,
  DeleteItem,
  GetItem,
  GetItems,
  UpdateItem,
} from "../controllers/blog.js";
import { Agent, Authenticate } from "../Auth/auth.js";

const saveRouter = express.Router();

saveRouter.post("/", Authenticate, Create);
saveRouter.get("/", GetItems);
saveRouter.get("/:id", GetItem);
// saveRouter.put("/:id", Agent, UpdateItem);
saveRouter.delete("/:id", DeleteItem);
export default saveRouter;
