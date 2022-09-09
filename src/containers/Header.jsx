import { Menu } from "../containers/Menu"
import { Logo } from "../components/Logo"
import '../styles/containers/Header.sass'

const Header = () => {
  return (
    <header className="Header">
      <section className="Header__container">
        <Logo />
        <Menu />
      </section>
    </header>
  )
}

export { Header }