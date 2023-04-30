import express from "express";
import { getDetails, updateDetails, postDetails, deleteDetails } from '../controller/homeController.js'
const homeRouter = express.Router();


homeRouter.get('/getDetails', getDetails)
homeRouter.post('/postDetails', postDetails)
homeRouter.put('/updateDetails', updateDetails)
homeRouter.delete('/DeleteDetails', deleteDetails)

export default homeRouter;