const express = require('express')
const app = express()


// app.get('/home', (req, res) => {
//     console.log(req)
//     res.send('home')

// })

// app.get('/ContactUs/1', (req, res) => {
//     res.send('Contact Us')

// })
// app.get('/Profile', (req, res) => {
//     res.send('Profile')

// })

app.get('/inviteCode',(req,res)=>{
res.json({"code":123})
})
app.listen(7000, () => {
    console.log('server started')
})
