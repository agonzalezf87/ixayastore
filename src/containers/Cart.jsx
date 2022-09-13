import { useContext, useEffect } from "react";
import {CartContext} from '../context/CartContext'
import { CartButton } from "../components/CartButton";
import '../styles/containers/Cart.sass'
import { applyDiscount, formatEsMX } from "../helpers/numberHandling";
import { ActionButton } from "../components/ActionButton";

const Cart = () => {
  const {
    cart, 
    showCart,
    addToCart,
    removeFromCart
  } = useContext(CartContext)

  const handleClose = () => {
    showCart()
  }

  useEffect(() => {
    if (cart.length < 1) {
      setTimeout(() => showCart(), 300)
    }
  }, [cart])

  return (
    <section className="Cart">
      <ActionButton type="CL" onClick={handleClose}/>
      {cart.map(product => (
        <div className="Cart__product" key={product.id} alt={`prod${product.id}`}>
          <div className="Cart__product__row">
            <div>{product.title}</div>
          </div>
          <div className="Cart__product__row">
            <div className="Cart__product__row__wrapper">
              <div>{!!product.discount && ( <span>${formatEsMX(product.price)} </span>)} ${!!product.discount ? applyDiscount(product.price, product.discount) : formatEsMX(product.price) } </div>
            </div>
          </div>
          <div className="Cart__product__row">
            <div className="Cart__product__row__wrapper">
              <CartButton type="add" onClick={() => addToCart(product)} />
              <input type="text" value={product.qty} readOnly={true}/>
              <CartButton type="del" onClick={() => removeFromCart(product.id)} />
            </div>
          </div>
        </div>
        ))}
        <CartButton type="go" label="Colocar Orden" />
    </section>
  )
}

export { Cart }