import { ActionButton } from '../components/ActionButton'
import '../styles/components/Menu.sass'

const Menu = () => {
  const showOrdersList = () => {
    console.log('Orders List will show with this function...')
  }

  const showCart = () => {
    console.log('Shopping Cart will show with this function...')
  }

  return (
    <nav className='Menu'>
      <ActionButton type="OL" name="Orders List" onClick={showOrdersList} />
      <ActionButton type="SC" name="Shopping Cart" onClick={showCart} />
    </nav>
  )
}

export { Menu }