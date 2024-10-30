import { createSlice } from "@reduxjs/toolkit";
const initialState={
    items: [],
    totalPrice:0,
}
const cartSlice=createSlice({
    name:'cart',
    initialState,
    reducers:{
        addToCart(state, action) {
            const { quantity, ProductId, price } = action.payload;
            const currentTime = new Date();
            currentTime.setMinutes(currentTime.getMinutes() + 20);
            
            // Use the timestamp instead of Date object
            const timeAllotted = currentTime.getTime(); 
        
            const initialId = state.items.find(val => val.ProductId === ProductId);
            if (typeof price !== 'number' || isNaN(price)) {
                console.error('Invalid price:', price); // Log if price is invalid
                return; 
            }
        
            if (initialId) {
                initialId.quantity += quantity;   
            } else {
                // Store the timeAllotted as a timestamp
                state.items.push({ ProductId, quantity, price, timeAllotted }); 
            }
            
            state.totalPrice += price * quantity; 
        },
        IncreaseQuantity(state, action) {
            const IncreId = action.payload;
        
            const data=state.items.find(item=>item.ProductId === IncreId)
            

            if (data) {
                data.quantity+=1
                state.totalPrice+= data.price
                console.log(data.price);
                
            }
            
        },
        DecreaseQuantity(state,action){
          const DesId=action.payload
          const item=state.items.find(res=>res.ProductId === DesId)

          if ( item.quantity>1) {
            item.quantity-=1
            state.totalPrice-=item.price
          }else   {
           state.items= state.items.filter(i=>i.ProductId !==DesId)
           state.totalPrice-=item.price

          }
        }
        
     
        
    }
})


export const {addToCart,IncreaseQuantity,DecreaseQuantity}=cartSlice.actions
export default cartSlice.reducer