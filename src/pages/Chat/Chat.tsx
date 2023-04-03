import ChatHeader from "../../components/chat/chatHeader/chatHeader";
import MessageArea from "../../components/chat/chatBar/messageArea/messageArea";
import ChatBarHeader from "../../components/chat/chatBarHeader/chatBarHeader";
import ChatBar from "../../components/chat/chatBar/chatBar";
import './Chat.scss';
import { useEffect, useRef, useState } from 'react';
import { ChatByIdResponse } from '../../types/chats/chatTypes';
import { useInfiniteScroll } from '../../customHooks/useInfiniteScroll';
import { authorizedRequest } from '../../utils/queries';
import { chatInfoById } from '../../utils/network';
import ChatBaseLayout from '../../layouts/ChatBaseLayout/ChatBaseLayout';
import { profile } from '../../assets/Icons';

const Chat = () => {
  const [userChat, setUserChat] = useState<ChatByIdResponse>()
  const [currentUserHeight, setCurrentUserHeight] = useState<number>(0)
  const messagesScrollHeight = useRef<HTMLDivElement>(null)
  const blockHeight = messagesScrollHeight.current !== null ? messagesScrollHeight.current.scrollHeight : 100000
  const { count, loading } = useInfiniteScroll(blockHeight, currentUserHeight, 100, 20)
  useEffect(() => {
    // getChatById().then((data) => setUserChat(data))
    const employeeId = localStorage.getItem('employeeId')
    if (employeeId !== null) {
      authorizedRequest(chatInfoById(employeeId), "GET").then((data) => setUserChat(data))
    }
  }, [])
  const handleScroll = () => {
    const currentHeight = messagesScrollHeight.current
    if (currentHeight) {
      setCurrentUserHeight(currentHeight.scrollTop)
    }
  }
  return (
    <ChatBaseLayout>
      <div className="chat-container">
        <div className='chat-container-layout'>
          <ChatHeader
            imgUrl={userChat && userChat.result.peer.avatar ? userChat.result.peer.avatar : ''}
            name={userChat ? userChat.result.peer.name : 'Ivan'}
            status="online" />
          <MessageArea loading={loading}
            blocksCount={count}
            messagesScrollHeight={messagesScrollHeight}
            handleScroll={handleScroll} />
        </div>
        <div>
          <ChatBarHeader />
          <ChatBar />
        </div>
      </div>
    </ChatBaseLayout>
  );
};

export default Chat;
