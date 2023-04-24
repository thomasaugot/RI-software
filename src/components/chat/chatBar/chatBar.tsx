import { useContext, useEffect, useRef, useState } from 'react';
import './chatBar.scss';
import ChatBarCard from './chatBarCard/chatBarCard';
import ChatBarHeader from './chatBarHeader/chatBarHeader';
import { ModalsContext } from '../../../context/modalsContext';
import { useInfiniteScroll } from '../../../customHooks/useInfiniteScroll';
import { chats } from './chatBarHeader/mockChats';

const ChatBar = () => {
  const { chatSearchInput } = useContext(ModalsContext)
  const [userScrollPosition, setUserScrollPostion] = useState(0)
  const [chatsConteinerHeight, setChatsConteinerHeight] = useState(0)
  const chatsConteiner = useRef<HTMLDivElement>(null)
  const { count, loading } = useInfiniteScroll(chatsConteinerHeight, userScrollPosition, 100, 20)
  useEffect(() => {
    if (chatsConteiner && chatsConteiner.current) {
      setChatsConteinerHeight(chatsConteiner.current.scrollHeight - 1500)
    }
  }, [count])
  return (
    <div className="chat-bar-container">
      <ChatBarHeader />
      <div ref={chatsConteiner} onScroll={(e: React.UIEvent<HTMLDivElement>) => setUserScrollPostion((e.target as HTMLDivElement).scrollTop)} className="chat-bar-chats-container">
        {loading ? 'loading...' : chats.slice(0, count)
          .filter((chat) => chat.name.toLowerCase().includes(chatSearchInput.toLowerCase()) || chat.text.toLowerCase().includes(chatSearchInput.toLowerCase()))
          .map((chat) => <ChatBarCard
            avatar={chat.avatar}
            name={chat.name}
            text={chat.text}
            notifications={chat.notifications}
            chatId={chat.chatId} />,)}
      </div>
    </div>
  );
};

export default ChatBar;
