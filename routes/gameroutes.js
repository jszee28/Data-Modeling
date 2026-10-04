import express from "express";
import {game} from "../controllers/game.js";
const router = express.Router();

router.post("/1game", game.insert);
router.get("/2game", game.all);
router.post("/3game", game.findOne);
export default router;