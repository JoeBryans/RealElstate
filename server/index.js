import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import userRouter from "./router/userRouter.js";
import DataBase from "./config/db.js";
import estateRouter from "./router/estateRouter.js";
import blogRouter from "./router/blogRouter.js";
import saveRouter from "./router/saveRouter.js";
// import cookieParser from "cookie-parser";
dotenv.config();
const port = process.env.PORT || 8000;

const app = express();
app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use("/property", estateRouter);
app.use("/blog", blogRouter);
app.use("/save", saveRouter);

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
