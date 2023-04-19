import { userMessageType, systemMessageType, messageTypes, messageStatus } from '../../../../types/chats/messagesTypes'

export const mockMessages: Array<userMessageType | systemMessageType> = [
    
    {
      senderId: undefined,
      messageId: undefined,
      type: messageTypes.DATE,
      text: "Today"
    },
    {
      senderId: 1,
      time: '21:21',
      text: 'Hello guysHello guysHello guysHello guysHello guysHello guysHello guysHello guysHello guysHello guysHello guysHello guysHello guysHello guysHello guysHello guysHello guysHello guysHello guys',
      file: [{file: 'some', fileName: 'randomFile.word', fileType: 'word'}, {file: 'some', fileName: 'randomFile.word', fileType: 'word'}, {file: 'some', fileName: 'randomFile.word', fileType: 'word'}, {file: 'some', fileName: 'randomFile.word', fileType: 'word'}],
      messageId: 1,
      edited: false,
      forwarded: null,
      replied: null,
      type: messageTypes.USER,
      status: messageStatus.SENDING
    },
    {
      senderId: 2,
      time: '21:21',
      text: '333ddd',
      file: [{file: 'some', fileName: 'randomFile.pdf', fileType: 'pdf'}],
      messageId: 1,
      edited: false,
      forwarded: null,
      replied: null,
      type: messageTypes.STRANGER,
      status: messageStatus.SENT
    },
    {
      senderId: 2,
      time: '21:21',
      text: '333ddd',
      file: [{file: 'some', fileName: 'randomFile.pdf', fileType: 'pdf'}],
      messageId: 1,
      edited: false,
      forwarded: null,
      replied: null,
      type: messageTypes.STRANGER,
      status: messageStatus.SENDING
    },
    {
      senderId: 1,
      time: '21:21',
      text: 'some',
      file: [],
      messageId: 1,
      edited: false,
      forwarded: null,
      replied: null,
      type: messageTypes.USER,
      status: messageStatus.SENT
    },
  ]
