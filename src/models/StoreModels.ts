import { Product } from './Product'
import { Cart } from './Cart'

export interface RootState {
  product: ProductState
  cart: CartState
}
export interface ProductState {
  isLoading: boolean
  errorMessage: string
  products: Product[]
  onEndReached: boolean
}
export interface CartState {
  isLoading: boolean
  errorMessage: string
  items: Cart[]
}
