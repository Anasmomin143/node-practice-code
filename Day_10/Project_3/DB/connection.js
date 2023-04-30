import mongoose from 'mongoose'

let connectDB = async (url, dbName) => {
    try {
        await mongoose.connect(`${url}/${dbName}`)
        console.log('hii')
    } catch (err) {
        console.log(err)
    }

}


export default connectDB