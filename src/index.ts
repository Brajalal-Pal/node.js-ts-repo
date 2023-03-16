import express, { Request, Response, NextFunction } from "express";

import customerRouter from "./routes/customer-route";
import userRouter from "./routes/user-route";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.use("*", (req, res, next) => {
//   if (req.userinfo) {
//     // valid
//     next();
//   }
// });

app.use("/customers", customerRouter);
app.use("/users", userRouter);

app.use("*", (req, res) => {
  res.status(404).send("Not found");
});

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err) {
    console.log(":=>", err.message);
  } else {
    // do something
  }
});

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
