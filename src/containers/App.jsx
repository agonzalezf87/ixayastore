import { CartProvider } from '../context/CartContext'
import { UI } from '../routes/UI'
import '../styles/containers/App.sass'

const App = () => {
  return (
    <CartProvider>
      <UI />
    </CartProvider>
  )
}

export { App }