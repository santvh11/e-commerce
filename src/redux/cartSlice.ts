import { Product } from '@/utils/types'
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CartItem extends Product {
  quantity: number
}

export interface CartState {
  items: CartItem[];
}

export interface ChangeQuantityPayload {
  id: number;
  newQuantity: number
}

const initialState: CartState = {
  items: []
}

export const cartSlice = createSlice({
  name: 'Cart',
  initialState,
  reducers: {
    addItemToCart: (state, action: PayloadAction<CartItem>) => {
      state.items.push(action.payload)
    },
    deleteCartItem: (state, action: PayloadAction<number>) => {
      const newItems = state.items.filter((item: CartItem) => item.id !== action.payload)
      state.items = newItems
    },
    changeCartItemQuantity: (state, action: PayloadAction<ChangeQuantityPayload>) => {
      let newItems
      if (action.payload.newQuantity === 0) {
        newItems = state.items.filter((item: CartItem) => item.id !== action.payload.id)
      } else {
        newItems = state.items.map((item: CartItem) => {
          if (item.id === action.payload.id) {
            item.quantity = action.payload.newQuantity
          }
          return item
        })
      }
      state.items = newItems
    }
  }
})

// Action creators are generated for each case reducer function
export const { addItemToCart, deleteCartItem, changeCartItemQuantity } = cartSlice.actions

export default cartSlice.reducer
