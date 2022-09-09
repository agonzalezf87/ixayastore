import { Routes, Route } from 'react-router-dom'
import { Header } from '../containers/Header'
import { Footer } from '../containers/Footer'
import { Home } from '../pages/Home'
import { Orders } from '../pages/Orders'

const UI = () => {
  return (
    <>
      <Header />
      <main className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/orders" element={<Orders />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export { UI }