import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export const Authenticate = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    res.status(403).json("unauthenticated");
  }
  jwt.verify(token, process.env.Jkeys, (err, user) => {
    if (err) return res.json("invalid token");
    req.user = user;
    next();
  });
};
export const Agent = (req, res, next) => {
  Authenticate(req, res, next, () => {
    if (req.user.role === "seller") {
      next();
    } else res.ststus(403).json("Not Authenticated");
  });
};
