import { Product, ProductState } from '@models'
import { fulfilled, pending, rejected } from '../utils'
import { getProductList } from './product.actions'

// Get Product List
const GET_PRODUCTS_LIST = [
  { action: getProductList.pending, callback: pending },
  { action: getProductList.rejected, callback: rejected },
  {
    action: getProductList.fulfilled,
    callback: (state: ProductState, action: { payload: any }) => {
      // set state
      const { products, onEndReached } = action.payload
      const uniqueProducts = new Set(state.products.map(product => product.id))
      products.forEach((product: Product) => {
        if (!uniqueProducts.has(product.id)) {
          uniqueProducts.add(product.id)
          state.products.push(product)
        }
      })
      state.onEndReached = onEndReached
      fulfilled(state, action)
    },
  },
]

const extraReducers = ({ addCase }) => {
  const addToReducers = (arr: { action: any; callback: any }[]) => {
    arr.forEach(({ action, callback }) => addCase(action, callback))
  }
  addToReducers(GET_PRODUCTS_LIST)
}

export default extraReducers
