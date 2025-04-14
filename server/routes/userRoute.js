import express from "express";
import { contactUser, getuserdata } from "../controller/usercontroller.js";

const router = express.Router();

router.post("/contact", contactUser);
router.get("/contact", getuserdata);

export default router;
