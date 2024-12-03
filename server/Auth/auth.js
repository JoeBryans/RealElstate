import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export const Authenticate = (req, res, next) => {
  const token = req.cookies.access_token;
  console.log(token);
  if (!token) {
    return res.status(403).json("unauthenticated");
  }
  jwt.verify(token, process.env.Jkeys, (err, user) => {
    if (err) {
      return res.json("invalid token");
    } else {
      req.user = user;
      next();
    }
  });
};
export const verifyUser = (req, res, next) => {
  Authenticate(req, res, () => {
    console.log(req.user);
    const agent = req.user.role === "agent";

    if (req.user.id === req.params.id || agent) {
      next();
    } else {
      return res.status(403).json("Not Authenticated");
    }
  });
};
export const Agent = (req, res, next) => {
  Authenticate(req, res, () => {
    console.log(req.user);
    const agent = req.user.role === "agent";

    if (agent) {
      next();
    } else {
      return res.status(403).json("Not Authenticated");
    }
  });
};
