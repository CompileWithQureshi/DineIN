import { Router } from "express";


import { CreateOrder,GetAllOrders,getOrderId } from "../Controller/OrderController.js";



const OrderRoute=Router()



OrderRoute.post('/createOrder',CreateOrder)
OrderRoute.get('/getAllOrders',GetAllOrders)
OrderRoute.get('/Orders/:id',getOrderId)





export default OrderRoute