import './inputField.scss';
import { FC } from 'react';

import { inputFieldProps } from '../../../types/general/generalTypes';
import { BiSearch } from "react-icons/bi"; //!!!!

const InputField: FC<inputFieldProps> = ({
    type,
    name,
    value,
    isSearch = false,
    placeholder,
    onChange,
    onBlur
}) => {
  return (
    <div className="input-field-container">
      <input type={type} value={value} onChange={onChange} onBlur={onBlur} placeholder={placeholder} name={name} />
      {isSearch ? <BiSearch className="textfield-searc-icon" size={"25px"}/> : null}
    </div>
  )
}

export default InputField;
