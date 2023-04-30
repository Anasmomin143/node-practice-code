import express from "express";
import {getAllStudentDoc,createStudentDoc,editStudentDoc,updateStudentDoc,deleteStudentDoc} from "../controller/studentController.js";

let router = express.Router()
router.get('/', getAllStudentDoc)
router.post('/', createStudentDoc)
router.get('/edit/:id', editStudentDoc)
router.post('/update/:id', updateStudentDoc)
router.post('/delete/:id', deleteStudentDoc)


export default router