import React from 'react'

function NavList({product,onClick}) {
  // console.log(product);
  
  return (
        <div key={product.id} className='text-center' onClick={onClick}>
                    <div  className='bg-white w-18 h-18 border-2 p-2 rounded-lg'>
            <img src={product.item} alt="burger"  className='w-10 h-10'/>
            </div>
            <p className='font-semibold'>{product.itemText}</p>
            </div>
  )
}

export default NavList