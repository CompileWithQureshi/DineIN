import React from 'react'

function CartList({item,onIncrease,onDecrease,total}) {
  // const {quantity,}
  // console.log('item' ,item.ProductId);
  // console.log('item',item);
  
  
  return (
    <div className='w-80 h-auto shadow-lg shadow-gray-400 p-2 rounded-lg border flex m-5 gap-6 items-center' >
            <img src={item.product.images} alt="images" className='h-20 w-14'/>

            <div className=' '>
              <h2 className='font-bold text-xl'>{item.product.title}</h2>
              <p className='text-base font-medium'>Price: {item.product.price}</p>

              <div className='flex items-center'>
              <button 
        className='bg-red-500 text-white w-6 h-6 rounded-md flex items-center justify-center hover:bg-red-800 transition duration-200 font-bold text-sm' // Adjust text size here
        aria-label="Increase quantity"
        onClick={()=>onDecrease(item.ProductId)}
    >
        -
    </button>
              <span className='p-2'>{item.quantity}</span>
              <button 
        className='bg-green-500 text-white w-6 h-6 rounded-md flex items-center justify-center hover:bg-green-800 transition duration-200 font-bold text-sm' // Adjust text size here
        aria-label="Increase quantity"
        onClick={()=> onIncrease(item.ProductId)}
    >
        +
    </button>
              </div>

            </div>
            
          </div>
          
  )
}

export default CartList