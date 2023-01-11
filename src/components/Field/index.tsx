import React from 'react'
import { fieldType } from '../../types/types'
import './Field.scss'

const Field = ({
    type,
    name,
    value,
    placeholder,
    onChange,
    onBlur
}:fieldType) => {
  return (
    <>
      <input 
      type={type} 
      name={name} 
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      onBlur={onBlur}
      className='field'/>
    </>
  )
}

export default Field
