import express from 'express'
import { studentsName, studentsAge, studentsAddress } from '../Controller/studentController.js'
let studentRouter=express.Router()

studentRouter.get('/name',studentsName)
studentRouter.post('/age',studentsAge)
studentRouter.get('/age',studentsAddress)

export default studentRouter;