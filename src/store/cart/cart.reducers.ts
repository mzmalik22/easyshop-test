// template for card reducer

import { ProductState } from '@models'
import { fulfilled, pending, rejected } from '../utils'

const GET_CART_ITEMS_LIST = [
  // { action: getUserInfo.pending, callback: pending },
  // { action: getUserInfo.rejected, callback: rejected },
  // {
  //   action: getUserInfo.fulfilled,
  //   callback: (state: ProductState, action: { payload: any }) => {
  //     // alter state
  //     const { user } = action.payload
  //     fulfilled(state, action)
  //   },
  // },
]

const extraReducers = ({ addCase }) => {
  const addToReducers = (arr: { action: any; callback: any }[]) => {
    arr.forEach(({ action, callback }) => addCase(action, callback))
  }
}

export default extraReducers
