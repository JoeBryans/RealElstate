import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import userRouter from "./router/userRouter.js";
import DataBase from "./config/db.js";
import estateRouter from "./router/estateRouter.js";
import blogRouter from "./router/blogRouter.js";
import saveRouter from "./router/saveRouter.js";
import addressRouter from "./router/addressRouter.js";
import path from "path";
import authRouter from "./router/authRouter.js";
dotenv.config();
const port = process.env.PORT || 8000;
const __dirname = path.resolve();
const app = express();
app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use("/api/property", estateRouter);
app.use("/api/blog", blogRouter);
app.use("/api/address", addressRouter);
app.use("/api/save", saveRouter);
app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);

app.use(express.static(path.join(__dirname, "/client/dist")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/client/dist/index.html"));
});
app.use((err, req, res, next) => {
  const errStatus = err.status || 500;
  const errMessage = err.message || "error from the server";
  return res.status(errStatus).json({
    success: false,
    status: errStatus,
    message: errMessage,
    stack: err.stack,
  });
});

DataBase();
app.listen(port, () =>
  console.log(`server runing at http://localhost:${port}`)
);
