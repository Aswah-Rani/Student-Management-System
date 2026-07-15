const express= require("express");
const router = express.Router();

const createStudent=require("../controllers/createStudent");
const loginStudent=require("../controllers/loginStudent");
const { getStudent,getsinglestudent ,updateStudent ,deleteStudent} = require ("../controllers/crudController");
router.post("/", createStudent);
router.post("/login", loginStudent);
router.get("/",getStudent);
router.get("/:id",getsinglestudent);
router.delete("/:id",deleteStudent);
router.put("/:id",updateStudent);
module.exports = router;