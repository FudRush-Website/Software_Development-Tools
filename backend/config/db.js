import mysql from "mysql2"
import dotenv from "dotenv"

dotenv.config()


export const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "12345",
    database: "fudrush",
})
