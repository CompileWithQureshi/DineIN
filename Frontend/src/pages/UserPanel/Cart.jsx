import React  from 'react'
import { useSelector,useDispatch } from 'react-redux'
import PrData from '../../Data/ProductData';

import CartList from '../../COMPONENTS/CartList'
import {IncreaseQuantity,DecreaseQuantity} from '../../store/cartSlice'
import { useNavigate } from 'react-router-dom'
import ConfirmBtn from '../../COMPONENTS/ConfirmBtn'

function Cart() {
  // const [total,setTotal]=useState(0)
  const navigate=useNavigate()

  const cartData=useSelector(state=>state.carts.items)
  const totalPrice = useSelector(state => state.carts.totalPrice);
    console.log('Total Price:', totalPrice);
  
  // console.log('cartData',cartData);
  const dispatch=useDispatch()
  const filterData=cartData.map(item=>{
    const product=PrData.find(items=>items.id === item.ProductId)
    // console.log('product',product);
    
    return {...item,product}
  }
  ).filter(item=>item.product)


  
  
  function handleIncrease(ProductId){
    
    dispatch(IncreaseQuantity(ProductId))

    
  }

  function handleDecrease(ProductId){
    dispatch(DecreaseQuantity(ProductId))
  }
  
  function handleConfirm() {
    // console.log('Navigating to list page...');
    navigate('/main/list');
}
  
  return (
    <div >
      {
        filterData.map(item=>(
          <CartList item={item} key={item.ProductId} onIncrease={()=>handleIncrease(item.ProductId)}
          onDecrease={()=>handleDecrease(item.ProductId) }
          />
        ))
      }
      <ConfirmBtn onclick={handleConfirm} total={totalPrice}/>
      </div>

  )
}

export default Cart