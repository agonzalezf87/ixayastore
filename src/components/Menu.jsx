import { BsCardChecklist, BsCart } from 'react-icons/bs'
import '../styles/components/Menu.sass'

const Menu = () => {
  return (
    <nav className='Menu'>
      <BsCardChecklist title="Orders List"/>
      <BsCart title="Shopping Cart"/>
    </nav>
  )
}

export { Menu }