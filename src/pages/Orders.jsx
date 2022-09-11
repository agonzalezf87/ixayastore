
import { useEffect, useState } from 'react'
import moment from 'moment/moment'
import { getOrdersList } from '../helpers/api'
import { calcPercentage, formatEsMX } from '../helpers/numberHandling'
import 'moment/locale/es'
import _ from 'lodash'
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
                    <div className="Orders__resume__products__product" key={product.id}>
                      <div className="Orders__resume__products__product__image">
                        <img src={product.image_url} alt={product.title} />
                      </div>
                      <div className="Orders__resume__products__product__info">
                        <div className="Orders__resume__produts__product__title">{product.title}</div>
                        <div className="Orders__resume__produts__product__price">${formatEsMX(product.price)}</div>
                        <div className="Orders__resume__produts__product__quantity">Cantidad: {parseInt(product.qty)}</div>
                      </div>
                    </div>
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