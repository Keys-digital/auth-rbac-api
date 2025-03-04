const jwt = require("jsonwebtoken");
const User = require("../models/Users");

module.exports = (roles = []) => {
  return (req, res, next) => {
    let token = req.header("Authorization");
    console.log("🔍 Received Token:", token);

    if (!token || !token.startsWith("Bearer ")) {
      return res.status(400).json({ msg: "Invalid token format" });
    }

    token = token.split(" ")[1];

    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      console.log("🔐 Decoded Token:", decoded);

      // Log expected vs. actual role
      console.log("🔎 Allowed Roles:", roles);
      console.log("🛂 User Role:", decoded.role);

      // Convert roles to lowercase for case-insensitive comparison
      const normalizedRoles = roles.map((r) => r.toLowerCase());
      const userRole = decoded.role.toLowerCase();

      if (!normalizedRoles.includes(userRole)) {
        console.error(
          `❌ Access Denied: Expected one of ${normalizedRoles}, but got '${userRole}'`
        );
        return res.status(403).json({ msg: "Access denied" });
      }

      req.user = decoded;
      next();
    } catch (err) {
      console.error("❌ JWT Verification Error:", err.message);
      res.status(401).json({ msg: "Invalid token" });
    }
  };
};
