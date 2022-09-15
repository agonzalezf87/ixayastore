import { BsBoxArrowRight, BsDashLg, BsPlusLg } from 'react-icons/bs'
import '../styles/components/CartButton.sass'

const CartButton = (props) => {
  return (
    <button type={!!props.allowSubmit ? "submit" : "button"} className={props.type === 'go' ? 'CartButton go' : 'CartButton'} onClick={props.onClick}>
      {props.label}
      {props.type === "add" ? <BsPlusLg /> : props.type === "del" ? <BsDashLg /> : <BsBoxArrowRight />}
    </button>
  )
}

export { CartButton }