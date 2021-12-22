// Using Node.js `require()`
const mongoose = require("mongoose");

const testConnection = async (req, res, next) => {
  try {
    await mongoose.connect("mongodb://localhost/Smartdev");
    console.log("Connected to mongDB");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

module.exports = { testConnection };
