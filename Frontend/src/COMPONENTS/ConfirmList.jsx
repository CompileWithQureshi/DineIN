import React, { useEffect, useState } from 'react'

function ConfirmList({item,onDecrease}) {
  const [timer,setTimer]=useState('')
  
  useEffect(() => {
    // Use the allotted time for this specific item
    const allottedTime = new Date(item.timeAllotted); // Get the stored time
    const formattedHours = allottedTime.getHours().toString().padStart(2, '0');
    const formattedMinutes = allottedTime.getMinutes().toString().padStart(2, '0');

    // Update timer as a formatted string
    setTimer(`${formattedHours}:${formattedMinutes}`);
}, [item.timeAllotted])

  
  
  return (
    <div className='w-80 h-auto shadow-lg shadow-gray-400 p-2 rounded-lg border flex m-5 gap-6 items-center relative' key={item.ProductId}>
    <span className='absolute top-[-16px] left-0 w-6 h-6 flex justify-center items-center p-2 text-xs  rounded-full bg-red-500 text-white font'>{item.quantity}</span>

    <img src={item.products.images} alt="images" className='h-20 w-14'/>

    <div className=' '>
      <h2 className='font-bold text-xl'>{item.products.title}</h2>
      <p className='text-base font-medium'>Price: {item.products.price}</p>

      

    </div>
    {
      onDecrease?<button 
      className='bg-red-500 text-white w-6 h-6 rounded-md flex items-center justify-center hover:bg-red-800 transition duration-200 font-bold text-sm' // Adjust text size here
      aria-label="Increase quantity"
      onClick={()=>onDecrease(item.ProductId)}
      >
      -
      </button>:<div className='p-1 rounded-lg bg-green-500 text-white  text-lg font-semibold max-w-[100px] h-auto'>
        {timer}
      </div>
    }

    
  </div>
  )
}

export default ConfirmList