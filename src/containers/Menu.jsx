import { useContext, useEffect, useState } from "react"
import { CartContext } from "../context/CartContext"
import { useNavigation } from '../hooks/useNavigation'
import { ActionButton } from '../components/ActionButton'
import { Modal } from './Modal'
import { Cart } from './Cart'
import '../styles/components/Menu.sass'

const Menu = () => {
  const [navigateTo] = useNavigation()
  const {
    cart,
    openedModal,
    showCart
  } = useContext(CartContext)
  const [cartTotal, setCartTotal] = useState(0)

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
        <ActionButton type="OL" name="Orders List" onClick={() => navigateTo('/orders')} />
        <ActionButton type="SC" name="Shopping Cart" onClick={showCart} cartTotal={cartTotal} />
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