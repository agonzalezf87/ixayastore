import { useNavigation } from '../hooks/useNavigation'
import { BsArrowBarLeft } from 'react-icons/bs'
import  '../styles/components/GoBack.sass'

const GoBack = () => {
  const [ navigateTo ] = useNavigation()

  const handleClick = () => {
    navigateTo('/')
  }

  return (
    <div className="GoBack">
      <a className="GoBack__link" onClick={handleClick}><span>{'<'}</span>Regresar</a>
    </div>
  )
}

export { GoBack }