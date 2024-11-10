import { Router } from "express";
import { CreateItems, UpdateItem,GetAllItems,DeleteOne} from "../Controller/ItemsController.js";
import { authMiddleware, authorizRole } from "../middleware/adminAuth.js";




const itemRoute=Router()



itemRoute.post('/item',authMiddleware,authorizRole('admin'),CreateItems)
itemRoute.put('/item/:id',authMiddleware,authorizRole('admin'),UpdateItem)
itemRoute.get('/items',authMiddleware,authorizRole('admin'),GetAllItems)
itemRoute.delete('/item/:id',authMiddleware,authorizRole('admin'),DeleteOne)




export default itemRoute