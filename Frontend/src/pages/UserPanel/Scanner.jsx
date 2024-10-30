import React from 'react'
import logo from '../../assets/Logo.svg';
import { useNavigate } from 'react-router-dom';


function Scanner() {
  const navigate=useNavigate()
  function handleNaviagte() {
    navigate('/main')
  }
  return (
    <div className='flex justify-center items-center w-screen min-h-screen'
    >

       <div className='border-2 rounded-lg w-[350px] h-[750px] flex items-center flex-col justify-evenly'
       style={{backgroundImage:`url(/topbkImage.png)`,backgroundRepeat:`no-repeat`}}>
        <div className='p-2 flex flex-col items-center gap-y-3'>
            <img src={logo} alt="logo" className='w-20 '/>

            <p className='font-semibold text-gray-400 '>FLAVORS FOR ROYALTY</p>
        </div>
        <div className='text-center flex flex-col h-[300px] items-center justify-start'>
            <div className='w-44 mb-5'>
            <img src="src\assets\scanner.png" alt="Scanner"  />


            </div>
            <div className='flex flex-col items-center justify-between h-full w-40'>
                <button className='bg-[#F54748] text-white font-semibold rounded-md text-center h-8 w-24' onClick={handleNaviagte}>Scan QR</button>
                <p className='text-center w-44 font-semibold text-lg text-gray-500'>
                Scan QR Code Placed 
                in Restaurant
                </p>
            </div>
        </div>

       </div>
    </div>
  )
}

export default Scanner