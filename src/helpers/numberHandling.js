const calcPercentage = (price, discount) => {
  let percentage = parseInt((discount / price) * 100)
  return Math.floor(percentage)
}

export { calcPercentage }