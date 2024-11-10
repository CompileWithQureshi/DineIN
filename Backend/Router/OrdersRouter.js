import { Router } from "express";


import { CreateOrder,GetAllOrders, } from "../Controller/OrderController.js";
import { authMiddleware, authorizRole } from "../middleware/adminAuth.js";



const OrderRoute=Router()



OrderRoute.post('/order',authMiddleware,authorizRole('admin'),CreateOrder)
OrderRoute.get('/orders',authMiddleware,authorizRole('admin'),GetAllOrders)





export default OrderRoute