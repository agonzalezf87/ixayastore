import { createPortal } from 'react-dom'
import '../styles/containers/Modal.sass'

const Modal = ({children}) => {
  return createPortal(
    <section className='Modal'>
      <div className="Modal__content">{children}</div>
    </section>,
    document.getElementById('modal')
  )
}

export { Modal }