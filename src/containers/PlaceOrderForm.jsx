import { useContext, useRef, useMemo, useState } from 'react'
import { CartContext } from '../context/CartContext'
import { CartButton } from '../components/CartButton'
import '../styles/containers/PlaceOrderForm.sass'

const PlaceOrderForm = () => {
  const { cart, cartTotals } = useContext(CartContext)
  const formReference = useRef()

  const handleSubmit = (evt) => {
    evt.preventDefault()
    console.log('This function will submit the order...')
  }

  const productList = useMemo(() => {
    cart.map(key => (
      {
        "product_id": key.id,
        "qty": key.qty
      }
    ))
  }, [cart])

  console.log(productList)

  return (
    <form onSubmit={handleSubmit} className="PlaceOrderForm">
      <h2>Completar Orden</h2>
      <label>
        Calle
        <input type="text" id="streetName" />
      </label>
      <label>
        Colonia
        <input type="text" id="address" />
      </label>
      <label>
        Número Telefónico
        <input type="tel" id="phone" />
      </label>
      <label>
        Ciudad
        <input type="text" id="city" />
      </label>
      <label>
        Estado
        <input type="text" id="state" />
      </label>
      <label>
        Código Postal
        <input type="number" id="zip_code" pattern="\d{5}" />
      </label>
      <input type="hidden" id="subtotal" value={cartTotals.subtotal} />
      <input type="hidden" id="discount" value={cartTotals.discTotal} />
      <input type="hidden" id="total" value={cartTotals.grandTotal} />
      <CartButton type="go" label="Enviar Orden" onClick={handleSubmit} />
    </form>
  )
}

export { PlaceOrderForm }