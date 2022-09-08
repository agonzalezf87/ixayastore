import { Routes, Route } from 'react-router-dom'
import { Home } from '../pages/Home'
import { Header } from '../containers/Header'
import { Footer } from '../containers/Footer'
import '../styles/containers/App.sass'

const App = () => {

  return (
    <>
      <Header />
      <main className="App">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export { App }