import React from "react"

export type fieldType = {
    type: string
    placeholder?: string
    name: string
    minLength?: number
    onBlur?: (e: React.FocusEvent<any, Element>) => void
    value?: string | number
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export enum buttonType {
    button = 'button',
    submit= 'submit',
    reset='reset'
}

export type SubmitbuttonProps = {
    text: string
    type?: buttonType 
}

export type TextProps = {
    text: string
    color?: string
}

export type checkboxProps = {
    isChecked: boolean
    setIsChecked: React.Dispatch<React.SetStateAction<boolean>>
    text: string
}