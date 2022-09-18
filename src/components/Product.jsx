import { useContext, useEffect } from "react"
import { ActionButton } from './ActionButton'
import { CartContext } from "../context/CartContext"
import { applyDiscount, calcPercentage, formatEsMX } from '../helpers/numberHandling'
import '../styles/components/Product.sass'

const Product = ({data}) => {
  const { addToCart } = useContext(CartContext)
  const showDetails = () => {
    console.log("Detailed information will be displayed with this fucntion...")
  }
  return (
    <div className="Product">
      <div className="Product__title">{data.title}</div>
      <div className="Product__information">
        <div className="Product__picture">
          <img src={data.image_url} alt={data.title} />
        </div>
        <div className="Product__description">{data.short_description}</div>
        <div className="Product__price">$
          {data.discount > 0 ? applyDiscount(data.price, data.discount) : formatEsMX(data.price)} MXN {data.discount > 0 && <span>${formatEsMX(data.price)}</span> } {data.discount > 0 && <span className='percentage'>{calcPercentage(data.price, data.discount)}% off</span>}
        </div>
        <div className="Product__category">{data.category}</div>
      </div>
      <div className="Product__tools">
        <ActionButton type="AC" name="Add To Cart" onClick={() => addToCart(data)} />
      </div>
    </div>
  )
}

export { Product }