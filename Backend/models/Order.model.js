import mongoose from "mongoose";
import { Tables } from "./Table.model";


const OrderSchema = mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
        },
        product: [
            {
                item: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: 'Items',
                    required: true,
                },
                quantity: {
                    type: Number,
                    required: true,
                },
            },
        ],
        totalPrice: {
            type: Number,
            required: true,
        },
        tableNumber: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Tables',
            required: true,
        },
        createdAt: {
            type: Date,
            default: Date.now,
        },
    },
    {
        timestamps: true,
    }
);
export default mongoose.model('Order', OrderSchema);
