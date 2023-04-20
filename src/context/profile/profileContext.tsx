import { createContext, useState, FC } from "react";
import { profile, profileProviderProps } from '../../types/context/profileContextTypes';
export const ProfileContext = createContext<profile>({} as profile);

const ProfileProvider: FC<profileProviderProps> = ({ children }) => {
  const [isAvatarChangeModalOpen, setisAvatarChangeModalOpen] = useState(false)
  const [isCutomizeAvatarModalOpen, setisCutomizeAvatarModalOpen] = useState(false)
  const [avatarFile, setAvatarFile] = useState<null | File>(null)
  const [imgUrl, setImgUrl] = useState('')
  return (
    <ProfileContext.Provider value={{
      isAvatarChangeModalOpen,
      setisAvatarChangeModalOpen,
      isCutomizeAvatarModalOpen,
      setisCutomizeAvatarModalOpen,
      avatarFile,
      setAvatarFile,
      imgUrl,
      setImgUrl
    }}>
      {children}
    </ProfileContext.Provider>
  )
}

export default ProfileProvider;
