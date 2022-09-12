import { useContext, useEffect, useState } from 'react'
import { CartContext } from '../context/CartContext'
import { BsCardChecklist, BsCart, BsCartPlus, BsInfoCircle, BsXCircle } from 'react-icons/bs'
import '../styles/components/ActionButton.sass'

const ActionButton = (props) => {
  const {
    cart
  } = useContext(CartContext)
  return (
    <div className={props.type === 'OL' || props.type === 'SC' ? 'ActionButton menu-item' : props.title === 'CL' ? 'ActionButton close' : 'ActionButton' } alt={props.name} title={!!props.cartTotal && props.cartTotal > 0 ? `${props.name} (${props.cartTotal})` : props.name} onClick={props.onClick} >
      {!!props.cartTotal && props.cartTotal > 0 && (
        <div className='ActionButton__cartTotal'>{props.cartTotal}</div>
      )}
      {props.type === 'OL' ? <BsCardChecklist /> : props.type === 'SC' ? <BsCart /> : props.type === 'AC' ? <BsCartPlus /> : props.type === 'DI' ? <BsInfoCircle /> : props.type === 'CL' ? <BsXCircle /> : null}
    </div>
  )
}

export { ActionButton }