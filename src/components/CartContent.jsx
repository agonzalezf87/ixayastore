import { CartButton } from "../components/CartButton"
import { applyDiscount, formatEsMX } from "../helpers/numberHandling"

const CartContent = ({product}) => {
  return (
    <div className="Cart__product" >
      <div className="Cart__product__image">
        <picture><img src={product.image_url} alt={product.title} /></picture>
      </div>
      <div className="Cart__product__info">
        <div className="Cart__product__title">{product.title}</div>
        <div className="Cart__product__row">
          <div className="Cart__product__wrapper">
            <div>{!!product.discount && ( <span>${formatEsMX(product.price)} </span>)} ${!!product.discount ? applyDiscount(product.price, product.discount) : formatEsMX(product.price) } </div>
          </div>
        </div>
        <div className="Cart__product__row">
          <div className="Cart__product__wrapper">
            <CartButton type="add" onClick={() => addToCart(product)} />
            <input type="text" value={product.qty} readOnly={true}/>
            <CartButton type="del" onClick={() => removeFromCart(product.id)} />
          </div>
        </div>
      </div>
    </div>
  )
}

export { CartContent }