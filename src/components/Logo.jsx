import { useLocation, useNavigate } from 'react-router-dom'
import '../styles/components/Logo.sass'

function Logo() {
  const location = useLocation()
  const navigator = useNavigate()

  const handleClick = () => {
    if (location.pathname !=='/') {
      navigator('/', {replace: true})
    }
  }
  
  return (
    <aside className="Logo" onClick={handleClick}>
      <p>IxayaStore</p>
    </aside>
  )
}

export { Logo }