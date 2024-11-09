import { Items } from "../models/Items.model.js";
import { Categories } from "../models/Categories.model.js";


const CreateItems=async(req,res)=>{
    const {itemName,itemImage,itemPrice,CategoriesName,discription}=req.body

    if (!itemName?.trim()|| !itemImage?.trim() ||!itemPrice===undefined||!CategoriesName || !discription?.trim()) {
        return res.status(400).json({
            message:'input field is empty '
        })
    }

    try {
        
        const category  =await Categories.findById(CategoriesName)
        console.log(category );

        if (!category ) {
            return res.status(404).json({
                message:'Category not found '
            })
        }

        const newItem=new Items({
            itemName,
            itemImage,
            itemPrice,
            CategoriesName:category._id,
            discription
        })


        const saveItem=await newItem.save()

        res.status(201).json({
            message:'Item create Success',
            data:saveItem
        })

    } catch (error) {
        res.status(500).json({
            message:`Error :${error}`
        })
    }


}



const UpdateItem=async(req,res)=>{
    const {itemName,itemImage,itemPrice,discription,}=req.body

    if (!itemName && !itemImage && itemPrice===undefined && !discription) {
        return res.status(400).json({
            message:'At least one field must be valid'
        })
    }

    try {

        const updateData={}
        
        if (itemName) updateData.itemName=itemName;
        if (itemImage) updateData.itemImage=itemImage;
        if (itemPrice) updateData.itemPrice=itemPrice;
        if (discription) {
            updateData.discription=discription
        }

        


        const updateItems=await Items.findOneAndUpdate(
            { _id:req.params.id},
            updateData,
            {new:true}
        )

        if (!updateItems) {
            return res.status(404).json({
                message: 'Item not found'
            });
        }

        res.status(200).json({
            message:'Updated Item',
            data:updateItems
        })
        
    } catch (error) {
        res.status(500).json({
            message:`Error :${error}`
        })
    }
}


const GetAllItems=async(req,res)=>{
    const {id}=req.query
    let query={}

    try {
        if (id) {
            query._id=id
        }

        const getAllData=await Items.find(query);

        if (!getAllData || getAllData.length === 0) {
            return res.status(404).json({
                message:'Data not find'
            })
        }

        res.status(200).json({
            message:'Fetched Data Success',
            data:getAllData
        })
        
    } catch (error) {
        res.status(500).json({
            message:`Error :${error.message}`
        })
    }


}

const DeleteOne=async(req,res)=>{

    try {

        const deleteItem=await Items.findByIdAndDelete(
            req.params.id
        )

        if (!deleteItem) {
            return res.status(404).json({
                message:'Data not find'
            })
        }
        res.status(200).json(
            {
                message:'Item deleted successfully',
                data:deleteItem

            }
        )
        
    } catch (error) {
        res.status(500).json({
            message:`Error :${error.message}`
        })
    }
}

export  {CreateItems,UpdateItem,GetAllItems,DeleteOne}