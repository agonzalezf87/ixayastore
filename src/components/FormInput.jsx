import '../styles/components/FormInput.sass'

const FormInput = (props) => {
  return (
    <>
      <label className='Form__label'>
        {props.label}
        {!props.type ? (
          <input className='Form__input' type="text" name={props.iD} placeholder={props.placeHolder} required />
        ) : (
          <input className='Form__input' type={props.type} name={props.iD} placeholder={props.placeHolder} pattern={props.pattern} required />
        )}
      </label>
    </>
  )
}

export { FormInput }