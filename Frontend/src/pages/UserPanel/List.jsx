import React, { useMemo } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import PrData from '../../Data/ProductData';

import ConfirmBtn from '../../COMPONENTS/ConfirmBtn';
import { useNavigate } from 'react-router-dom';
import { DecreaseQuantity } from '../../store/cartSlice';
import ConfirmList from '../../COMPONENTS/ConfirmList';

function List() {
  const data=useSelector(state=>state.carts.items)
  const totalPrice=useSelector(state=>state.carts.totalPrice)
  const dispatch=useDispatch()
  // console.log('data',data);
  const navigate=useNavigate()

  const findcart = useMemo(() => {
    return data.map(item => {
        const products = PrData.find(product => product.id === item.ProductId);
        return { ...item, products };
    }).filter(cart => cart.products);
}, [data]);

  // console.log('findcart',findcart);
  
  function handleConfirm() {
    // console.log('Navigating to orders page...');

    navigate('/main/orders')
  }
  function onDecrease(ProductId){
    dispatch(DecreaseQuantity(ProductId))
  }
  console.log(findcart);
  
  return (
    <div >
      {
        findcart.map(item=>(
         <ConfirmList item={item} key={item.ProductId} onDecrease={()=>onDecrease(item.ProductId)}/>
        ))
      }
      <ConfirmBtn onclick={handleConfirm} total={totalPrice}/>
    </div>
  )
}

export default List