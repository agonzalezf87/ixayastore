
import { useEffect, useState } from 'react'
import { getOrdersList } from '../helpers/api'
import { calcPercentage, formatEsMX } from '../helpers/numberHandling'
import moment from 'moment/moment'
import 'moment/locale/es'
import _ from 'lodash'
import '../styles/containers/Orders.sass'
import { ProductInOrder } from '../components/ProductInOrder'

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
              <div className="Orders__resume" key={order.order_code}>
                <div className="Orders__resume__top">
                  <div className="Orders__resume__date">{moment(order.last_update).locale('es').format('DD / MM / Y')}</div>
                  <div className="Orders__resume__code">Orden: <i>{order.order_code}</i></div>
                  <div className="Orders__resume__status"><span>{parseInt(order.paid) === 1 ? 'Pagado' : 'Pendiente'}</span></div>
                </div>
                <div className="Orders__resume__address"><b>Dirección de envío:</b> {order.street_name}, {order.address}, {order.city}, {order.state}, {order.zip_code}</div>
                <div className="Orders__resume__subtotal"><b>Sub-total:</b> ${formatEsMX(order.subtotal)}</div>
                <div className="Orders__resume__total"><b>Total:</b> ${formatEsMX(order.total)} <span>-{calcPercentage(order.subtotal, order.discount)}%</span></div>
                <div className="Orders__resume__products">
                  <div><b>Productos:</b></div>
                  {_.uniqBy(order.products, 'id').map(product => (
                    <ProductInOrder imageUrl={product.image_url} title={product.title} price={product.price} qty={product.qty} key={product.id} />
                  ))}
                </div>
              </div>
            )
          ))
        )}
      </div>
    </section>
  )
}

export { Orders }