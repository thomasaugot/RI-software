import { LoginType, navBarResponse, workerResponse } from "../types/types";

const baseURl = 'http://127.0.0.1:5000';
const token = localStorage.getItem('token')

export const login =  async ({email, password}:LoginType)=>{
    let data = {
        email,
        password
      }
    const response = await fetch(`${baseURl}/api/login`,{
        method: 'POST',
        body: JSON.stringify(data),
        headers: { 
          "Content-Type": "application/json"
        }
      });
      // response.json().then(data => {
      //   console.log(data)
      // })
    return response
}


export const searkWorks = async (needle:string) => {
  let page_num = 1;
  let results_per_page=10;
  const data = {
    needle,
    results_per_page,
    page_num
  }
  const response = await fetch(`${baseURl}/api/search/workers`,{
    headers:{
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`
    },
    method: 'POST',
    body: JSON.stringify(data)
  })

  const workers: workerResponse = await response.json()
  return workers
}

export const navbars = async (userId: number) => {
  console.log(token)
  const response = await fetch(`${baseURl}/api/navbar/${userId}`, {
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`,
    },
    method: 'GET'});
  const navbarData: navBarResponse =  await response.json()
  console.log(navbarData.result)
  return navbarData.result

}