import { ActionButton } from './ActionButton'
import { applyDiscount, calcPercentage, formatEsMX } from '../helpers/numberHandling'
import '../styles/components/Product.sass'

const Product = (props) => {
  const showDetails = () => {
    console.log("Detailed information will be displayed with this fucntion...")
  }

  const addToCart = () => {
    console.log("Item will be added to shopping cart with this fucntion...")
  }

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
        <ActionButton type="DI" name="Detailed Information" onClick={showDetails} />
        <ActionButton type="AC" name="Add To Cart" onClick={addToCart} />
      </div>
    </div>
  )
}

export { Product }