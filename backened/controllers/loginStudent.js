const Student = require("../models/Student");
const bcrypt = require("bcryptjs");

const loginStudent = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Validation
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Email and password are required",
      });
    }

    if (!email.includes("@")) {
      return res.status(400).json({
        success: false,
        message: "Please enter a valid email",
      });
    }

    // Check if student exists
    const student = await Student.findOne({ email });

    if (!student) {
      return res.status(404).json({
        success: false,
        message: "Student not found",
      });
    }

    // Compare password
    const isPasswordMatch = await bcrypt.compare(
      password,
      student.password
    );

    if (!isPasswordMatch) {
      return res.status(401).json({
        success: false,
        message: "Invalid password",
      });
    }

    // Login success
     return res.status(200).json({
      success: true,
      message: "Login successfully",
      student: {
        id: student._id,
        name: student.name,
        email: student.email,
      },
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server error",
      error: error.message,
    });
  }
};

module.exports = loginStudent;