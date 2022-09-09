import { useNavigate, useLocation } from 'react-router-dom'

const useNavigation = () => {
  const navigator = useNavigate()
  const location = useLocation()

  const navigateTo = (path) => {
    if (location.pathname !== path) {
      navigator(path, {replace: true})
    }
  }

  return [ navigateTo ]
}

export { useNavigation }