import express from 'express'
const app = express()
let PORT = 4500

// app.get('/student/:id([1-9]{1})', (req, res) => {
//     res.send(req.params.id)

//     // if (req.params.id == 1) {
//     //     res.send('one')
//     // } else if (req.params.id == 2) {
//     //     res.send('two')
//     // } else if (req.params.id == 3) {
//     //     res.send('three')
//     // } else if (req.params.id == 4) {
//     //     res.send('four')
//     // } else if (req.params.id == 5) {
//     //     res.send('five')
//     // } else {
//     //     res.send('invalid id')
//     // }
// })
// app.get('/student/:fname/and/:lname',(req,res)=>{
//     res.send(` name is ${req.params.fname} ${req.params.lname}`)
//     // res.send(`last name is ${req.params.lname}`)
// })

app.get('/train/:from-:to',(req,res)=>{
res.send(`${req.params.from} to ${req.params.to}`)
})
app.listen(PORT, () => {
    console.log("sever started")
})