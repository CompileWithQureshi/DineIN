// import 'dotenv/config';
import express from 'express';
import connectDB from './db/DB.js'; // Adjust the path to DB.js
import tableroute from './Router/TableRouter.js';
import dotenv from 'dotenv';
import Category from './Router/CategoriesRouter.js';
import itemRoute from './Router/ItemsRouter.js';
import OrderRoute from './Router/OrdersRouter.js';
dotenv.config();


const app = express();
const api = process.env.API_URL;
app.use(express.urlencoded({ extended: true }));

app.use(express.json());
app.use(api,tableroute,Category,itemRoute,OrderRoute)

// Uncomment to use this endpoint
// app.get('/', (req, res) => {
//     res.send(api);
// });

app.listen(3000, () => {
    connectDB(); // Connect to MongoDB
    console.log('Server is running on http://localhost:3000');
});
