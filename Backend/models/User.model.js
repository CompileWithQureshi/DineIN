import mongoose from "mongoose";




const UserSchema=mongoose.Schema(
    {
          userName:{
            type:String,
            required:true,
          },
          password:{
            type:String,
            required:true
          },
          phoneNumber:{
            type:String,
            unique: true,
            required:true,
            match: /^[6-9]\d{9}$/,
          },
          
    },
    {
        timestamps:true
    }
)



export const User=mongoose.model('User',UserSchema)