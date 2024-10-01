import express from "express";
import { Create } from "../controllers/estate";

const estateRouter = express.Router();

estateRouter.post("/", Create);
estateRouter.get("/estater");
estateRouter.get("/estater/:id");
estateRouter.put("/:id");
estateRouter.delete("/:id");
export default estateRouter;
