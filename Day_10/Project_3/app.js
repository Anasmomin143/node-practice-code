import express from 'express';
import connectDB from './DB/connection.js'
// import dashboardController from './controller/dashboadController.js'
// import { validateUser } from './services/empService.js';
import loginRoute from './routes/loginRoute.js';
import bodyParser from 'body-parser';
const url='mongodb://0.0.0.0:27017'
const dbName='tekiskyDB'
connectDB(url,dbName)
const app = express()
const PORT = 4700

app.set('views', './views')
app.set('views engine', 'ejs')
app.use(bodyParser.urlencoded({ extended: true }));


// app.get('/login',(req, res) => {
//     let user = req.body.username
//     let pass = req.body.userpass
//     console.log(user, pass)
//     if (user == 'anas' && pass == 'anas@123') {
//         res.render('./dashboad.ejs', { name: user })
//     } else {
//         res.render('./failedlogin.ejs')
//     }


//     // res.send('hello')
// })
app.use('/Tekisky', loginRoute)


app.listen(PORT, () => {
    console.log(`server started at ${PORT}`)
})