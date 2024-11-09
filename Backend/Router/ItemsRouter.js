import { Router } from "express";
import { CreateItems, UpdateItem,GetAllItems,DeleteOne} from "../Controller/ItemsController.js";




const itemRoute=Router()



itemRoute.post('/item',CreateItems)
itemRoute.put('/item/:id',UpdateItem)
itemRoute.get('/items',GetAllItems)
itemRoute.delete('/item/:id',DeleteOne)




export default itemRoute