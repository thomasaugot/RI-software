import { LoginType } from "../types";

const baseURl = process.env.REACT_APP_URL;

export const login =  async ({email, password}:LoginType)=>{
    let data = {
        email,
        password
      }
    const response = await fetch(`${baseURl}/api/login`,{
        method: 'POST',
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" }
      });
    return response
}