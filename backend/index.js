import express from "express";
import mysql from "mysql2";
import cors from "cors";
import { db } from "./config/db.js";
import dotenv from "dotenv";

dotenv.config();

import restaurantRoutes from "./routes/restaurant.route.js";
import authRoutes from "./routes/auth.route.js";

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

app.use("/api/restaurants", restaurantRoutes);
app.use("/api/auth", authRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
  db.connect((err) => {
    if (err) {
      console.error("Error connecting to MySQL database:", err.stack);
      return;
    }
    console.log("Connected to MySQL database as ID", db.threadId);
  });
});
