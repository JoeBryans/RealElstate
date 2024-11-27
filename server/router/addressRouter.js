import express from "express";
import {
  Create,
  DeleteItem,
  GetItem,
  GetItems,
  UpdateItem,
} from "../controllers/address.js";
import { Agent, Authenticate } from "../Auth/auth.js";

const addressRouter = express.Router();

addressRouter.post("/", Authenticate, Create);
addressRouter.get("/", GetItems);
addressRouter.get("/:id", GetItem);
addressRouter.put("/:id", UpdateItem);
addressRouter.delete("/:id", DeleteItem);
export default addressRouter;
