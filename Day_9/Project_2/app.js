import  express  from "express";
import studentRouter from "./Routes/studentRoutes.js";
const app=express()
app.use('/student',studentRouter)

app.listen(4600,()=>{
    console.log('server started')
})