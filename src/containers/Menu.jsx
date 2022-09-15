import { useContext, useEffect, useState } from "react"
import { CartContext } from "../context/CartContext"
import { useNavigation } from '../hooks/useNavigation'
import { ActionButton } from '../components/ActionButton'
import { Modal } from './Modal'
import { Cart } from './Cart'
import { useLocation } from "react-router-dom"
import '../styles/components/Menu.sass'

const Menu = () => {
  const [navigateTo] = useNavigation()
  const {
    cart,
    openedModal,
    showCart
  } = useContext(CartContext)
  const [cartTotal, setCartTotal] = useState(0)
  const location = useLocation()

  const getCartTotal = () => {
    const total = cart.reduce((a, b) => a + parseInt(b.qty), 0)
    return total
  }
  
  useEffect(() => {
    setCartTotal(getCartTotal())
  }, [cart])

  return (
    <>
      <nav className='Menu'>
        <ActionButton type="OL" name="Historial de órdenes" onClick={() => navigateTo('/orders')} />
        {location.pathname !== '/placeOrder' && (cartTotal > 0 ? <ActionButton type="SC" name="Carrito de compras" onClick={showCart} cartTotal={cartTotal} /> : <ActionButton type="SC" name="Carrito de compras"/>)}
      </nav>
      {!!openedModal && (
        <Modal>
          <Cart />
        </Modal>
      )}
    </>
  )
}

export { Menu }