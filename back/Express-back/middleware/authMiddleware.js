const jwt = require("jsonwebtoken");

const SECRET = process.env.JWT_SECRET || "mi_clave_secreta";

function authMiddleware(req, res, next) {
  const authHeader = req.headers.authorization;
  if (!authHeader) return res.status(401).json({ error: "Token requerido" });

  const token = authHeader.split(" ")[1];
  try {
    const decoded = jwt.verify(token, SECRET);
    req.user = decoded;
    next();
  } catch (e) {
    return res.status(403).json({ error: "Token inválido" });
  }
}

module.exports = authMiddleware;
