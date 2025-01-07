import { createSlice } from "@reduxjs/toolkit";

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
                existingItem.quantity +=1
                state.totalPrice += existingItem.price
            }
            else{
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
            state.items = state.items.filter(item => item.id !== action.payload.id)

        },
        clearCart:(state)=>{
            state.items = []
        }
    }
})
export const selectedCartItemPrice = (state) => state.totalPrice
export const {addToCart,removeFromCart,clearCart} = cartSlice.actions
export default cartSlice.reducer;