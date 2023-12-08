import { combineReducers } from '@reduxjs/toolkit'
import { productReducers } from '../product/product.slice'
import { cartReducers } from '../cart/cart.slice'

export const rootReducer = combineReducers({
  product: productReducers,
  cart: cartReducers,
})
