import express from "express";
import { loginUser } from "../controller/user-controller";

const router = express.Router();

// POST /user/login
router.post("/login", loginUser);

export default router;
