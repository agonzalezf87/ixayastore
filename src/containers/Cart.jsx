import { useContext, useEffect, useState } from "react";
import {CartContext} from '../context/CartContext'
import { CartButton } from "../components/CartButton";
import '../styles/containers/Cart.sass'
import { applyDiscount, formatEsMX } from "../helpers/numberHandling";
import { ActionButton } from "../components/ActionButton";

const Cart = () => {
  const {cart, showCart} = useContext(CartContext)

  const handleClose = () => {
    showCart()
  }

  return (
    <section className="Cart">
      <ActionButton type="CL" onClick={handleClose}/>
      {cart.map(product => (
        <div className="Cart__product" key={product.id}>
          <div className="Cart__product__row">
            <div>{product.title}</div>
          </div>
          <div className="Cart__product__row">
            <div className="Cart__product__row__wrapper">
              <div>${!!product.discount ? applyDiscount(product.price, product.discount) : formatEsMX(product.price) } {!!product.discount && (<span>${formatEsMX(product.price)}</span>)}</div>
            </div>
          </div>
          <div className="Cart__product__row">
            <div className="Cart__product__row__wrapper">
              <CartButton type="add" />
              <input type="text" value={product.qty}/>
              <CartButton type="del" />
            </div>
          </div>
        </div>
        ))}
        <button>Colocar Orden</button>
    </section>
  )
}

export { Cart }