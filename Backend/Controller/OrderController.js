import Orders from'../models/Order.model.js'
import {Items} from '../models/Items.model.js'
import { query } from 'express'



const CreateOrder = async (req, res) => {
    const { user, product, tableNumber } = req.body;

    if (!product || product.length === 0) {
        return res.status(400).json({ message: 'Product list is empty' });
    }

    try {
        // Validate table
        const table = await Tables.findById(tableNumber);
        if (!table) {
            return res.status(404).json({ message: `Table with ID ${tableNumber} not found` });
        }

        let totalPrice = 0;
        for (const data of product) {
            const { item, quantity } = data;
            const Product = await Items.findById(item);
            if (!Product) {
                return res.status(404).json({ message: `Product with ID ${item} not found` });
            }
            totalPrice += Product.itemPrice * quantity;
        }

        const newOrder = new Orders({
            user,
            product,
            totalPrice,
            tableNumber,
        });

        const saveOrder = await newOrder.save();
        res.status(200).json({
            message: 'Order created successfully',
            data: saveOrder,
        });
    } catch (error) {
        res.status(500).json({ message: `Error: ${error.message}` });
    }
};


const GetAllOrders = async (req, res) => {
    const { id } = req.query;
    const query = id ? { _id: id } : {};

    try {
        const getData = await Orders.find(query)
            .populate('product.item')
            .populate('user')
            .populate('tableNumber'); // Populate table details

        if (!getData || getData.length === 0) {
            return res.status(404).json({ message: 'Order not found' });
        }

        res.status(200).json({
            message: 'Success',
            data: getData,
        });
    } catch (error) {
        res.status(500).json({ message: `Error: ${error.message}` });
    }
};





export {CreateOrder,GetAllOrders}