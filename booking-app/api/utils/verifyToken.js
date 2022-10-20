import jwt from "jsonwebtoken";
import { createError } from "./error.js";

export const verifyToken = (req, res, next) => {
    const token = req.cookies.token;
    if (!token) {
      return next(createError(401, "You are not authenticated!"));
    }
    jwt.verify(token, process.env.JWT_KEY, (err, user) => {
      if (err) return next(createError(403, "Token is not valid!"));
      req.user = user;
      next();
    });
  };
  export const verifyUser = (req, res, next) => {
    verifyToken(req, res, () => {
        if (req.params.id === req.user.id || req.user.Role == "Admin" ||  req.user.Role == "Staff") {
          next();
        } else {
          return next(createError(403, "You are not authorized!"));
        }
    });
  }
  export const verifyStaff = (req, res, next) => {
    verifyToken(req, res, () => {
      if (req.user.Role === "Staff") {
        next();
      } else {
        return next(createError(403, "You are not authorized!"));
      }
    });
  };
  export const verifyAdmin = (req, res, next) => {
    verifyToken(req, res, () => {
      if (req.user.Role === "Admin") {
        next();
      } else {
        return next(createError(403, "You are not authorized!"));
      }
    });
  };
