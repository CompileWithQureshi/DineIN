import {User} from "../models/User.model.js"
import bcrypt from'bcrypt'

const CreateUser=async(req,res)=>{
    const {userName,password,phoneNumber}=req.body

    if (!userName  || !password  ||phoneNumber===0) {
        res.status(400).json(
            {
                message:'Input in empty'
            }
        )
    }

    const number=await User.findOne({phoneNumber})
    if(number){
        return res.status(400).json(
            {
                message:'Number already exits'
            }
        )
    }

   try {
    const hasedPassword=await bcrypt.hash(password,10)
    // console.log(hasedPassword);
    
    const newUser=new User({
        userName,
        password:hasedPassword,
        phoneNumber
    })
    const saveUser=await newUser.save()
    if (!newUser) {
        res.status(500).json(
            {
                message:'Server Error'
            }
        )
    }

    res.status(200).json(
        {
            message:'User created',
            data:saveUser
        }
    )
   } catch (error) {
    res.status(500).json({
        message: 'Server error',
        error: error.message
    });
   }
}

const loginUser=async(req,res)=>{
    const {phoneNumber,password}=req.body

    if(!password || phoneNumber === 0){
        return res.status(400).json(
            {
                message:'Input is empty'
            }
        )
    }

    try {
        const userData=await User.findOne({phoneNumber})
if (!userData) {
    return res.status(404).json({
        message:'User Not Found'
    })
}

    const comparePass=await bcrypt.compare(password,userData.password)
    if (!comparePass) {
        return res.status(400).json({
            message:'Incorrect Password'
        })
    }

    res.status(200).json({
        message: 'Login successful',
        data: userData 
    });


    console.log(comparePass);
    } catch (error) {
        res.status(500).json({
            message: 'Server error',
            error: error.message
        });
    }
    
}




export {CreateUser,loginUser}