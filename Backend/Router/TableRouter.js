
import { Router } from "express";


import { CreateTable, getAllTables,UpdateTable } from "../Controller/TablesController.js";
import { authMiddleware, authorizRole } from "../middleware/adminAuth.js";



const tableroute=Router()

tableroute.post('/table',authMiddleware,authorizRole('admin'),CreateTable)
tableroute.get('/tables',authMiddleware,authorizRole('admin'),getAllTables)
tableroute.put('/table',authMiddleware,authorizRole('admin'),UpdateTable)







export default tableroute