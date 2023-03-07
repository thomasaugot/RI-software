import { navBarResponse } from '../types/navbarTypes';
import { navbarUrl } from '../utils/network';

export const navbar = async (userId: number) => {
  const token = localStorage.getItem('token');
  if(token){
    const response = await fetch(navbarUrl(userId), {
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
      method: 'GET'}).catch((err) => {
        return undefined
      })

    if(response){
      const navbarData: navBarResponse =  await response.json()
      return navbarData.result
    }else{
      return undefined
    }
  }else{
    return undefined
  }
}