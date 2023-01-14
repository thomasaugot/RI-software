import { codeProps } from './../types/types';
import { Navigate } from "react-router-dom";
import { MyFormProps } from "../types/types";
import { RegisterUrl, VerifyRegUrl } from "../utils/network";



// register method
export const register = async (
  {
    firstName,
    lastName,
    email,
    password,
    phoneNumber
  }: MyFormProps) => {
  const newData = {
    firstName,
    lastName,
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

//verify

export const verify = () => async (
  {
    code,
  }: codeProps) => {
  const confirmData = {

    code,

  }
  console.log("new Data", confirmData)
  try {
    const response = await fetch(`${VerifyRegUrl}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(confirmData),
    })
    const data = await response.json();
    return data
  } catch (error) {
    console.error(error);
    return error;
  }
}
