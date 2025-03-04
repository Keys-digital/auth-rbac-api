const express = require("express");
const auth = require("../middleware/auth");
const router = express.Router();

// Only Admins can access
router.get("/admin", auth(["Admin"]), (req, res) =>
  res.json({ msg: "Welcome Admin!" })
);

// Only Shippers can access
router.get("/shipper", auth(["Shipper"]), (req, res) =>
  res.json({ msg: "Welcome Shipper!" })
);

// Only Carriers can access
router.get("/carrier", auth(["Carrier"]), (req, res) =>
  res.json({ msg: "Welcome Carrier!" })
);

module.exports = router;
