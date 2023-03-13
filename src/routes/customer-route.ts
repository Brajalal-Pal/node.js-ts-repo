import express from "express";
import { protect } from "../middleware/auth-middleware";

const router = express.Router();

import { getCustomers, createCustomer } from "../controller/customer-controller";

router.get("/", getCustomers);
router.post("/", protect, createCustomer);

export default router;
