import { createContext, useState } from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage'
import { getTotal } from '../helpers/numberHandling'

const CartContext = createContext()

const CartProvider = (props) => {
  const [cart, setCart] = useLocalStorage('Ixaya_Cart', [])
  const [cartTotals, setCartTotals] = useState({})
  const [openedModal, setOpenedModal] = useState(false)
  const [loading, setLoading] = useState(true)
  const [sentOrder, setSentOrder] = useState(0)

  const addToCart = (data) => {
    let toCart = []

    if (!!cart.find(el => el.id === data.id)) {
      toCart = [
        ...cart
      ]
      let foundIndex = cart.findIndex(el => el.id === data.id)

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
  }

  const removeFromCart = (prodId) => {
    let toCart = [...cart]
    let foundIndex = cart.findIndex(el => el.id === prodId)
    if (toCart[foundIndex].qty > 1) {
      toCart[foundIndex].qty = parseInt(toCart[foundIndex].qty) - 1
      toCart[foundIndex].total = getTotal(toCart[foundIndex].price, toCart[foundIndex].discount, toCart[foundIndex].qty)
      setCart(toCart)
    } else {
      setCart(toCart.filter(prod => prod.id !== prodId))
    }
  }

  const clearCart = () => {
    setCart([])
  }
  
  const saveTotals = (totalsObject) => {
    setCartTotals(totalsObject)
  } 

  const showCart = () => {
    setOpenedModal(!openedModal)
  }

  const toggleLoading = (bool) => {
    setLoading(bool)
  }

  const saveSentOrder = (orderId) => {
    setSentOrder(orderId)
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        openedModal,
        cartTotals,
        loading,
        sentOrder,
        addToCart,
        removeFromCart,
        clearCart,
        showCart,
        saveTotals,
        toggleLoading,
        saveSentOrder
      }}
    >
      {props.children}
    </CartContext.Provider>
  )
}

export { CartContext, CartProvider }