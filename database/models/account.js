const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AccountSchema = new Schema(
  {
    email: { type: String, required: true, unique: true },
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
  },
  {
    collection: "Accounts",
  }
);

// Create the model
const AccountModel = mongoose.model("Accounts", AccountSchema);

// Export the model
module.exports = AccountModel;
