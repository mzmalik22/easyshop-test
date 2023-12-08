import { createSlice } from '@reduxjs/toolkit'
import { buildSubStateSelector } from '../config/subSelector'
import { Cart, CartState } from '@models'
import extraReducers from './cart.reducers'

const initialState: CartState = {
  isLoading: false,
  errorMessage: '',
  items: [],
}

export type CartAppState = typeof initialState

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, { payload }) => {
      const itemIdToAdd: Cart = payload
      const existingItemIndex = state.items.findIndex(
        (item: Cart) => item.id === itemIdToAdd.id,
      )
      if (existingItemIndex !== -1) {
        const updatedItems = [...state.items]
        updatedItems[existingItemIndex].quantity += 1
        state.items = updatedItems
      } else {
        state.items = [...state.items, { ...itemIdToAdd, quantity: 1 }]
      }
    },
    removeFromCart: (state, { payload }) => {
      const itemIdToRemove: Cart = payload
      const itemIndexToRemove = state.items.findIndex(
        (item: Cart) => item.id === itemIdToRemove.id,
      )

      if (itemIndexToRemove !== -1) {
        const updatedItems = [...state.items]

        if (updatedItems[itemIndexToRemove].quantity > 1) {
          // Decrease quantity if greater than 1
          updatedItems[itemIndexToRemove].quantity -= 1
        } else {
          // Remove the item if quantity is 1
          updatedItems.splice(itemIndexToRemove, 1)
        }
        state.items = updatedItems
      }
    },
  },
  extraReducers,
})
export const { addToCart, removeFromCart } = cartSlice.actions

export const useCartSelector = buildSubStateSelector<CartAppState>(
  state => state.cart,
)

export * from './cart.actions'

export const cartActions = cartSlice.actions
export const cartReducers = cartSlice.reducer
