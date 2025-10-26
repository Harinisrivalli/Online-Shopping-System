import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";
const cartSlice = createSlice({
    name: "cart",
    initialState:{
        items:[],
    },
    reducers:{
        addItem: (state,action) =>{
            const data = state.items.find(item => item.id == action.payload.id);
            if(!data){
                state.items.push(action.payload);
            }
            else{
                alert("Item already in cart");
            }
        },
        removeItem: (state,action) =>{
            state.items = state.items.filter(item => item.id !== action.payload.id);
        },
        clearCart: (state,action) => {
            state.items.length = 0;
        },
        addqty: (state,action) => {
            const data = state.items.find(item => item.id == action.payload.id);
            data.qty = data.qty + 1;
        },
        removeqty: (state,action) => {
            const data = state.items.find(item => item.id == action.payload.id);
            data.qty = data.qty - 1;
        }
    }
});
export const {addItem,removeItem,clearCart,addqty,removeqty} = cartSlice.actions;
export default cartSlice.reducer;