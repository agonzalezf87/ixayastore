import { formatEsMX } from "../helpers/numberHandling"
import '../styles/components/ProductInOrder.sass'

const ProductInOrder = ({imageUrl, title, price, qty}) => {
  return (
    <div className="ProductInOrder">
      <div className="ProductInOrder__image">
        <img src={imageUrl} alt={title} />
      </div>
      <div className="ProductInOrder__info">
        <div className="ProductInOrder__title">{title}</div>
        <div className="ProductInOrder__price">${formatEsMX(price)}</div>
        <div className="ProductInOrder__quantity">Cantidad: {parseInt(qty)}</div>
      </div>
    </div>
  )
}

export { ProductInOrder }