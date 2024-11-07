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
            type:Number,
            required:true
          }
    },
    {
        timestamps:true
    }
)



export const User=mongoose.model('User',UserSchema)