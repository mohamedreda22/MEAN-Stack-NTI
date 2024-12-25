const jwt = require("jsonwebtoken");
const secretKey =
  "1X]_J(eI|%+gGI{GF,]-AvkGY*?6qMDTcqkBnR#DIfu;p}g*j=xLzaAI*A`C:";

exports.generateToken = (user) => {
  return jwt.sign(user, secretKey, { expiresIn: "1h" });
};

exports.authMW = (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
      return res
        .status(401)
        .json({ message: "Authentication token is missing" });
    }

    const verified = jwt.verify(token, secretKey);
    req.userData = verified;
    next();
  } catch (error) {
    return res.status(401).json({ message: "Authentication failed" });
  }
};

// Optional middleware for role-based authorization
exports.adminMW = (req, res, next) => {
  if (req.userData?.role === "Admin") {
    next();
  } else {
    return res.status(403).json({ message: "Forbidden: Admins only" });
  }
};
