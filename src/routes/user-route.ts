import express from "express";
import { loginUser, createUser } from "../controller/user-controller";
import { protect } from "../middleware/auth-middleware";

const router = express.Router();

// POST /user/login
router.post("/login", loginUser);
router.post("/", protect, createUser);

export default router;
