import { BsBoxArrowRight, BsCartDash, BsCartPlus } from 'react-icons/bs'
import '../styles/components/CartButton.sass'

const CartButton = (props) => {
  return (
    <button type="button" className={props.type === 'go' ? 'CartButton go' : 'CartButton'} onClick={props.onClick}>
      {props.label}
      {props.type === "add" ? <BsCartPlus /> : props.type === "del" ? <BsCartDash /> : <BsBoxArrowRight />}
    </button>
  )
}

export { CartButton }