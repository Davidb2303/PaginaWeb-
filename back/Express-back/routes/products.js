const express = require("express");
const router = express.Router();
const db = require("../db");
const authMiddleware = require("../middleware/authMiddleware");

// GET /api/productos
router.get("/productos", (req, res) => {
  db.query("SELECT * FROM productos", (err, results) => {
    if (err) return res.status(500).json({ error: "Error al obtener productos" });
    res.json(results);
  });
});

module.exports = router;
