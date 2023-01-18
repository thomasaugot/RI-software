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
    submit = 'submit',
    reset = 'reset'
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

export type LoginType = {
    email: string
    password: string
}


export interface MyFormProps {
    first_name: string,
    last_name: string,
    email: string,
    password: string,
    confirmPassword: string,
    phone_number:string
}

export interface ErrorProps {
    email?: string;
    password?: string;
    confirmPassword?: string;
    phone_number?:string
    code?: any;
}

export interface codeProps {
    code: any
}

export interface EmailProps {
    email: any
}

export type navMenuItem = {
    icon: JSX.Element
    text: string
    url: string
}

export type NavItemProps = {
    index?: number
    icon?: JSX.Element
    text?: string
    menuItems?: navMenuItem[]
}