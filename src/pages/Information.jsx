import { useContext, useEffect, useState } from "react"
import { CartContext } from "../context/CartContext"
import { getOrderByID, getOrdersList } from "../helpers/api"
import { Order } from "../containers/Order"
import '../styles/pages/Information.sass'

const Information = () => {
  const { loading, toggleLoading, sentOrder } = useContext(CartContext)
  const [ order, setOrder ] = useState([])

  useEffect(() => {
    return async () => {
      toggleLoading(true)

      const order = await getOrderByID(sentOrder)
      if (!!order){
        console.log(order)
        setOrder(order)
        toggleLoading(false)
      }
    }
  }, [])

  return (
    <section className="Information">
      {!loading &&(
        <div className="Information__content">
          <h1>Su orden fue enviada</h1>
          {order.map(key => (
            <Order key={order.id} data={key} />
          ))}
        </div>
      )}
    </section>
  )
}

export { Information }