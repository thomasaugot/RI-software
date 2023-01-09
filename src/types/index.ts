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