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
export type MessageDataType = {
  owner?: boolean
  ownerName?: string
  time: string
  text?:string
  file?: string
  imgUrl?: string,
  messageId: string | null
  editted?: boolean,
  forwarded?: {
  from: string ,
  message: string,
}
  type: string,

}
export type ChatInputProps = {
  changeEditMessage: (editType: string, value: string | null, from: string | null, messageId: string | null) => void,
  editType: EditMessageType
}
export type MiniPopupProps = {
  changeEditMessage: (editType: string, value: string | null, from: string | null, messageId: string | null) => void,
  message: MessageDataType
}
export type chatMessagePropsType  = {
  handleDisplayPopup: (ownerName: string, text: string, time: string, fileExist: boolean) => void,
  displayPopup: displayPopupData | null,
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
