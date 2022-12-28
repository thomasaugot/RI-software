import { baseUrl } from "../axios";
import { MyFormValues } from "../components/SignUp";

type subItemProps = {
  name: string
  url: string
  enabled: boolean
}

type navbarProps = {
  name: string
  url: string
  enabled: boolean
  subitems: subItemProps
}

// register method
export const register = async (
    { 
      companyName,
      companyLegalName,
      login,
      email,
      password,
      phoneNumber
    }: MyFormValues) => {
    const newData = {
      companyName,
      companyLegalName,
      login,
      email,
      password,
      phoneNumber
    }
    const {data: response } = await baseUrl.post('api/signup', newData)
  
    return response.data
  }
  
  // send email 
 export const verification = async (email: string) =>{
    const response = await baseUrl.post('/api/send-otp-email', {email})
    return response.data
}

// email confirmation code
export const confirmation = (code: number) =>{
    
}

// navbar generator queries

export const navbar = async (id: number): Promise<navbarProps> => {
  const response = await baseUrl.get(`/api/navbar/${id}`);
  return response.data;
}