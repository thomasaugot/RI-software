import { pdfFile, wordFile, excelFile, powerpointFile, zipFile } from "../assets/Icons";
import { mockMessages } from '../components/chat/chatBar/messageArea/mockMessagesData';
import { whoAMiResponse } from '../types/types';
import { chatInfoById, sendChatMessageUrl, whoAmIUrl } from '../utils/network';

export const FILE_TYPE_ICON = {
  pdf: 'pdf',
  word: 'word',
  excel: 'excel',
  powerpoint: 'powerpoint',
  zip: 'zip'
}

export const getFile = (fileType: string) =>
({
  [FILE_TYPE_ICON.pdf]: pdfFile,
  [FILE_TYPE_ICON.word]: wordFile,
  [FILE_TYPE_ICON.excel]: excelFile,
  [FILE_TYPE_ICON.powerpoint]: powerpointFile,
  [FILE_TYPE_ICON.zip]: zipFile,

}[fileType])

export const getChatById = async () => {
  const userId = localStorage.getItem("userId")
  const accesToken = localStorage.getItem("accessToken")
  if (userId && accesToken) {
    const response = await fetch(chatInfoById(userId), {
      method: 'GET',
      headers: {
        'Content-Type': "application/json",
        Authorization: `Bearer ${accesToken}`
      },
    })
    const data = await response.json()
    return data
  }
  return null
}
export const sendChatMessage = async (id: string, message: string) => {
  const accesToken = localStorage.getItem("accessToken")
  const dateNow = new Date()
  const hours = dateNow.getHours()
  const minutes = dateNow.getMinutes()
  // const whoAmIResponse = await fetch(whoAmIUrl, {
  //   method: 'GET',
  //   headers: {
  //     'Content-Type': "application/json",
  //     Authorization: `Bearer ${accesToken}`
  //   }
  // })
  // const whoAmIData: whoAMiResponse = await whoAmIResponse.json()
  const body = {
    type: 'message',
    owner: true,
    ownerName: "You",
    time: `${hours}:${minutes}`,
    text: message,
  }
  mockMessages.unshift(body)
  // const response = await fetch(sendChatMessageUrl(id, message), {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json',
  //     Authorization: `Bearer ${accesToken}`,
  //   },
  //   body: JSON.stringify({})
  // })
  // if (response.status === 200) {
  //   return await response.json();
  // } else {
  //   return response.status
  // }
}
