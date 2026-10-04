import express from "express";
import {fish} from "../controllers/fish.js";

const router = express.Router();

router.post("/1fish", fish.insert);
router.get("/2fish", fish.all);
router.post("/1fish", fish.findOne);
export default router;