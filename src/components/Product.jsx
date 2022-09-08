import { BsCartPlus, BsInfoCircle } from 'react-icons/bs'
import { applyDiscount, calcPercentage, formatEsMX } from '../helpers/numberHandling'
import '../styles/components/Product.sass'

const Product = (props) => {
  return (
    <div className="Product">
      <div className="Product__title">{props.title}</div>
      <div className="Product__information">
        <div className="Product__picture">
          <img src={props.image} alt={props.title} />
        </div>
        <div className="Product__description">{props.short_description}</div>
        <div className="Product__category">{props.category}</div>
        <div className="Product__price">$
          {props.discount > 0 ? applyDiscount(props.price, props.discount) : formatEsMX(props.price)} MXN {props.discount > 0 && <span>${formatEsMX(props.price)}</span> } {props.discount > 0 && <span className='percentage'>{calcPercentage(props.price, props.discount)}% off</span>}
        </div>
      </div>
      <div className="Product__tools">
        <BsCartPlus />
        <BsInfoCircle />
      </div>
    </div>
  )
}

export { Product }