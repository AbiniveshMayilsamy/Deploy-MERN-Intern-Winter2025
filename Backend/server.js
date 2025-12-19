const express = require("express");
const cors = require("cors");
const path = require("path");
require("dotenv").config();

const { connectDB, getDBStatus } = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const quizRoutes = require("./routes/quizRoutes");

const app = express();

// CORS configuration
app.use(cors({
  origin: true,
  credentials: true
}));
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/quiz", quizRoutes);

app.get("/", (req, res) => {
  res.json({ message: "Quiz Portal API Server" });
});

app.get("/api/status", (req, res) => {
  res.json({
    backend: { connected: true, message: "Backend Running" },
    database: getDBStatus(),
    environment: process.env.NODE_ENV || "development"
  });
});

// Serve static files in production
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../Frontend/build")));
  
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../Frontend/build/index.html"));
  });
}

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  await connectDB();
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
};

startServer();

// Export for Vercel serverless
module.exports = app;
