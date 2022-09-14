import { useContext, useEffect, useState } from 'react'
import { CartContext } from '../context/CartContext'
import { CartContent } from '../components/CartContent'
import { formatEsMX } from '../helpers/numberHandling'
import '../styles/containers/PlaceOrder.sass'
import { PlaceOrderForm } from '../containers/PlaceOrderForm'

const PlaceOrder = () => {
  const { cart, cartTotals, saveTotals } = useContext(CartContext)
  const [loadingTotales, setLoadingTotales] = useState(true)

  useEffect(() => {
    let totalArray = []
    let discountArray = []
    let subTotal = 0
    let discTotal = 0
    let grandTotal = 0

    cart.forEach(key => discountArray.push(parseInt(key.discount * key.qty)))
    cart.forEach(key => totalArray.push(parseInt(key.total)))

    discTotal = discountArray.reduce((a,b) => a + b, 0)
    subTotal = totalArray.reduce((a,b) => a + b, 0)
    grandTotal = subTotal - discTotal
    
    saveTotals({
      totalDiscount: discTotal,
      subTotal: subTotal,
      total: grandTotal
    })

    setLoadingTotales(false)
  }, [cart])

  return (
    <section className="PlaceOrder">
      <div className="PlaceOrder__content">
        <div className="CurrOrder">
          <PlaceOrderForm />
        </div>
        <div className="CurrCart">
          <h3>Productos en su carrito:</h3>
          {cart.map(product => (
            <CartContent key={product.id} product={product} />
          ))}
          {!!loadingTotales && 'Cargando...'}
            {!loadingTotales && (
              <div className='CurrCart__totals'>
                <div><span>Sub-Total:</span> ${formatEsMX(cartTotals.subTotal)}</div>
                <div><span>Descuento:</span> ${formatEsMX(cartTotals.totalDiscount)}</div>
                <div className='CurrCart__totals__total'>${formatEsMX(cartTotals.total)}</div>
              </div>
            )}
        </div>
      </div>
    </section>
  )
}

export { PlaceOrder }