const Student = require("../models/Student");
const bcrypt = require("bcryptjs");

const createStudent = async (req, res) => {
    
    try {
        const { name, email, age, city , password } = req.body;
        if (!name || !email || !age || !city || !password) {
            return res.status(400).json({
                success: false,
                message: "Form is not filled"
            });
        }
  
        if (!email.includes("@")) {
            return res.status(400).json({
                success: false,
                message: "Invalid email"
            });
        }
 
        const studentExist = await Student.findOne({ email });

        if (studentExist) {
            return res.status(409).json({
                success: false,
                message: "Email already registered"
            });
        }
 
        if (age < 5 || age > 30) {
            return res.status(400).json({
                success: false,
                message: "Invalid age"
            });
        }
          if (password.length < 8){
   return res.status(400).json({
      success: false, 
      message: "password must be at last 8 number"
   }); 
 }
  const hashedPassword = await bcrypt.hash(password , 10); 
        const student = await Student.create({
            name,
            email,
            age,
            city,
             password: hashedPassword
        });

        return res.status(201).json({
            success: true,
            message: "Student created successfully",
            student: {
                id: student.id,
                name: student.name,
                email: student.email,
                age: student.age,
                city: student.city
            }
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Server Error",
            error: error.message
        });
    }
};

module.exports = createStudent;