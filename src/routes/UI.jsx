import { Routes, Route } from 'react-router-dom'
import { Header } from '../containers/Header'
import { Footer } from '../containers/Footer'
import { Home } from '../pages/Home'
import { PlaceOrder } from '../pages/PlaceOrder'
import { Orders } from '../pages/Orders'

const UI = () => {
  return (
    <>
      <Header />
      <main className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/placeOrder" element={<PlaceOrder />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export { UI }