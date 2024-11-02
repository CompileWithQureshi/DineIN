import mongoose, { model } from "mongoose";


const TableSchema=mongoose.Schema({

        userName:{
            type: String,
            required:false
        },
        tableNumber:{
            type: String,
            required:true
        },
        status:{
            type: Boolean,
            required:true
        },
        
        qrCodeData:{
            type: String,
        },
        

},
{
    timestamps: true,        
}

)


export const Tables=mongoose.model('Tables',TableSchema)