export type ChatHeaderTypes = {
  imgUrl: string,
  name: string,
  status: string
}
export type displayPopupData = {
  ownerName: string, text: string, time: string, fileExist: boolean
}
export type EditMessageType = {
  editType: string,
  value: string | null,
  from: string | null,
  messageId: string | null
}
export type ForwardMessageProps = {
  forwarded: {
    from: string ,
    message: string,
  }
}
export type ForwardMessage = {
  forwarded?: {
    from: string ,
    message: string,
  }
}

export type MessageDataType = {
  owner?: boolean
  ownerName?: string
  time: string
  text?:string
  file?: string
  imgUrl?: string,
  messageId: string | null
  editted?: boolean,
  type: string,

} & ForwardMessage
export enum messageActions {
  DELETE = 'DELETE',
  ADD = 'ADD',
  EDIT = 'EDIT'
}
export type ChatInputProps = {
  changeEditMessage: (editType: string, value: string | null, from: string | null, messageId: string | null) => void,
  editType: EditMessageType,
  handleMessages: (action: string, body: MessageDataType) => void,
  messages: MessageDataType[]
}
export type MiniPopupProps = {
  changeEditMessage: (editType: string, value: string | null, from: string | null, messageId: string | null) => void,
  message: MessageDataType,

}
export type chatMessagePropsType  = {
  handleDisplayPopup: (ownerName: string, text: string, time: string, fileExist: boolean) => void,
  displayPopup: displayPopupData | null,
  delay: number,
  needToAnimateBlock: {messageID: string | null, firstLoad: boolean},
  messagesScrollHeight: React.RefObject<HTMLDivElement>
} & MiniPopupProps

export type ChatCardTypes = {
  imgUrl?: string,
  text: string,
  name: string,
  notif?: number
}
export type messageAreaProps = {
  messagesScrollHeight: React.RefObject<HTMLDivElement>,
  handleScroll: () => void,
  blocksCount: number,
  loading: boolean
}

export type ChatByIdResponse = {
  ok: boolean,
  description: string,
  result: {
    from: {
      employee_id: number,
      user_id: number,
      position: string,
      name: string,
      avatar: string | null,
    },
    peer: {
      employee_id: number,
      user_id: number,
      position: string,
      name: string,
      avatar: string | null,
    },
    date: number,
    chat_id: number,
    company_id: number,
    title: string | null,
    owner_id: number | null,
    description: string | null,
    type: string,
    from_id: number,
    peer_id: number
  }
}
