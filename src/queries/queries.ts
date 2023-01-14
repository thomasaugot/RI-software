import { codeProps, EmailProps } from './../types/types';
import { Navigate } from "react-router-dom";
import { MyFormProps } from "../types/types";
import { RegisterUrl, VerifyRegUrl } from "../utils/network";



// register method
export const register = async (
  {
    first_name,
    last_name,
    email,
    password,
    phone_number
  }: MyFormProps) => {
  const newData = {
    first_name,
    last_name,
    email,
    password,
    phone_number
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


export const verification = async (code: any) => {
  try {
    const response = await fetch(`${VerifyRegUrl}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        code: code
      }),
    });
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.message);
    }
    return { data, error: null, message: 'success' };
  } catch (error) {
    console.error(error);
    return { data: null, error, message: 'failed' };
  }
}


// email verification code

// export const send_verify = async(email: any) => {
//   try {
//     const response = await fetch(`${SendVerifyRegUrl}`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json"
//       },
//       body: JSON.stringify({email: email}),
//     })
//     const data = await response.json();
//     return data
//   } catch (error) {
//     console.error(error);
//     return error;
//   }
// }

