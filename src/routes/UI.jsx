import { Routes, Route, useLocation } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { Header } from '../containers/Header'
import { Footer } from '../containers/Footer'
import { Home } from '../pages/Home'
import { PlaceOrder } from '../pages/PlaceOrder'
import { Orders } from '../pages/Orders'
import { Information } from '../pages/Information'
import { GoBack } from '../components/GoBack'
import { LoaderContainer } from '../containers/LoaderContainer'
import { Loader } from '../components/Loader'
import { Modal } from '../containers/Modal'

const UI = () => {
  const { loading } = useContext(CartContext)
  const location = useLocation()

  return (
    <>
      <Header />
      <main className="App">
        {location.pathname !== '/' && <GoBack />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/placeOrder" element={<PlaceOrder />} />
          <Route path="/information" element={<Information />} />
        </Routes>
      </main>
      <Footer />
      {!!loading && <Modal><LoaderContainer><Loader /></LoaderContainer></Modal>}
    </>
  )
}

export { UI }