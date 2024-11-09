
import { Router } from "express";


import { CreateTable, getAllTables,UpdateTable } from "../Controller/TablesController.js";



const tableroute=Router()

tableroute.post('/table',CreateTable)
tableroute.get('/tables',getAllTables)
tableroute.put('/table',UpdateTable)







export default tableroute