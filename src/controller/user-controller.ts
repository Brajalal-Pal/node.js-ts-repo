import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import { User } from "../classes/user";

export const loginUser = (req: Request, res: Response) => {
  const { userid, password, email } = req.body;

  const token = jwt.sign({ userid, email }, "LKJLASFJleklsa142554aljfslaLLSH", { expiresIn: "1d" });

  res.status(200).json({
    token,
  });
};

export const createUser = (req: Request, res: Response) => {
  const { userid, password, email } = req.body;

  const user = new User(userid, email, password);
  user
    .createUser()
    .then((result) => {
      res.status(201).json({
        message: "User created successfully",
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: "Internal server error",
      });
    });
};
