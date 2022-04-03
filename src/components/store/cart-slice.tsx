import { createSlice } from "@reduxjs/toolkit"


type TItem = {
    id: string,
    price: number,
    quantity: number,
    totalPrice: number,
    name: string,
}

type TCartState = {
    items: TItem[],
    totalQuantity: number,
    totalAmount: number
}

const cartInitialState: TCartState = {
    items: [],
    totalQuantity: 0,
    totalAmount: 0
}
const cartSlice = createSlice({
    name: 'cart',
    initialState: cartInitialState,
    reducers: {
        addItemToCart: (state, action) => {
            const newItem = action.payload;
            const existingItem = state.items.find(item => item.id === newItem.id);
            state.totalQuantity++;
            if(!existingItem){
                state.items.push({
                    id: newItem.id, 
                    price: newItem.price, 
                    quantity: 1, 
                    totalPrice: newItem.price,
                    name: newItem.tittle
                 })
            } else {
                existingItem.quantity++;
                existingItem.totalPrice = existingItem.totalPrice + newItem.price
            }
        },
        removeItemFromCart: (state, action) => {
            const id = action.payload;
            const existingItem = state.items.find(item => item.id === id);
            state.totalQuantity--;
            if(existingItem?.quantity === 1){
                state.items = state.items.filter(item => item.id !== id);
            } else {
                existingItem?.quantity && existingItem.quantity--;
            }
        }
    }
})

export const cartActions = cartSlice.actions;

export default cartSlice