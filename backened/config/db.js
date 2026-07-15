const mongoose=require("mongoose");
const connectdb=async ()=>{
// code here
try {
   await  mongoose.connect(process.env.MONGO_URL);
   console.log("Database connected" );
} catch (error) {
    console.log("Database connection failed ");
    process.exit(1);
}
};
module.exports=connectdb;