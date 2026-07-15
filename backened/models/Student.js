
const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: [true, "Name is required"],
    },

    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      trim: true,
      lowercase: true,
    },

    age: {
      type: Number,
      required: true,
    },

    city: {
      type: String,
      trim: true,
      required: [true, "City is required"],
    },

    password: {
      type: String,
      required: [true, "Password is required"],
      trim: true,
      minlength: 8,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Student", studentSchema);