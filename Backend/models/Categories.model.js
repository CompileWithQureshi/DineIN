import mongoose ,  { model } from "mongoose";


const CateogriesSchema=mongoose.Schema({
    CategoriesName:{
        type: String,
        required:true,
    },
    Icon:{
        type: String,
        required:true,
    },
   
},
{
    Timestamp:true
}
)



export const Categories=mongoose.model('Categorie',CateogriesSchema) 