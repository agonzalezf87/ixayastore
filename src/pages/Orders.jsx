import { useEffect, useState } from 'react'
import { getOrdersList } from '../helpers/api'
import { OrdersPagination } from '../containers/OrdersPagination'
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
    <section className="Orders" e>
      <h2>Historial de Órdenes</h2>
      {!!loading && <div>Cargando...</div>}
      {!!error && <div>Ha habido un error: error.error</div>}
      {!loading && (
        <div className='Orders__content'>
          <OrdersPagination data={orders} />
        </div>
      )}
    </section>
  )
}

export { Orders }