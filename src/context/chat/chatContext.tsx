import { createContext, useState, FC } from "react";
import { chat, chatProviderProps, contextMenuType } from '../../types/context/chatContextTypes';
import { actionType, actions } from '../../types/chats/actionsType';
export const ChatContext = createContext<chat>({} as chat);

const ChatProvider: FC<chatProviderProps> = ({ children }) => {
  const [chatId, setChatId] = useState<number>();
  const [contextMenu, setContextMenu] = useState<null | contextMenuType>(null)
  const [actionType, setActionType] = useState<actionType>({ actionType: actions.SEND, messageId: undefined })
  return (
    <ChatContext.Provider value={{
      chatId,
      setChatId,
      contextMenu,
      setContextMenu,
      actionType,
      setActionType
    }}>
      {children}
    </ChatContext.Provider>
  )
}

export default ChatProvider;
