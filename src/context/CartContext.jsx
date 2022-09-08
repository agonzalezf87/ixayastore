import { createContext, useState } from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage'

const CartContext = createContext()

const CartProvider = (props) => {
  const [cart, setCart] = useLocalStorage('Ixaya_Cart', [])

  const addToCart = (itemId, quantity) => {
    
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart
      }}
    >
      {props.children}
    </CartContext.Provider>
  )
}

export { CartContext, CartProvider }