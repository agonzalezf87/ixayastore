import { useNavigation } from '../hooks/useNavigation'
import { ActionButton } from '../components/ActionButton'
import '../styles/components/Menu.sass'

const Menu = () => {
  const [navigateTo] = useNavigation()

  const showCart = () => {
    console.log('Shopping Cart will show with this function...')
  }

  return (
    <>
      <nav className='Menu'>
        <ActionButton type="OL" name="Orders List" onClick={() => navigateTo('/orders')} />
        <ActionButton type="SC" name="Shopping Cart" onClick={showCart} />
      </nav>
    </>
  )
}

export { Menu }