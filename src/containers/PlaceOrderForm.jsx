
const PlaceOrderForm = () => {

  const handleSubmit = () => {
    console.log('This function will submit the order...')
  }

  return (
    <form onSubmit={handleSubmit}></form>
  )
}

export default PlaceOrderForm