const formatEsMX = (number) => { 
  return parseInt(number).toLocaleString('es-MX')
}

const calcPercentage = (price, discount) => {
  return Math.floor(parseInt((discount / price) * 100))
}

const applyDiscount = (price, discount) => {
  return formatEsMX(price - discount)
}

const getTotal = (price, discount, qty) => {
  return (parseInt(price) - parseInt(discount)) * parseInt(qty)
}

export { calcPercentage, applyDiscount, formatEsMX, getTotal }