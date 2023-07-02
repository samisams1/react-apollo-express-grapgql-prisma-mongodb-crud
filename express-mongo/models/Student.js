const mongoose = require("mongoose");
const { StringDecoder } = require("string_decoder");

const Student = mongoose.model("Student", {
  firstName: String,
  lastName: String,
  age: Number,
});

module.exports = { Student };

