import { useContext, useState } from 'react'
import { CartContext } from '../context/CartContext'
import { CartContent } from '../components/CartContent'

import '../styles/containers/PlaceOrder.sass'

const PlaceOrder = () => {
  const { cart } = useContext(CartContext)

  return (
    <section className="PlaceOrder">
      <div className="PlaceOrder__content">
        <div className="CurOrder">Orden</div>
        <div className="CurrCart">
          {cart.map(product => (
            <CartContent key={product.id} product={product} />
          ))}        
        </div>
      </div>
    </section>
  )
}

export { PlaceOrder }