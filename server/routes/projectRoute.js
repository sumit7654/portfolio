import express from "express";
import { ourproject, getallproject } from "../controller/projectcontroller.js";
import upload from "../middleware/uploadMiddleware.js";

const router = express.Router();
router.post("/project", upload.single("preview"), ourproject);
router.get("/project", getallproject);

export default router;
