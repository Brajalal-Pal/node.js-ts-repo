import { Request, Response } from "express";
import jwt from "jsonwebtoken";

export const loginUser = (req: Request, res: Response) => {
  const { userid, password, email } = req.body;

  // code to check if the user info is correct

  const token = jwt.sign({ userid, email }, "LKJLASFJleklsa142554aljfslaLLSH", { expiresIn: "1d" });

  res.status(200).json({
    token,
  });
};
