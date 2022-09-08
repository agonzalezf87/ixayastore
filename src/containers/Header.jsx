import { Menu } from "../components/Menu"
import '../styles/containers/Header.sass'

const Header = () => {
  return (
    <header className="Header">
      <section className="Header__container">
        <aside className="Header__logo">
          <p>IxayaStore</p>
        </aside>
        <Menu />
      </section>
    </header>
  )
}

export { Header }