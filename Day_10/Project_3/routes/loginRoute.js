import  express  from "express";
import loginControllerGet from '../controller/loginController.js'
let loginRoute=express.Router()

loginRoute.get('/login',loginControllerGet)



export default loginRoute