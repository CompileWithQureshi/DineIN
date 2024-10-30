import React from 'react'

function ConfirmBtn({onclick,total=0}) {
  return (
    <div><button className='w-48 rounded-lg h-10  bg-green-500 text-black font-semibold ml-20  ' onClick={onclick}>Confirm order :{total?<span className='text-white font-mono '> {total}/-</span>:''} </button>
    </div>
  )
}

export default ConfirmBtn