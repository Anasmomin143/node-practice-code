import DBconnection from "./DB/dbconnection.js";
import express from "express";
import { join } from 'path';

import router from "./routes/webRoute.js";
let DATABASE_URL = process.env.Data_Base_Url || 'mongodb://0.0.0.0:27017';
let DATABASE_NAME = process.env.Data_Base_name || 'college'
let PORT = process.env.port || 4500;
let app = express()
app.use(express.urlencoded({ extends: true }))

app.use('/student', express.static(join(process.cwd(), 'public')))
app.use('/student/edit', express.static(join(process.cwd(), 'public')))

// app.set('views', './views')
app.set('views engine', 'ejs')
DBconnection(DATABASE_URL, DATABASE_NAME)
app.use('/student', router)


app.listen(PORT, () => {
    console.log(`server started at ${PORT}`)
})
