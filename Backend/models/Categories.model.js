import mongoose  from "mongoose";


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
    timestamps: true,  
}
)



export const Categories=mongoose.model('Categorie',CateogriesSchema) 