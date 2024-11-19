import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export const Authenticate = (req, res, next) => {
  const token = req.cookies.access_token;
  if (!token) {
    return res.status(403).json("unauthenticated");
  }
  jwt.verify(token, process.env.Jkeys, (err, user) => {
    if (err) return res.json("invalid token");
    req.user = user;
    console.log(req.user);
    next();
  });
};
export const Agent = (req, res, next) => {
  Authenticate(req, res, next, () => {
    if (req.user.role === "agent") {
      next();
    } else return res.ststus(403).json("Not Authenticated");
  });
};
