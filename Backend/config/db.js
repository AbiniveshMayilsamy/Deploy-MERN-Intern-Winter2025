const mongoose = require("mongoose");

let dbStatus = { connected: false, message: "MongoDB not running" };
let isConnecting = false;

const connectDB = async () => {
  // Handle serverless: reuse existing connection
  if (mongoose.connection.readyState === 1) {
    dbStatus = { connected: true, message: "MongoDB Connected" };
    return;
  }
  
  if (isConnecting) return;
  
  isConnecting = true;
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 5000,
    });
    dbStatus = { connected: true, message: "MongoDB Connected" };
    console.log("✓ MongoDB Connected Successfully");
  } catch (error) {
    dbStatus = { connected: false, message: "Using Local Storage (MongoDB not available)" };
    console.log("⚠ MongoDB not available - Using Local Storage");
  } finally {
    isConnecting = false;
  }
};

const getDBStatus = () => dbStatus;

module.exports = { connectDB, getDBStatus };
