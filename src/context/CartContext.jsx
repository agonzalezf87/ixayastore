import { createContext, useState } from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage'
import { getTotal } from '../helpers/numberHandling'
import _, { set } from 'lodash'

const CartContext = createContext()

const CartProvider = (props) => {
  const [cart, setCart] = useLocalStorage('Ixaya_Cart', [])

  const addToCart = (data) => {
    let toCart = []
    if (cart.some(el => el.id === data.id)) {
      toCart = [
        ...cart
      ]
      let foundIndex = cart.findIndex(el => el.id = data.id)

      toCart[foundIndex].qty = parseInt(toCart[foundIndex].qty) + 1
      toCart[foundIndex].total = getTotal(toCart[foundIndex].price, toCart[foundIndex].discount, toCart[foundIndex].qty)
      setCart(toCart)
    } else {
      toCart = [{
        ...data,
        qty: 1,
        total: getTotal(data.price, data.discount, 1)
      }]
      if (cart.length > 0) {
        setCart([
          ...cart,
          ...toCart
        ])
      } else {
        setCart(toCart)
      }
    } 
    
    /* const ID = parseInt(itemId)
    let newCart
    const currCart = [...cart]
    if (currCart.includes(ID)) {
      newCart = [...currCart]
      console.log(newCart)
      newCart[currCart.indexOf(ID)].qty = parseInt(currCart.indexOf(ID).qty) + 1
      setCart({
        ...newCart
      })
    }
    else {
      setCart([
        ...currCart,
        {
          "product_id": ID,
          "qty":  1
        }
      ])
    } */
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