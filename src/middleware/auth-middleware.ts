import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";

export const protect = (req: Request, res: Response, next: NextFunction) => {
  let token;
  // if token is valid
  const authString = req.headers.authorization;
  token = authString?.split(" ")[1];
  const docoded = jwt.verify(token as any, "LKJLASFJleklsa142554aljfslaLLSH");

  if (docoded) {
    // console.log(docoded);
    // req.userinfo = docoded;
    next();
  }
};
