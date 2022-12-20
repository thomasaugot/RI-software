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
    onChange?: (e:React.ChangeEvent<HTMLInputElement>) => void
}

function Input({
    name,
    type,
    placeholder,
    minLength,
    onChange
}: inputProp) {
  return (
    <>
      <input
      type={type}
      name={name}
      placeholder={placeholder}
      minLength={minLength}
      onChange={onChange}
      required
      />
    </>
  )
}

export default Input
