import React, { useEffect, useState } from 'react';
import Burger from '/burger.png'
import Pizza from '/pizza.png'
import cheezCake from '/cheezCake.png'
import drink from '/drink.png'
import PrData from '../../Data/ProductData';

import { useSelector,useDispatch } from 'react-redux';
import NavList from '../../COMPONENTS/NavList';
import ItemList from '../../COMPONENTS/ItemList';
import {addToCart} from '../../store/cartSlice'
import '../../App.css'

function Main() {
const[select,setSelect]=useState('')
const[Items,setItems]=useState([])
const carts=useSelector((state)=> state.carts.items)

const dispatch=useDispatch()

// console.log('carts',carts);
    
    const Products=[
        {
            id:1,
            item:Burger,
            itemText:'Burger',
            category: 'Burger'
            
        },
        {
            id:2,
            item:Pizza,
            itemText:'Pizza',
            category: 'Pizza'
            
        },
        {
            id:3,
            item:cheezCake,
            itemText:'cheezCake',
            category: 'cheesecake'
        },
        {
            id:4,
            item:drink,
            itemText:'drink',
            category: 'drink'
        }
    ]
  
    const suffleData=[...PrData].sort(()=>Math.random()- 0.5)
    const filtedData=select?
    suffleData.filter((item)=>item.category.toLowerCase()===select.toLowerCase()):suffleData;
    console.log(select);
    
    useEffect(()=>{
        // 
        console.log('Updated items:', Items);
        return () => {
            console.log('Cleaning up useEffect.');
        };
        
    },[Items])
    function handleAddToCart(price, images, title, category,id){
        setItems((prev) => [...prev, { price, images, title, category,id }])
        console.log(price);
        

        dispatch(addToCart({
            ProductId:id,
            quantity:1,
            price
        }))
        
    }
  return (
    
    <div className='w-96'>
        <p className='text-xl font-semibold mb-5'>Menu</p>
            
        <div className='flex justify-between items-center ' key={Products.id}>
            {
                Products.map((product)=>(
                    <NavList product={product}  key={product.id}
                    onClick={()=>setSelect(product.category)}/>
                ))
            }
            </div>

            
        
        <div className='w-96 my-5  h-[450px] flex flex-col gap-y-4   p-2 overflow-auto custom-scroll'>
            {
               filtedData.map((item)=>(

                <ItemList key={item.id} item={item} 
                onClick={() => handleAddToCart(item.price, item.images, item.title, item.category,item.id)}
                />
               ))
            }
        </div>
    
    </div>
    
  );
}

export default Main;
