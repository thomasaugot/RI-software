import { mockMessages } from '../components/chat/chatBar/messageArea/mockMessagesData';
import { chatInfoById } from './network';

export const authorizedRequest = async (url: string, method: string, tokenType: string = 'accessToken', body?: object) => {
  const token = localStorage.getItem(tokenType);

  console.log(body)
  console.log(tokenType)
  console.log(token)

  const request: object = body ? {
    method: method,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(body)
  } : {
    method: method,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    }
  }

  const response = await fetch(url, request);

  console.log(response)

  if (response.status === 200) {
    return await response.json();
  } else if (response.status === 401) {
    window.location.href = 'http://127.0.0.1:3000/';
    return response.status;
  } else {
    return response.status;
  }

}

export const unauthorizedRequest = async (url: string, method: string, body?: object) => {
  const request: object = body ? {
    method: method,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body)
  } : {
    method: method,
    headers: {
      'Content-Type': 'application/json',
    }
  }

  console.log(body)
  console.log(request)

  const response = await fetch(url, request);

  if (response.status === 200) {
    return await response.json();
  } else {
    return response.status
  }
}
