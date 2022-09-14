import { useContext, useEffect, useState } from 'react'
import { CartContext } from '../context/CartContext'
import { CartContent } from '../components/CartContent'
import { formatEsMX } from '../helpers/numberHandling'

import '../styles/containers/PlaceOrder.sass'

const PlaceOrder = () => {
  const { cart, cartTotales, saveTotales } = useContext(CartContext)
  const [loadingTotales, setLoadingTotales] = useState(true)

  useEffect(() => {
    let totalArray = []
    let discountArray = []
    let subTotal = 0
    let descTotal = 0
    let grandTotal = 0

    cart.forEach(key => discountArray.push(parseInt(key.discount)))
    cart.forEach(key => totalArray.push(parseInt(key.total)))

    descTotal = discountArray.reduce((a,b) => a + b, 0)
    subTotal = totalArray.reduce((a,b) => a + b, 0)
    grandTotal = subTotal - descTotal
    
    saveTotales({
      totalDiscount: descTotal,
      subTotal: subTotal,
      total: grandTotal
    })

    setLoadingTotales(false)
  }, [cart])

  console.log(cartTotales)

  return (
    <section className="PlaceOrder">
      <div className="PlaceOrder__content">
        <div className="CurrOrder">
          {!!loadingTotales && 'Cargando...'}
          {!loadingTotales && (
            <div className='currCart__totals'>
              <div>Sub-Total: ${formatEsMX(cartTotales.subTotal)}</div>
              <div>Descuento: ${formatEsMX(cartTotales.totalDiscount)}</div>
              <div className='currCart__Total'>Total: ${formatEsMX(cartTotales.total)}</div>
            </div>
          )}
        </div>
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