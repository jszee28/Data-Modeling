import express from "express";
import {food} from "../controllers/food.js";

const router = express.Router();

router.post("/1food", food.insert);
router.get("/2food", food.all);
router.post("/1food", food.findOne);

export default router;