import './chatDesktop.scss';
import { FC, useEffect, useContext, useState, useRef } from 'react';
import MessageArea from './messageArea/messageArea';
import ChatHeader from './chatHeader/chatHeader';
import ChatInput from './chatInput/chatInput';
import { ChatContext } from '../../../context/chat/chatContext';
import { chatHeaderProps } from '../../../types/chats/chatHeaderTypes';
import { mockMessages } from './messageArea/mockMessagesData';
import { actions, actionType } from '../../../types/chats/actionsType';
import { userMessageType } from '../../../types/chats/messagesTypes';
import { useInfiniteScroll } from '../../../customHooks/useInfiniteScroll';

const ChatDesktop: FC = () => {
  const [chatHeader, setChatHeader] = useState<chatHeaderProps>({
    avatar: null,
    name: '',
    status: ''
  });


  // const { count, loading } = useInfiniteScroll(blockHeight, currentUserHeight, 100, 20);

  const [loading, setLoading] = useState(false);
  const messageAreaContainer = useRef<null | HTMLDivElement>(null); // horizontal scrolling element

  const scrollHandler = () => {
    console.log(messageAreaContainer)
  }


  const { chatId, setChatMembers } = useContext(ChatContext);

  const [messages, setMessages] = useState(mockMessages);
  const [needToAnimateBlock, setNeedToAnimateBlock] = useState<{ messageId: number | null | undefined, firstLoad: boolean }>({
    messageId: null,
    firstLoad: true
  })



  useEffect(() => {
    if (chatId) {
      setChatHeader({
        avatar: null,
        name: 'randomrandomrandomrandomrandomrandomrandomrandomrandomrandomrandomrandomrandomrandom',
        status: 'offline'
      })

      setChatMembers([
        {employeeId: 1, avatar: 'sss', name: 'sd22'}, 
        {employeeId: 2, avatar: null, name: 'sd22333'}, 
        ])
    }
  }, [chatId])

  // Handle editing of messages

  // Handle adding, deleting, and editing of messages
  const submitMessage = (action: actions, message: userMessageType) => {
    if (action === actions.SEND || action === actions.REPLY) {
      setNeedToAnimateBlock({ messageId: message.messageId, firstLoad: false })
      setMessages([message, ...messages])
    }
    if (action === actions.DELETE) {
      setMessages(messages.filter((item) => item.messageId !== message.messageId))
      setNeedToAnimateBlock({ messageId: message.messageId, firstLoad: false })
    }
    if (action === actions.EDIT) {
      setMessages(messages.map((item) => {
        if (item.messageId === message.messageId) {
          setNeedToAnimateBlock({ messageId: message.messageId, firstLoad: false })
          return message
        } else {
          return item
        }
      }))
    }

  }

  return (
    <div className="chat-desktop">
      <ChatHeader
        avatar={chatHeader.avatar}
        name={chatHeader.name}
        status={chatHeader.status}
      />

      <MessageArea
        loading={loading}
        // blocksCount={count}
        messageAreaContainer={messageAreaContainer}
        scrollHandler={scrollHandler}
        messages={messages}
      />

      <ChatInput submitMessage={submitMessage} messages={messages} />
    </div>
  )
}

export default ChatDesktop;
