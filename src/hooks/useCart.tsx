import { RootState } from '@/redux/store'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addItemToCart, changeCartItemQuantity } from '@/redux/cartSlice'
import { Product } from '@/utils/types'

export const useCart = (data: Product) => {
  const cartItems = useSelector((state: RootState) => state.cart.items)
  const [quantity, setQuantity] = useState(cartItems.find(item => item.id === data.id)?.quantity)
  const dispatch = useDispatch()

  useEffect(() => {
    setQuantity(cartItems.find(item => item.id === data.id)?.quantity)
  }, [cartItems])

  const addToCart = () => {
    const newItem = {
      ...data,
      quantity: 1
    }
    dispatch(addItemToCart(newItem))
  }

  const changeQuantity = (newQuantity: number) => {
    dispatch(changeCartItemQuantity({ id: data.id, newQuantity }))
  }

  return {
    addToCart,
    changeQuantity,
    quantity
  }
}
