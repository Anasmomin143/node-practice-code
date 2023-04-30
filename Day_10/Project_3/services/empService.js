import empModel from "../Models/empModel.js";

const validateUser=async(name,pass)=>{
    try {
     const data  = await empModel.find({name:name,password:pass})
     if (data) {
        return 'success'
     } else {
        return 'failed'
     }
    } catch (error) {
        console.log(error)
    }
}

export {validateUser}