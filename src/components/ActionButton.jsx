import { BsCardChecklist, BsCart, BsCartPlus, BsInfoCircle, BsXCircle } from 'react-icons/bs'
import '../styles/components/ActionButton.sass'

const ActionButton = (props) => {
  return (
    <div className={props.type === 'OL' || props.type === 'SC' ? 'ActionButton menu-item' : 'ActionButton' } alt={props.name} onClick={props.onClick} >
      {props.type === 'OL' ? <BsCardChecklist /> : props.type === 'SC' ? <BsCart /> : props.type === 'AC' ? <BsCartPlus /> : props.type === 'DI' ? <BsInfoCircle /> : props.type === 'CL' ? <BsXCircle /> : null}
    </div>
  )
}

export { ActionButton }