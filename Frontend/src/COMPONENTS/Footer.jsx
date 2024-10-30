import React, { useState } from 'react'
import { GrHomeRounded } from "react-icons/gr";
import { FaClipboardList } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { RxCounterClockwiseClock } from "react-icons/rx";
import { useNavigate } from 'react-router-dom';
function Footer() {
  const[active,setActive]=useState('home')
  function handleClick(iconName){
    setActive(iconName)
    console.log(iconName);
    
  }
  const navigate=useNavigate()
  return (
    <div className='w-96 h-10  border-2 flex justify-between items-center p-2 rounded-lg'>
            <GrHomeRounded onClick={()=>{handleClick('home'), navigate('/main');}} className={active!=='home'?'':'text-[#F54748] '} />
            <FiShoppingCart onClick={()=>{handleClick('cart'),
navigate('/main/cart');
            }} className={active=='cart'?'text-[#F54748]':'bg-white'}/>
            <FaClipboardList onClick={()=>{handleClick('list'),
              navigate('/main/list');
            }} className={active=='list'?'text-[#F54748]':'bg-white'}/>
            
            <RxCounterClockwiseClock onClick={()=>{handleClick('clock'),
              navigate('/main/orders');
            }} className={active=='clock'?'text-[#F54748]':'bg-white'}/>


    </div>
  )
}

export default Footer