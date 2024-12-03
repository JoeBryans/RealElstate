import express from "express";
import {
  Create,
  CreateImg,
  DeleteItem,
  GetItem,
  GetItems,
  GetuserListings,
  MyListings,
  Search,
  UpdateItem,
} from "../controllers/estate.js";
import { Agent, Authenticate } from "../Auth/auth.js";
import upload from "../middleware/multer.js";

const estateRouter = express.Router();
// Agent,Authenticate
estateRouter.post("/", Agent, upload.array("image"), Create);
estateRouter.get("/isAgent", Agent, (req, res, next) => {
  res.json("You are an Agent");
});
estateRouter.post("/upload", upload.array("image"), CreateImg);
estateRouter.get("/estate", GetItems);
estateRouter.get("/agent/", Authenticate, Agent, MyListings);
estateRouter.get("/agent/properties/:id", GetuserListings);
estateRouter.get("/estate/:id", GetItem);
estateRouter.get("/", Search);
estateRouter.put("/:id", UpdateItem);
estateRouter.delete("/:id", DeleteItem);
export default estateRouter;
