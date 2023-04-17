import './chat.scss';
import ChatDesktop from '../../components/chat/chatDesktop/chatDesktop';
import ChatBarHeader from "../../components/chat/chatBar/chatBarHeader/chatBarHeader";
import ChatBar from "../../components/chat/chatBar/chatBar";
import { useEffect, useRef, useState, useContext } from 'react';
import { chatByIdResponse } from '../../types/chats/generalTypes';
import { chatHeaderProps } from '../../types/chats/chatHeaderTypes';
import { chatMessageType } from '../../types/chats/messagesTypes';
import { useInfiniteScroll } from '../../customHooks/useInfiniteScroll';
import { authorizedRequest } from '../../utils/queries';
import { chatInfoById } from '../../utils/network';

import { profile } from '../../assets/Icons';
import { ChatContext } from '../../context/chat/chatContext';
import ChatBaseLayout from '../../layouts/ChatBaseLayout/ChatBaseLayout';
import CreateGroupChat from '../../Modals/chat/createGroupChat/createGroupChat';


const Chat = () => {
  const [userChat, setUserChat] = useState<chatByIdResponse>();
  const [messages, SetMessages] = useState<chatMessageType[]>()
  const [chatHeader, setChatHeader] = useState<chatHeaderProps>();
  const [currentUserHeight, setCurrentUserHeight] = useState<number>(0)
  const messagesScrollHeight = useRef<HTMLDivElement>(null)
  const blockHeight = messagesScrollHeight.current !== null ? messagesScrollHeight.current.scrollHeight : 100000
  const { count, loading } = useInfiniteScroll(blockHeight, currentUserHeight, 100, 20);
  const { chatId } = useContext(ChatContext);


  console.log(chatHeader)
  console.log(chatHeader ? 1 : 0)

  const handleScroll = () => {
    const currentHeight = messagesScrollHeight.current
    if (currentHeight) {
      setCurrentUserHeight(currentHeight.scrollTop)
    }
  }

  return (
    <ChatBaseLayout>
      <div className="chat-container">
        {/* <ChatHeader
            imgUrl={userChat && userChat.result.peer.avatar ? userChat.result.peer.avatar : "/dwofmw"}
            name={userChat ? userChat.result.peer.name : 'Ivan'}
            status="online"
          <MessageArea
            loading={loading}
            blocksCount={count}
            messagesScrollHeight={messagesScrollHeight}
            handleScroll={handleScroll}
          /> */}
        <div className='chat-container-layout'>
          {/* { chatHeader ?
              <ChatHeader
                avatar={chatHeader.avatar}
                name={chatHeader.name}
                status={chatHeader.status}
              />
              : null
            }
            { messages ?
              <MessageArea
                loading={loading}
                blocksCount={count}
                messagesScrollHeight={messagesScrollHeight}
                handleScroll={handleScroll}
              />
              : null
            } */}
          {
            chatId ?
              <ChatDesktop />
              :
              null
          }
        </div>
        <ChatBar />
      </div>
      <CreateGroupChat />
    </ChatBaseLayout>
  );
};

export default Chat;
