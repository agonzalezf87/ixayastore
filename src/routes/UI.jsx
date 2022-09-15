import { Routes, Route, useLocation } from 'react-router-dom'
import { Header } from '../containers/Header'
import { Footer } from '../containers/Footer'
import { Home } from '../pages/Home'
import { PlaceOrder } from '../pages/PlaceOrder'
import { Orders } from '../pages/Orders'
import { GoBack } from '../components/GoBack'

const UI = () => {
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
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export { UI }