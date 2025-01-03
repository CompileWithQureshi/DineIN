import React from 'react'
import logo from  '/src/assets/Logo.svg';

import {useForm} from 'react-hook-form'
function SingUp() {

  const {register,handleSubmit,formState:{errors}}=useForm({
    defaultValues: {
      UserName:'',
      PhoneNumber: '',
      password: '',
    },
      
  });
  const phoneNumberRegex = /^[6-9]\d{9}$/; 
  const onSubmit=data=>{
    const formData=JSON.stringify(data)
    console.log(formData.length);

        if (data.PhoneNumber && data.password) {
          localStorage.setItem('UserData',formData)
        }else{
           console.log('inputt field is empty');
          
          
        }
    
  };
 

  
  return (
    <div className='flex items-center justify-center min-h-screen bg-gray-100'
    >
      <div className='flex flex-col items-center border-2 p-8 h-[750px] '
      style={{ backgroundImage: `url(/bottomImage.png),url(/topbkImage.png)`, backgroundSize: `100%,30%`,backgroundRepeat:'no-repeat',backgroundPosition:`bottom,top left   `}}>
          <div className='text-center '>
            <img src={logo} alt="logo"  className='w-24 h-auto mx-auto my-2 '/>
            <img src="./Logotext.png" alt="logo text" className='w-28 mx-auto my-2' />
            <p className='text-center my-1 text-gray-500 font-semibold '>FLAVORS FOR ROYALTY</p>
          </div>
          <div className='mt-10 p-10 flex justify-center h-auto bg-white w-80 border border-3 rounded-lg '>
            <form action="post" className='flex flex-col items-center' onSubmit={handleSubmit(onSubmit)}>
   

    <div className='text-center flex flex-col'>
      <input type='text' className=' border-2 w-56 h-12 p-2 rounded-md my-2' placeholder='Username' {...register('UserName',{required:'Name is requried'})}/>
      <p className='text-red-400 text-start text-sm font-semibold'>{errors.UserName?.message}</p>
      <input type="Number" className=' border-2 w-56 h-12 p-2 rounded-md my-2' placeholder='Phone Number' {...register('PhoneNumber',{ required :'Number is required',pattern:{
        value:phoneNumberRegex,
        message:'Invalid phone number format'
      }, })}/>
      <p className='text-red-400 text-start text-sm font-semibold'>{errors.PhoneNumber?.message}</p>

      <input type="password" className=' border-2 w-56 h-12 p-2 rounded-md my-2' placeholder=' password'
      {...register('password',{required :'password should be  5 digits ',minLength:5})}/>
      <p className='text-red-400 text-start text-sm font-semibold'>{errors.password?.message}</p> 
      <button className='w-56 bg-red-500 h-12 rounded-md font-bold text-white mt-1' type='submit'>Login</button>
    </div>
    
                </form>
              </div>
             

          
        </div>
    </div>
  )
}

export default SingUp