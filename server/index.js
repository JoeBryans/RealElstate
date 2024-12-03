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
dotenv.config();
const port = process.env.PORT || 8000;
const __dirname = path.resolve();
const app = express();
app.use(
  cors()
  // {
  //   origin: `http://localhost:5173`,
  //   credentials: true,
  // }
);
app.use(cookieParser());
app.use(express.json());
app.use("/property", estateRouter);
app.use("/blog", blogRouter);
app.use("/address", addressRouter);
app.use("/save", saveRouter);
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
app.use("/auth", userRouter);
app.listen(port, () =>
  console.log(`server runing at http://localhost:${port}`)
);
