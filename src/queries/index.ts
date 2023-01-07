import { Navigate } from "react-router-dom";
import { baseUrl } from "../axios";
import { GenericResponse, ILoginResponse, MyFormResponse, MyFormValues, MyLoginFormValues } from './../queries/types';

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
  console.log("new Data", newData)
  const { data: response } = await baseUrl.post('api/signup', newData)
  console.log(response.data)
  return response.data
}

// login
export const login = async (
  {
    email,
    password,
  }: MyLoginFormValues) => {
  const loginData = {
    email,
    password,
  }
  console.log("Login Data", loginData)
  const { data: response } = await baseUrl.post('api/login', loginData)

  console.log(response.data)
  return response.data
}

// send email 
export const verification = async (email: string) => {
  const response = await baseUrl.post('api/send-otp-email', { email })
  return response.data
}

// email confirmation code
export const confirmation = (code: number) => {

}

// navbar generator queries

export const navbar = async () => {
  const response = await baseUrl.get(`api/navbar/${1}`);
  return response.data;
}

// hierarchy generator queries

export const hierachy = async (id: number): Promise<any> => {
  const response = await baseUrl.get(`api/hierarchy/employees/${id}`);
  return response.data;
}

// export const signUpUserFn = async (user: MyFormValues) => {
//   const response = await baseUrl.post<GenericResponse>('api/signup', user);
//   return response.data;
// };

//login user
// export const loginUserFn = async (user: MyLoginFormValues) => {
//   const response = await baseUrl.post<ILoginResponse>('api/login', user);
//   return response.data;
// };


// logout user
export const logoutUserFn = async () => {
  const response = await baseUrl.get<GenericResponse>('api/logout');
  return response.data;
};


// get current logged in user
export const getMeFn = async () => {
  const response = await baseUrl.get<MyFormResponse>('api/whoami');
  return response.data;
};
