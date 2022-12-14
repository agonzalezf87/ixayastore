import { useContext, useRef, useEffect, useState } from 'react'
import { CartContext } from '../context/CartContext'
import { FormInput } from '../components/FormInput'
import { CartButton } from '../components/CartButton'
import { placeOrder } from '../helpers/api'
import { useNavigation } from '../hooks/useNavigation'
import '../styles/containers/PlaceOrderForm.sass'

const PlaceOrderForm = () => {
  const { cart, cartTotals, clearCart, saveSentOrder } = useContext(CartContext)
  const formReference = useRef()
  const [productsList, setProductsList] = useState([])
  const [navigateTo] = useNavigation()
  
  const handleSubmit = (evt) => {
    evt.preventDefault()
    const formData = new FormData(formReference.current)
    
    const order = {
      "street_name": formData.get('streetName'),
      "zip_code": parseInt(formData.get('zipCode')),
      "address": formData.get('address'),
      "phone": parseInt(formData.get('phone')),
      "state": formData.get('state'),
      "city": formData.get('city'),
      "product_list": productsList
    }

    placeOrder(order)
    .then(response => {
      evt.target.elements.streetName.value = ''
      evt.target.elements.address.value = ''
      evt.target.elements.phone.value = ''
      evt.target.elements.city.value = ''
      evt.target.elements.state.value = ''
      evt.target.elements.zipCode.value = ''
      if (!!response.response) {
        saveSentOrder(response.order_id)
        clearCart()
        navigateTo('/information')
      }
    })
    .catch(error => console.log(error))
  }
    
  useEffect(() => {
    let products = []
    cart.forEach(key => {
      products.push({
        product_id: key.id,
        qty: key.qty
      })
    })

    setProductsList(products)
  }, [cart])

  return (
    <form onSubmit={handleSubmit} className="PlaceOrderForm" ref={formReference}>
      <h2>Completar Orden</h2>
      <FormInput label="Calle" iD="streetName" placeHolder="Calle y número" />
      <FormInput label="Colonia" iD="address" placeHolder="Colonia" />
      <FormInput label="Número Telefónico" type="tel" iD="phone" placeHolder="Número Telefónico" pattern="\d{10}" />
      <FormInput label="Ciudad" iD="city" placeHolder="Ciudad/Población" />
      <FormInput label="Entidad Federativa" iD="state" placeHolder="Entidad Federativa" />
      <FormInput label="Código Postal" type="number" iD="zipCode" placeHolder="Código Postal" pattern="\d{5}" />
      <input type="hidden" id="subtotal" value={cartTotals.subtotal} />
      <input type="hidden" id="discount" value={cartTotals.discTotal} />
      <input type="hidden" id="total" value={cartTotals.grandTotal} />
      <CartButton type="go" label="Enviar Orden" allowSubmit />
    </form>
  )
}

export { PlaceOrderForm }