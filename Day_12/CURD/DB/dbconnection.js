import mongoose from "mongoose"
mongoose.set('strictQuery', true);
let DBconnection = async (DATABASE_URL, DATABASE_NAME) => {
    try {
        await mongoose.connect(`${DATABASE_URL}/${DATABASE_NAME}`).then(()=>{
            console.log('db connection')
        })
        
    } catch (error) {
        console.log(error)
    }
}

export default DBconnection