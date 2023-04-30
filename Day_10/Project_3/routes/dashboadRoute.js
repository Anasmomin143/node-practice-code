import  express  from "express";
import dashboardController from "../controller/dashboadController.js";

let dashboardRoute=express.Router()

dashboardRoute.get('/dashboad',dashboardController)