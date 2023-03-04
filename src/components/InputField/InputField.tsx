import { fieldType } from '../../types/types'
import './InputField.scss'
import { BiSearch } from "react-icons/bi";

const Field = ({
    type,
    name,
    value,
    isSearch = false,
    placeholder,
    onChange,
    onBlur
}:fieldType) => {
  return (
    <div className="input-field-container">
      <input type={type} value={value} onChange={onChange} onBlur={onBlur} placeholder={placeholder} name={name} />
      {isSearch ? <BiSearch className="textfield-searc-icon" size={"25px"}/> : null}
    </div>
  )
}

export default Field
