import { Navigate } from "react-router-dom";
import { MyFormProps } from "../types/types";
import { RegisterUrl } from "../utils/network";



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
  try {
    const response = await fetch(`${RegisterUrl}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newData)
    });
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
    return error;
  }
}
