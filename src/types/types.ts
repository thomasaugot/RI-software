


export interface MyFormProps {
    firstName: string,
    lastName: string,
    email: string
    password: string
    confirmPassword: string
    phoneNumber: string
}

export interface ErrorProps {
    email? : string;
    password? : string;
    confirmPassword?: string;
    code? : any;
}

export interface codeProps {
    code: any
  }