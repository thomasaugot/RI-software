export type ChatHeaderTypes = {
  imgUrl: string,
  name: string,
  status: string
}

export type chatMessagePropsType = {
  owner?: boolean,
  time: string,
  text?: string,
  ownerName?: string,
  file?: string,
  imgUrl?: string
}

export type ChatCardTypes = {
  imgUrl?: string,
  text: string,
  name: string,
  notif?: number
}
export interface messageAreaProps {
  messagesScrollHeight: React.RefObject<HTMLDivElement>,
  handleScroll: () => void,
  blocksCount: number,
  loading: boolean
}

export interface ChatByIdResponse {
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
