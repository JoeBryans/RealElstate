import express from "express";
import {
  Create,
  DeleteItem,
  GetItem,
  GetItems,
  Search,
  UpdateItem,
} from "../controllers/estate.js";
import { Agent, Authenticate } from "../Auth/auth.js";

const estateRouter = express.Router();

estateRouter.post("/", Authenticate, Agent, Create);
estateRouter.get("/estate", GetItems);
estateRouter.get("/estate/:id", GetItem);
estateRouter.get("/", Search);
estateRouter.put("/:id", UpdateItem);
estateRouter.delete("/:id", DeleteItem);
export default estateRouter;
