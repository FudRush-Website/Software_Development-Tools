import express from "express";
import { getAllRestaurants } from "../controllers/restaurant.controller.js";
import { protectRoute } from "../middleware/auth.middleware.js";
const router = express.Router();

router.get("/", protectRoute, getAllRestaurants);
router.get("/recommendations", )
router.get("/");
export default router;
