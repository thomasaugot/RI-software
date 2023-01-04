import React from 'react'
import './Input.scss';

export enum Type {
    text = 'text',
    password = 'password',
    number = 'number',
    email = 'email'
}

type inputProp = {
    name: string
    type? : Type | 'text'
    placeholder: string
    minLength?: number
    onBlur?: (e: React.FocusEvent<any, Element>) => void
    value?: string | number
    onChange?: (e:React.ChangeEvent<HTMLInputElement>) => void
}

function Input({
    name,
    type,
    placeholder,
    minLength,
    onBlur,
    value,
    onChange
}: inputProp) {
  return (
    <>
      <input
      className='input__text'
      type={type}
      name={name}
      placeholder={placeholder}
      minLength={minLength}
      value={value}
      onBlur={onBlur}
      onChange={onChange}
      required
      />
    </>
  )
}

export default Input
