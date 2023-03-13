import { Request, Response } from "express";

const customers: any = [];

export const getCustomers = (req: Request, res: Response) => {
  res.json(customers);
};

export const createCustomer = (req: Request, res: Response) => {
  // process data
  try {
    const { name, address, contact } = req.body;
    const data = { name, address, contact };
    customers.push(data);

    // successfull
    res.status(201).json(data);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};
