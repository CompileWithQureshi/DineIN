import { Router } from "express";


import { CreateOrder,GetAllOrders, } from "../Controller/OrderController.js";



const OrderRoute=Router()



OrderRoute.post('/order',CreateOrder)
OrderRoute.get('/orders',GetAllOrders)





export default OrderRoute