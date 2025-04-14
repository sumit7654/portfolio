import express from "express";
import { adminlogin, adminuser } from "../controller/admincontroller.js";

const router = express.Router();

router.post("/admin-register", adminuser);
router.post("/admin-login", adminlogin);

export default router;
