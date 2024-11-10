import { Router } from "express";

import { CreateCatego,UpdaeCategory,getAllCategory ,DeleteOne} from "../Controller/CategoriesController.js";
import { authMiddleware, authorizRole } from "../middleware/adminAuth.js";




const Category=Router()



Category.post('/category',authMiddleware,authorizRole('admin'),CreateCatego)
Category.put('/category',authMiddleware,authorizRole('admin'),UpdaeCategory)
Category.get('/categorys',authMiddleware,authorizRole('admin'),getAllCategory)
Category.delete('/category',authMiddleware,authorizRole('admin'),DeleteOne)













export default Category