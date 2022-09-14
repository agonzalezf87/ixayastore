import { useContext, useEffect } from "react"
import { CartContext } from '../context/CartContext'
import { CartContent } from "../components/CartContent"
import { CartButton } from "../components/CartButton"
import { ActionButton } from "../components/ActionButton"
import { useNavigation } from "../hooks/useNavigation"
import '../styles/containers/Cart.sass'

const Cart = () => {
  const {
    cart, 
    showCart,
  } = useContext(CartContext)
  const [ navigateTo ] = useNavigation()

  const handleClose = () => {
    showCart()
  }

  useEffect(() => {
    if (cart.length < 1) {
      setTimeout(() => showCart(), 300)
    }
  }, [cart])

  const placeOrder = () => {
    navigateTo('/placeOrder')
    showCart()
  }

  return (
    <section className="Cart">
      <div className="Cart__content">
        <ActionButton type="CL" onClick={handleClose}/>
        {cart.map(product => (
          <CartContent key={product.id} product={product} />
        ))}
      </div>
      <div className="Cart__button">
        <CartButton type="go" label="Colocar Orden" onClick={placeOrder} />
      </div>
    </section>
  )
}

export { Cart }