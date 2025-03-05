import express from "express";
import { getALLProducts, singleProductById } from "../controllers/productController.js";

const router = express.Router();

router.get("/", getALLProducts);

router.get("/:id", singleProductById);

export default router;