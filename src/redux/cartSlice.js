import { createSlice } from "@reduxjs/toolkit";
import toast, { Toaster } from 'react-hot-toast';

const cartSlice = createSlice({
    name:'cart',
    initialState:{
        items:[],
        totalPrice:0,
    },
    reducers:{
        addToCart:(state,action)=>{
            const existingItem = state.items.find(item=>item.id === action.payload.id)
            if(existingItem)
            {
                // existingItem.quantity +=1
                // state.totalPrice += existingItem.price
                toast.success("Already in cart")
            }
            else{
                toast.success("Add To Cart Successfully")
                state.items.push({...action.payload})
                state.totalPrice += action.payload.price
            }
        },
        // incQty:(state,action)=>{
        //     const existingItem = state.items.find((item)=>item.id === action.payload)
        //     if(existingItem)
        //     {
        //         existingItem.quantity+=1
        //         state.totalPrice+=existingItem.price
        //     }
        // },
        removeFromCart : (state,action) =>{
            toast.success("Remove Item Successfully")
            state.items = state.items.filter(item => item.id !== action.payload.id)

        },
        clearCart:(state)=>{
            toast.success("Cart is clear ")
            state.items = []
        }
    }
})
export const selectedCartItemPrice = (state) => state.totalPrice
export const {addToCart,removeFromCart,clearCart} = cartSlice.actions
export default cartSlice.reducer;