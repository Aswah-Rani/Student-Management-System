const express=require("express");
const app= express();
const dotenv=require("dotenv");
const connectdb=require("./config/db")
const cors = require("cors");
dotenv.config();
connectdb();
app.use(cors());
app.use(express.json());
const StudentRoutes = require("./routes/StudentRoutes");
app.use("/api/students" , StudentRoutes);
app.get("/",(req,res)=>{
    res.json({
        success: true,
        message: "Backend is running"
    });})
app.use((req,res)=>{
    return res.status(404).json({
        success:false,
        message:"Route not found "
    })
})
const PORT=process.env.PORT || 5000;
app.listen(PORT,()=>{
    console.log(`Server running on http://localhost:${PORT}`);
}
)

