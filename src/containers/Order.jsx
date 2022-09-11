import { useState } from 'react'
import { calcPercentage, formatEsMX } from '../helpers/numberHandling'
import moment from 'moment/moment'
import 'moment/locale/es'
import _ from 'lodash'
import '../styles/containers/Order.sass'
import { ProductInOrder } from '../components/ProductInOrder'

const Order = ({data}) => {
  return (
    <div className="Order" >
      <div className="Order__top" >
        <div className="Order__date">{moment(data.lastUpdate).locale('es').format('DD/MM/Y')}</div>
        <div className="Order__code"><i>{data.order_code}</i></div>
        <div className="Order__status"><span>{parseInt(data.paid) === 1 ? 'Pagado' : 'Pendiente'}</span></div>
      </div>
      <div className="Order__address"><b>Dirección de envío:</b> {data.street_name}, {data.address}, {data.city}, {data.state}, {data.zip_code}</div>
      <div className="Order__subtotal"><b>Sub-total:</b> ${formatEsMX(data.subtotal)}</div>
      <div className="Order__total"><b>Total:</b> ${formatEsMX(data.total)} <span>-{calcPercentage(data.subtotal, data.discount)}%</span></div>
      <div className="Order__products">
        <div><b>Productos:</b></div>
        {_.uniqBy(data.products, 'id').map(product => (
          <ProductInOrder imageUrl={product.image_url} title={product.title} price={product.price} qty={product.qty} key={product.id} />
        ))}
      </div>
    </div>
  )
}

export { Order }