import { useState } from 'react'
import { ActionButton } from '../components/ActionButton'
import { OrdersList } from '../containers/OrdersList'
import { Modal } from '../containers/Modal'
import '../styles/components/Menu.sass'

const Menu = () => {
  const [openedModal, setOpenedModal] = useState(false)
  
  const showOrdersList = () => {
    setOpenedModal(!openedModal)
  }

  const showCart = () => {
    console.log('Shopping Cart will show with this function...')
  }

  return (
    <>
      <nav className='Menu'>
        <ActionButton type="OL" name="Orders List" onClick={showOrdersList} />
        <ActionButton type="SC" name="Shopping Cart" onClick={showCart} />
      </nav>
      {!!openedModal && <Modal><OrdersList onClick={showOrdersList} /></Modal>}
    </>
  )
}

export { Menu }