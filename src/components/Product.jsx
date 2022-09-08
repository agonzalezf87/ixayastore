import React from 'react'

const Product = (props) => {
  return (
    <div className="Product">
      <div className="Product__title">{props.title}</div>
      <div className="Product__picture">
        <img src={props.image} alt={props.title} width={280} />
      </div>
      <div className="Product__description">{props.short_description}</div>
      <div className="Product__price">${props.discount > 0 ? parseInt(props.price - props.discount) : props.price} {props.discount > 0 && <span>${props.price}</span> }</div>
    </div>
  )
}

export { Product }