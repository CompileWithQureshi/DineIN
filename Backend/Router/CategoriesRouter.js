import { Router } from "express";

import { CreateCatego,UpdaeCategory,getAllCategory ,DeleteOne} from "../Controller/CategoriesController.js";




const Category=Router()



Category.post('/CreateCategory',CreateCatego)
Category.put('/UpdateCategory/:id',UpdaeCategory)
Category.get('/getAllCategory/',getAllCategory,DeleteOne)
Category.delete('/DeleteOne/:id',DeleteOne)













export default Category