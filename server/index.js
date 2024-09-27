import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
// import cookieParser from "cookie-parser";
dotenv.config();

const app = express();

app.listen("3000", () => console.log("server runing at http://localhost:3000"));
