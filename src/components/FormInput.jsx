import '../styles/components/FormInput.sass'

const FormInput = (props) => {
  return (
    <>
      <label>
        {props.label}
        {!props.type ? (
          <input type="text" name={props.iD} placeholder={props.placeHolder} required />
        ) : (
          <input type={props.type} name={props.iD} placeholder={props.placeHolder} pattern={props.pattern} required />
        )}
      </label>
    </>
  )
}

export { FormInput }