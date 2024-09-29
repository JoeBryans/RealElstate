import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import userRouter from "./router/userRouter.js";
import DataBase from "./config/db.js";
// import cookieParser from "cookie-parser";
dotenv.config();
const port = process.env.PORT || 8000;

DataBase();
const app = express();
app.use(cors());
app.use(cookieParser());
app.use(express.json());

app.use("auth", userRouter);
app.listen(port, () =>
  console.log(`server runing at http://localhost:${port}`)
);
