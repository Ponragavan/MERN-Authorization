const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "A user name must be provided."],
  },
  email: {
    type: String,
    required: [true, "The email address must be provided."],
    unique: true,
    validate: [validator.isEmail, "Please enter a valid email address."],
  },
  password: {
    type: String,
    required: [true, "The password must be provided."],
    minlength: [6, "The password must be at least 6 characters long."]
  },
});

module.exports = mongoose.model("User", userSchema);