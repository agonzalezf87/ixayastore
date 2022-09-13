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
      <div className="Cart__content">
        <ActionButton type="CL" onClick={handleClose}/>
        {cart.map(product => (
          <div className="Cart__product" key={product.id} >
            <div className="Cart__product__image">
              <picture><img src={product.image_url} alt={product.title} /></picture>
            </div>
            <div className="Cart__product__info">
              <div className="Cart__product__title">{product.title}</div>
              <div className="Cart__product__row">
                <div className="Cart__product__wrapper">
                  <div>{!!product.discount && ( <span>${formatEsMX(product.price)} </span>)} ${!!product.discount ? applyDiscount(product.price, product.discount) : formatEsMX(product.price) } </div>
                </div>
              </div>
              <div className="Cart__product__row">
                <div className="Cart__product__wrapper">
                  <CartButton type="add" onClick={() => addToCart(product)} />
                  <input type="text" value={product.qty} readOnly={true}/>
                  <CartButton type="del" onClick={() => removeFromCart(product.id)} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="Cart__button">
        <CartButton type="go" label="Colocar Orden" />
      </div>
    </section>
  )
}

export { Cart }