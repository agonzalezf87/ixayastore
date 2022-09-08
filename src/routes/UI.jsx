import { useContext, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Home } from '../pages/Home'
import { Header } from '../containers/Header'
import { Footer } from '../containers/Footer'
import { Modal } from '../containers/Modal'
import { CartContext } from '../context/CartContext'

const UI = () => {
  const {
    cart
  } = useContext(CartContext)
  const [openedModal, setOpenedModal] = useState(false)
  return (
    <>
    <Header />
    <main className="App">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </main>
    <Footer />
    {!!openedModal && <Modal />}
    </>
  )
}

export { UI }