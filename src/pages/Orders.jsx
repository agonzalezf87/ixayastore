import { useContext, useEffect, useState } from 'react'
import { CartContext } from '../context/CartContext'
import { getOrdersList } from '../helpers/api'
import { OrdersPagination } from '../containers/OrdersPagination'
import '../styles/containers/Orders.sass'

const Orders = () => {
  const {loading, toggleLoading} = useContext(CartContext)
  const [error, setError] = useState(false)
  const [orders, setOrders] = useState([])

  useEffect(() => {
    (async () => {
      const apiOrders = await getOrdersList()
      if (!apiOrders.error) {
        toggleLoading(false)
        setOrders(apiOrders)
      } else {
        toggleLoading(false)
        setError(true)
        setOrders(apiOrders.error)
      }
    })()
  },[])
  
  if(orders.status === 1) {
    console.log(orders)
    console.log(orders.sort( (a, b) => b.id - a.id) )
  }

  return (
    <section className="Orders" e>
      <h2>Historial de Órdenes</h2>
      {!!error && <div>Ha habido un error: {error.error}</div>}
      {!loading && (
        <div className='Orders__content'>
          <OrdersPagination data={orders} />
        </div>
      )}
    </section>
  )
}

export { Orders }