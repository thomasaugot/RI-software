import { userMessageType, systemMessageType, messageTypes } from '../../../../types/chats/messagesTypes'

export const mockMessages: Array<userMessageType | systemMessageType> = [
    
    {
      senderName: null,
      messageId: undefined,
      type: messageTypes.DATE,
      text: "Today"
    },
    {
      senderName: 'You',
      time: '21:21',
      text: 'Hello guysHello guysHello guysHello guysHello guysHello guysHello guysHello guysHello guysHello guysHello guysHello guysHello guysHello guysHello guysHello guysHello guysHello guysHello guys',
      file: [{file: 'some', fileName: 'randomFile.word', fileType: 'word'}, {file: 'some', fileName: 'randomFile.word', fileType: 'word'}, {file: 'some', fileName: 'randomFile.word', fileType: 'word'}, {file: 'some', fileName: 'randomFile.word', fileType: 'word'}],
      messageId: 1,
      edited: false,
      forwarded: null,
      replied: null,
      type: messageTypes.USER
    },
    {
      senderName: 'not you',
      time: '21:21',
      text: '333ddd',
      file: [{file: 'some', fileName: 'randomFile.pdf', fileType: 'pdf'}],
      messageId: 1,
      edited: false,
      forwarded: null,
      replied: null,
      type: messageTypes.STRANGER
    },
    {
      senderName: 'not you',
      time: '21:21',
      text: '333ddd',
      file: [{file: 'some', fileName: 'randomFile.pdf', fileType: 'pdf'}],
      messageId: 1,
      edited: false,
      forwarded: null,
      replied: null,
      type: messageTypes.STRANGER
    },
  ]
