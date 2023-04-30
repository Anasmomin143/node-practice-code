import express from "express";
import { getDetails, updateDetails, postDetails, deleteDetails } from '../controller/mobileController.js'

const mobileRouter = express.Router();


mobileRouter.get('/getMobile', getDetails)
mobileRouter.post('/PostMobileDetails', updateDetails)
mobileRouter.put('/UpdateMobileDetails', postDetails)
mobileRouter.delete('/deleteDetails', deleteDetails)

export default mobileRouter;