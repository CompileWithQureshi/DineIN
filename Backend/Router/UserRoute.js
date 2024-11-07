import { Router } from "express";
import { CreateUser,loginUser } from "../Controller/UsersController.js";



const UserRoute=Router()


UserRoute.post('/createUser',CreateUser)
UserRoute.post('/login',loginUser)






export default UserRoute