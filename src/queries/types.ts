
export interface subItemProps {
    name: string
    url: string
    enabled: boolean
}

export interface MyFormValues {
    companyName: string
    companyLegalName: string
    login: string
    email: string
    password: string
    confirmPassword: string
    phoneNumber:string
  }

export interface navProps  {
    description?: string
    ok?: boolean | true
    result: result[]
}

export interface result {
    name: string
    url: string
    enabled: boolean
    subitems: subItemProps[]
}

export interface GenericResponse {
    status: string;
    message: string;
  }
  
  export interface ILoginResponse {
    status: string;
    access_token: string;
  }
  
  export interface MyFormResponse {
    status: string;
    data: {
      user: MyFormValues;
    };
  }

  export type MyLoginFormValues = {
    email: string
    password: string
}
