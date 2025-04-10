const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");
const mongoose = require('mongoose');
const authRoutes = require("./routes/auth"); 

require("dotenv").config();

const authRoutes = require("./routes/auth");
const productosRoutes = require("./routes/productos");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api", authRoutes);
app.use("/api", productosRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
