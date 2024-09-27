import express from "express";

const estateRouter = express.Router();

estateRouter.post("/");
estateRouter.get("/estater");
estateRouter.get("/estater/:id");
estateRouter.put("/:id");
estateRouter.delete("/:id");
export default estateRouter;
