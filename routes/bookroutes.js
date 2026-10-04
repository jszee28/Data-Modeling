import express from "express";
import {book} from "../controllers/book.js";

const router = express.Router();

router.post("/1book", book.insert);
router.get("/2book", book.all);
router.get("/1book/:id", book.findOne);
export default router;