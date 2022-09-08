import { MdShoppingCart, MdListAlt } from 'react-icons/md'
import '../styles/components/Menu.sass'

const Menu = () => {
  return (
    <nav className='Menu'>
      <MdListAlt title="Orders List"/>
      <MdShoppingCart title="Shopping Cart"/>
    </nav>
  )
}

export { Menu }