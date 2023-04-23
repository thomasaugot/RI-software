export enum messageTypes {
  DATE = 'DATE',
  USER = 'USER',
  STRANGER = 'STRANGER'
}

export type chatFile = {
  file: Blob | string,
  fileName: string,
  fileType: string
}

export enum messageStatus {
  SENDING = 'SENDING',
  SENT = 'SENT',
  READ = 'READ'
}

export type userMessageType = {
  senderId: number | undefined,
  time: string,
  text: string,
  file: chatFile[],
  messageId: number | undefined,
  edited: boolean,
  forwarded: {
    from: string,
    message: string
  } | null,
  replied: {
    toMessageId: number,
    message: string,
  } | null,
  type: messageTypes,
  status: messageStatus
}

export type systemMessageType = {
  senderId: undefined,
  messageId: number | undefined,
  text: string,
  type: messageTypes
}

export type chatMessageType = userMessageType | systemMessageType;

export type fileMessageProps = {
  fileData: chatFile
}