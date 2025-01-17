import express from 'express';
import cors from 'cors';
import jwt from "jsonwebtoken"
import bcrypt from "bcryptjs"
import mysql from "mysql2"

const app = express()

app.use(express.json())
app.use(cors())

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "12345",
    database: "user"
})
