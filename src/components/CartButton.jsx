import { BsCartDash, BsCartPlus } from 'react-icons/bs'
import '../styles/components/CartButton.sass'

const CartButton = ({type}) => {
  return (
    <button type="button" className="CartButton">{
      type === "add" ? <BsCartPlus /> : <BsCartDash />
    }</button>
  )
}

export { CartButton }