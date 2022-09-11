
import { useEffect, useState } from 'react'
import { getOrdersList } from '../helpers/api'
import { calcPercentage, formatEsMX } from '../helpers/numberHandling'
import { Order } from '../containers/Order'
import '../styles/containers/Orders.sass'

const Orders = () => {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [orders, setOrders] = useState([])

  useEffect(() => {
    (async () => {
      const apiOrders = await getOrdersList()
      if (!apiOrders.error) {
        setLoading(false)
        setOrders(apiOrders)
      } else {
        setLoading(false)
        setError(true)
        setOrders(apiOrders)
      }
    })()
  },[])

  return (
    <section className="Orders">
      <h1>Historial de Órdenes</h1>
      <div className="Orders__content">
        {!!loading && <div>Cargando...</div>}
        {!!error && <div>Ha habido un error: error.error</div>}
        {!loading && (
          orders.map(order => (
            order.enabled === '1' && (
              <Order data={order} key={order.order_code} />
            )
          ))
        )}
      </div>
    </section>
  )
}

export { Orders }