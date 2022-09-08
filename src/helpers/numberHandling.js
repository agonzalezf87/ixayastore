const formatEsMX = (number) => { 
  return parseInt(number).toLocaleString('es-MX')
}

const calcPercentage = (price, discount) => {
  return Math.floor(parseInt((discount / price) * 100))
}

const applyDiscount = (price, discount) => {
  return formatEsMX(price - discount)
}

export { calcPercentage, applyDiscount, formatEsMX }