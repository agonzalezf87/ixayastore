import { useContext, useEffect, useState } from "react"
import { useNavigation } from '../hooks/useNavigation'
import { ActionButton } from '../components/ActionButton'
import { CartContext } from "../context/CartContext"
import '../styles/components/Menu.sass'

const Menu = () => {
  const [navigateTo] = useNavigation()
  const {
    cart
  } = useContext(CartContext)
  const [cartTotal, setCartTotal] = useState(0)

  const getCartTotal = () => {
    const total = cart.reduce((a, b) => a + parseInt(b.qty), 0)
    return total
  }

  useEffect(() => {
    setCartTotal(getCartTotal())
  }, [cart])


  const showCart = () => {
    console.log('Shopping Cart will show with this function...')
  }

  return (
    <>
      <nav className='Menu'>
        <ActionButton type="OL" name="Orders List" onClick={() => navigateTo('/orders')} />
        <ActionButton type="SC" name="Shopping Cart" onClick={showCart} cartTotal={cartTotal} />
      </nav>
    </>
  )
}

export { Menu }