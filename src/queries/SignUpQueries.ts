
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

// export const verification = async (code: any) => {
//   try {
//     const response = await fetch("http://localhost:5000/api/verification/email/verify", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json"
//       },
//       body: JSON.stringify({
//         code: code
//       }),
//     });
//     console.log(response)
//     if (response.ok === true) {
//       return true
//     }
//     else {
//       return false
//     }
//   }
//   catch (error) {
//     console.error(error);
//     return error
//   }
// }

export const verification = async (code: any) => {
  let data = { code }
  const response = await fetch(`${VerifyRegUrl}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data),
  });
  if (response.ok) {
    const resp = await response.json();
    console.log(resp)
    return resp
  } else {
    return false;
  }
}



