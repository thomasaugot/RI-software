// import { MyFormProps } from "../types/types";
// import { registerUrl, VerifyRegUrl } from "../utils/network";

// // register method
// export const register = async (
//   {
//     first_name,
//     last_name,
//     email,
//     password,
//     phone_number
//   }: MyFormProps) => {
//   const data = {
//     first_name,
//     last_name,
//     email,
//     password,
//     phone_number
//   }
//   console.log("new Data", data)
//   try {
//     const response = await fetch(registerUrl, {
//       method: 'POST',
//       body: JSON.stringify(data),
//       headers: {
//         'Content-Type': 'application/json'
//       }
//     });
//     const responceJson = await response.json();
//     console.log(responceJson);
//     return responceJson;
//   } catch (error) {
//     console.error(error);
//     return error;
//   }
// }

// //verify

// export const verification = async (code: number) => {
//   try {
//     console.log(localStorage.getItem("verificationToken"))
//     const response = await fetch(`${VerifyRegUrl}`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json"
//       },
//       body: JSON.stringify({
//         token: localStorage.getItem("verificationToken"),
//         code: code
//       }),
//     });
//     const data = await response.json();
//     if (!response.ok) {
//       throw new Error(data.message);
//     }
//     return { data, error: null, message: 'success' };
//   } catch (error) {
//     console.error(error);
//     return { data: {ok: false}, error, message: 'failed' };
//   }
// }


// // email verification code

// // export const send_verify = async(email: any) => {
// //   try {
// //     const response = await fetch(`${SendVerifyRegUrl}`, {
// //       method: "POST",
// //       headers: {
// //         "Content-Type": "application/json"
// //       },
// //       body: JSON.stringify({email: email}),
// //     })
// //     const data = await response.json();
// //     return data
// //   } catch (error) {
// //     console.error(error);
// //     return error;
// //   }
// // }
export const ss1=1
