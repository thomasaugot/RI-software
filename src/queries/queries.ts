import { Navigate } from "react-router-dom";
import { baseUrl } from "../axios/axios";
import { MyFormProps } from "../types/types";



// register method
export const register = async (
  {
    firstName,
    lastName,
    companyLegalName,
    login,
    email,
    password,
    phoneNumber
  }: MyFormProps) => {
  const newData = {
    firstName,
    lastName,
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
