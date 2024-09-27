import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import userRouter from "./router/userRouter.js";
import DataBase from "./config/db.js";
// import cookieParser from "cookie-parser";
dotenv.config();
DataBase();
const app = express();
app.use(cors());
app.use(cookieParser());
app.use(express.json());

app.use("auth", userRouter);
app.listen("3000", () => console.log("server runing at http://localhost:3000"));
