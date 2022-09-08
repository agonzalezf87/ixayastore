import { ReactDOM } from "react-dom/client";
import '../styles/containers/Modal.sass'

const Modal = (props) => {
  return ReactDOM.createPortal(
    <OrdersList />,
    document.getElementById('modal')
  )
}

export { Modal }