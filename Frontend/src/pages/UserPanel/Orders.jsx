import React from 'react'
import PrData from '../../Data/ProductData';

import { useSelector } from 'react-redux'
import ConfirmList from '../../COMPONENTS/ConfirmList'
import ConfirmBtn from '../../COMPONENTS/ConfirmBtn'
import { useNavigate } from 'react-router-dom'

function Orders() {
  const navigate=useNavigate()
  const cartData=useSelector((state)=>state.carts.items)
  const price=useSelector((state)=>state.carts.totalPrice)

  const filterData=cartData.map(item=>{
    const products=PrData.find(items=>items.id===item.ProductId)
    return{...item,products}
  }).filter(data=>data.products)
  console.log(filterData);
  
  console.log(price);
  
  
  function handleConfirm() {
    navigate
  }
  return (
    <div>
      {
        filterData.map(item=>(
          <ConfirmList item={item} key={item.ProductId}/>
        ))
      }
      <ConfirmBtn onClick={handleConfirm} total={price}/>

    </div>
  )
}

export default Orders