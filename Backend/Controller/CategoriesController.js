// import mongoose from "mongoose";
import { Categories } from "../models/Categories.model.js";



const CreateCatego= async(req,res)=>{
        const {CategoriesName,Icon}=req.body;

        if (!CategoriesName.trim() || !Icon.trim()) {
            return res.status(400).json({
                message:'Input field is empty '
            })
        }


        try {

            const existing=await Categories.findOne({CategoriesName})

            if (existing) {
                return res.status(400).json({
                    message:'Categories already exits'
                })
            }

            const newCategory = new Categories({ CategoriesName, Icon });
            await newCategory.save();
            

            res.status(201).json({
                message: 'Category created successfully',
                data:newCategory
            })
            
        } catch (error) {
            res.status(500).json({
                message:`Error :${error}`
            })
        }
}


const UpdaeCategory=async(req,res)=>{
    const {CategoriesName,Icon}=req.body;

    if(!CategoriesName && !Icon){
        return res.status(400).json({
            message:`Atleast one input is required for Update `
        })
    }

    const UpdateData={}

    if (CategoriesName) UpdateData.CategoriesName=CategoriesName;
    if (Icon)UpdateData.Icon=Icon
    
    try {
        const updateCategory=await Categories.findOneAndUpdate(
            { _id: req.params.id },
            UpdateData,
            { new: true, runValidators: true }
        )


        if (!updateCategory) {
            return res.status(404).json({
                message: 'Category not found'
            });
        }

        res.status(200).json({
            message:'Update Category ',
            updateCategory
        })
    } catch (error) {
        res.status(500).json({
            message:`Error :${error}`
        })
    }
}

const getAllCategory=async(req,res)=>{
   
    try {
        const getAll=await Categories.find()
        console.log(getAll);
        if ( getAll.length === 0) {
            return res.status(404).json({
                message:'No record found'
            })
        }

        res.status(200).json({
            message:'All data',
            data:getAll
        })
    } catch (error) {
        res.status(500).json({
            message:`Error :${error}`
        })
    }

    
}

const DeleteOne=async (req,res) => {
    try {

        const deletedCategory =await Categories.findOneAndDelete(
            {_id:req.params.id}
        )

        if (!deletedCategory ) {
            return res.status(404).json({
                message:'No item deleted '
            })
        }

        res.status(200).json({
            message:'Item Deleted ',
            deletedCategory 
        })
        
    } catch (error) {
        res.status(500).json({
            message:`Error :${error}`
        })
    }
} 



export{CreateCatego,UpdaeCategory,getAllCategory,DeleteOne}