import express from "express";
import {
  Create,
  DeleteItem,
  GetItem,
  GetItems,
  //   UpdateItem,
} from "../controllers/save.js";
import { Agent, Authenticate } from "../Auth/auth.js";

const saveRouter = express.Router();

saveRouter.post("/", Authenticate, Create);
saveRouter.get("/", Agent, GetItems);
saveRouter.get("/:id", Authenticate, GetItem);
// // saveRouter.put("/:id", Agent, UpdateItem);
saveRouter.delete("/:id", Authenticate, DeleteItem);
export default saveRouter;
