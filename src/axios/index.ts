
import axios from 'axios'
import { ILoginResponse } from '../queries/types';

const BASE_URL = 'http://localhost:5000/';

export const baseUrl = axios.create({
    baseURL: BASE_URL,
    withCredentials: true,
})

baseUrl.defaults.headers.common['Content-Type'] = 'application/json';


export const refreshAccessTokenFn = async () => {
  const response = await baseUrl.get<ILoginResponse>('api/refresh');
  return response.data;
};

baseUrl.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;
    const errMessage = error.response.data.message as string;
    if (errMessage.includes('not logged in') && !originalRequest._retry) {
      originalRequest._retry = true;
      await refreshAccessTokenFn();
      return baseUrl(originalRequest);
    }
    return Promise.reject(error);
  }
);
