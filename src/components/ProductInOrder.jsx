import { formatEsMX } from "../helpers/numberHandling"
import '../styles/components/ProductInOrder.sass'

const ProductInOrder = ({product}) => {
  return (
    <div className="ProductInOrder">
      <div className="ProductInOrder__image">
        <img src={product.image_url} alt={product.title} />
      </div>
      <div className="ProductInOrder__info">
        <div className="ProductInOrder__title">{product.title}</div>
        <div className="ProductInOrder__price">${formatEsMX(product.price)}</div>
        <div className="ProductInOrder__quantity">Cantidad: {parseInt(product.qty)}</div>
      </div>
    </div>
  )
}

export { ProductInOrder }