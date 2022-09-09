import { useMemo } from 'react'
import { ActionButton } from '../components/ActionButton'
import '../styles/containers/OrdersList.sass'

const OrdersList = ({onClick}) => {
  return (
    <section className="OrdersList">
      <h1>Orders List</h1>
      <ActionButton onClick={onClick} type="CL" name="Close" />
    </section>
  )
}

export { OrdersList }