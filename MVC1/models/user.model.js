const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    retypepassword: {
      type: String,
      required: true,
    },
    userType: {
      type: mongoose.Schema.Types.ObjectId, // what type of data we are referencing
      ref: "userType", //name of what we are referencing
      default: "676a9cdbd3eb32316fbc03b6",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("user", userSchema);
