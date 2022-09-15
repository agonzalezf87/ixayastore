import { ThreeDots } from 'react-loader-spinner'

const Loader = () => {
  return (
    <ThreeDots 
      height="180" 
      width="180" 
      radius="48"
      color="#884dff" 
      ariaLabel="three-dots-loading"
      wrapperStyle={{}}
      wrapperClassName=""
      visible={true}
    />
  )
}

export { Loader }