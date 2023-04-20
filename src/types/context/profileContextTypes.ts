import { Dispatch, SetStateAction } from 'react'
import { actionType } from '../chats/actionsType'
import { contextMenuType } from './chatContextTypes'

export type profile = {
  isAvatarChangeModalOpen: boolean,
  setisAvatarChangeModalOpen: Dispatch<SetStateAction<boolean>>,
  isCutomizeAvatarModalOpen: boolean,
  setisCutomizeAvatarModalOpen: Dispatch<SetStateAction<boolean>>,
  avatarFile: File | null,
  setAvatarFile: Dispatch<SetStateAction<File | null>>,
  imgUrl: string
  setImgUrl: Dispatch<SetStateAction<string>>
}

export type profileProviderProps = {
  children: React.ReactNode
}
