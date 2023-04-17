import { actions, actionType } from './../chats/actionsType';
import { Dispatch, SetStateAction } from "react";
import { userMessageType } from '../chats/messagesTypes';
export type contextMenuType = {
  display: boolean,
  coords: {
    x: number,
    y: number
  },
  message: userMessageType
}

export type chat = {
  chatId: number | undefined,
  setChatId: Dispatch<SetStateAction<number | undefined>>,
  contextMenu: contextMenuType | null,
  setContextMenu: Dispatch<SetStateAction<contextMenuType | null>>,
  actionType: actionType,
  setActionType: Dispatch<SetStateAction<actionType>>
}

export type chatProviderProps = {
  children: React.ReactNode
}
