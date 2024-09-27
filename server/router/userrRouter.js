import express from "express";

const useRouter = express.Router();

useRouter.post("/register");
useRouter.post("/login");
useRouter.get("/user");
useRouter.get("/user/:id");
useRouter.put("/:id");
useRouter.delete("/:id");
export default useRouter;
