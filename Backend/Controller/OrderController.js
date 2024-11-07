import Orders from'../models/Order.model.js'



const CreateOrder =async(req,res)=>{
    const {item}=req.body


    if (!item) {
        return res.status(400).json({
            message:'Items are empty'
        })
    }

    try {
        
    } catch (error) {
        res.status(500).json({
            message:`Error :${error}`
        })
    }
} 