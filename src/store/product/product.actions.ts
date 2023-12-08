import { Product } from '@models'
import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

interface GET_PRODUCT_LIST_RESPONSE {
  products: Product[]
  total: number
  skip: number
  limit: number
}
export interface GET_PRODUCT_LIST {
  page: number
}
export const getProductList = createAsyncThunk(
  'getProductList',
  async ({ page }: GET_PRODUCT_LIST, { rejectWithValue }) => {
    try {
      const limit = 6
      const pageToFetch = page * limit
      const {
        data: { products },
      }: { data: GET_PRODUCT_LIST_RESPONSE } = await axios.get(
        `https://dummyjson.com/products?skip=${pageToFetch}&limit=${limit}`,
      )
      const onEndReached = products.length < limit
      return {
        products,
        onEndReached,
      }
    } catch (error: any) {
      const message = error?.data ?? 'Failed to fetch user info!'
      return rejectWithValue(message)
    }
  },
)
