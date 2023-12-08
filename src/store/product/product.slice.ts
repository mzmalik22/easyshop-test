import { createSlice } from '@reduxjs/toolkit'
import { buildSubStateSelector } from '../config/subSelector'
import { ProductState } from '@models'
import extraReducers from './product.reducers'

const initialState: ProductState = {
  isLoading: false,
  errorMessage: '',
  products: [],
  onEndReached: false,
}

export type ProductAppState = typeof initialState

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    markFavorite: (state, { payload }) => {
      const productIndex = state.products.findIndex(
        product => product.id === payload,
      )
      if (productIndex !== -1) {
        state.products[productIndex].favorite =
          !state.products[productIndex].favorite
      }
    },
  },
  extraReducers,
})

export const { markFavorite } = productSlice.actions
export const useProductSelector = buildSubStateSelector<ProductAppState>(
  state => state.product,
)

export * from './product.actions'

export const productActions = productSlice.actions
export const productReducers = productSlice.reducer
