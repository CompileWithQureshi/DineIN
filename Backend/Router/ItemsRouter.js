import { Router } from "express";
import { CreateItems, UpdateItem,GetAllItems,DeleteOne} from "../Controller/ItemsController.js";




const itemRoute=Router()



itemRoute.post('/createItem',CreateItems)
itemRoute.put('/updateItem/:id',UpdateItem)
itemRoute.get('/getAllItems',GetAllItems)
itemRoute.delete('/deleteItem/:id',DeleteOne)






export default itemRoute