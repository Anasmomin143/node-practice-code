import express from 'express'
import mobileRouter from './Routes/mobileRouter.js'
import homeRouter from './Routes/homeRouter.js'
const app = express()
let port = 8000

app.use('/mobile', mobileRouter)
app.use('/home', homeRouter)

app.listen(port, () => {
    console.log(`server started at ${port}`)
})