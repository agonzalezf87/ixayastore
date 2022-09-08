import { BsCartPlus, BsInfoCircle } from 'react-icons/bs'
import { calcPercentage } from '../helpers/numberHandling'
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
        <div className="Product__price">$
          {props.discount > 0 ? parseInt(props.price - props.discount) : props.price} MXN {props.discount > 0 && <span>${props.price}</span> } {props.discount > 0 && <span className='percentage'>{calcPercentage(props.price, props.discount)}% off</span>}
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