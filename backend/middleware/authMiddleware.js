const jwt = require('jsonwebtoken');
const User = require('../models/User');

module.exports = async (req, res, next) => {
  const authHeader = req.header("Authorization");

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res
      .status(401)
      .send({ error: "Authentication token is missing or invalid." });
  }

  const token = authHeader.replace("Bearer ", "");

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.id);

    if (!user) {
      return res
        .status(401)
        .send({ error: "User not found. Please authenticate." });
    }

    req.user = user;
    next();
  } catch (e) {
    console.error("Authentication error:", e);
    res.status(401).send({ error: "Please authenticate." });
  }
};