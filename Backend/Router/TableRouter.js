
import { Router } from "express";


import { CreateTable, getAllTables,UpdateTable } from "../Controller/TablesController.js";



const tableroute=Router()

tableroute.post('/create',CreateTable)
tableroute.get('/getAll',getAllTables)
tableroute.put('/updateTable',UpdateTable)







export default tableroute