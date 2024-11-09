import { Router } from "express";
import { CreateUser,loginUser } from "../Controller/UsersController.js";



const UserRoute=Router()


UserRoute.post('/user',CreateUser)
UserRoute.post('/user/login',loginUser)






export default UserRoute