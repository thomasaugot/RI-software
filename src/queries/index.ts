import { Navigate } from "react-router-dom";
import { baseUrl } from "../axios";
import { MyFormValues } from "../types";



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
