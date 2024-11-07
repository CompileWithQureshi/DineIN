import mongoose from "mongoose";


const ItemsSchema=mongoose.Schema({
    itemName:{
        type:String,
        required:true,
    },
    itemImage:{
        type:String,   
        required:true,
    },
    itemPrice:{
        type:Number,
        required:true,
    },
    CategoriesName:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Categorie',
        required:true
    },
    discription:{
        type:String,
    }

},
{
    timestamps: true
}
)



export const Items=mongoose.model('Items',ItemsSchema)