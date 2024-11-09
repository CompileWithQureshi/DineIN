import { Router } from "express";

import { CreateCatego,UpdaeCategory,getAllCategory ,DeleteOne} from "../Controller/CategoriesController.js";




const Category=Router()



Category.post('/category',CreateCatego)
Category.put('/category',UpdaeCategory)
Category.get('/category/',getAllCategory)
Category.delete('/category',DeleteOne)













export default Category