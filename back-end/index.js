import express from "express";
import cors from "cors";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import mysql from "mysql2";

const app = express();
const port = 5000;

app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "12345",
  database: "user",
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
