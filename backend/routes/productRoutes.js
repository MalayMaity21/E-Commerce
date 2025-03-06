const mongoose = require("mongoose");
import {
  getALLProducts,
  singleProductById,
} from "../controllers/productController.js";

const router = express.Router();

router.get("/", getALLProducts);

router.get("/:id", singleProductById);

module.exports = router;
