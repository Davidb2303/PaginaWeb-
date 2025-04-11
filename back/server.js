const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");
const mongoose = require('mongoose');
const authRoutes = require("./routes/auth"); 

require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  });


app.use("/api", authRoutes); 

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});