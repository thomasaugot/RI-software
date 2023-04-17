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

export type userMessageType = {
  senderName: string,
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
  type: messageTypes
}

export type systemMessageType = {
  senderName: null,
  messageId: number | undefined,
  text: string,
  type: messageTypes
}

export type chatMessageType = userMessageType | systemMessageType;

export type fileMessageProps = {
  fileData: chatFile
}