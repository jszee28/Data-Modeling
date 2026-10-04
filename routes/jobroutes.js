import express from "express";
import {job} from "../controllers/job.js";

const router = express.Router();

router.post("/1job", job.insert);
router.get("/2job", job.all);
router.post("/1job", job.findOne);

export default router;