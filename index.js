require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const authRoutes = require("./routes/auth");
const protectedRoutes = require("./routes/protected");
const authMiddleware = require("./middleware/auth");

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI, {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error(err));

// Default route
app.get("/", (req, res) => res.send("API is running..."));

// Authentication routes
app.use("/api/auth", authRoutes);

// Protected routes with middleware
app.use(
  "/api/protected",
  authMiddleware(["shipper", "admin", "Carrier"]),
  protectedRoutes
);

// Confirm that your server uses the correct secret key
console.log("JWT_SECRET in use:", process.env.JWT_SECRET);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
