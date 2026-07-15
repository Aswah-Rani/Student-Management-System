const mongoose=require('mongoose');
const Student = require("../models/Student");
//get student
const getStudent = async (req, res) => {
  try {
    const student = await Student.find()
      .select("-password")
      .sort({ createdAt: -1 });
    return res.status(200).json({
      success: true,
      message: "All students fetched",
      totalStudent: student.length,
      student,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error",
      error: error.message,
    });
  }
};
//get single student 
const getsinglestudent = async (req, res) => {
  try {
    const { id } = req.params;
    // Check valid ObjectId
    if (!mongoose.isValidObjectId(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid student id",
      });
    }
    // Find student
    const student = await Student.findById(id).select("-password");
    if (!student) {
      return res.status(404).json({
        success: false,
        message: "Student not found",
      });
    }
    return res.status(200).json({
      success: true,
      message: "Student fetched successfully",
      student,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message,
    });
  }
};
//update 
const updateStudent = async (req, res) => {
  try {
    const { id } = req.params;

    // Check valid ObjectId
    if (!mongoose.isValidObjectId(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid student id",
      });
    }

    const updatedStudent = await Student.findByIdAndUpdate(
      id,
      req.body,
      { new: true }
    ).select("-password");

    if (!updatedStudent) {
      return res.status(404).json({
        success: false,
        message: "Student not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Student updated successfully",
      student: updatedStudent,
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message,
    });
  }
};
//DELEte student
const deleteStudent=async (req , res)=>{
// code here
try {
  const { id } = req.params;
    // Check valid ObjectId
    if (!mongoose.isValidObjectId(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid student id",
      });
    }
    // Find student
    const deletestudent = await Student.findByIdAndDelete(id).select("-password");
    if (!deletestudent) {
      return res.status(404).json({
        success: false,
        message: "Student not found",
      });
    }
    return res.status(200).json({
      success: true,
      message: "Student deleted successfully",
      student:deletestudent,
    });
} catch (error) {
   return res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message,
    });
}
};
module.exports={
  getStudent,getsinglestudent ,updateStudent ,deleteStudent
};