import '../styles/containers/LoaderContainer.sass'

const LoaderContainer = ({children}) => {
  return (
    <section className="LoaderContainer">
      <div className='LoaderContainer__content'>
        {children}
      </div>
    </section>
  )
}

export { LoaderContainer }