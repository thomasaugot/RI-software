import './messageArea.scss';
import ChatInput from '../../chatInput/chatInput';
import ChatMessages from '../../chatMessages/chatMessages';
import ChatInfoText from '../../chatInfoText/chatInfoText';
import { FC, useState } from 'react';
import ChatMessageLoadingIcon from '../../chatMessageLoadingIcon/ChatMessageLoadingIcon';
import { EditMessageType, MessageDataType, displayPopupData, messageActions, messageAreaProps } from '../../../../types/chats/chat.types';
import { mockMessages } from './mockMessagesData';


const MessageArea: FC<messageAreaProps> = ({ messagesScrollHeight, handleScroll, blocksCount, loading }) => {
  //clicked message data
  const [messages, setMessages] = useState(mockMessages)
  const [needToAnimateBlock, setNeedToAnimateBlock] = useState<{messageID: string | null, firstLoad: boolean}>({
    messageID: null,
    firstLoad: true
  })
  const [displayPopup, setDisplayPopup] = useState<displayPopupData | null>(null)
  const [editType, setEditType] = useState<EditMessageType>({editType: '', value: null, from: null, messageId: null})
  const handleDisplayPopup = (ownerName: string, text: string, time: string, fileExist: boolean) => {
    const objectFromComponent = {
      ownerName,
      text,
      time,
      fileExist
    }
    if(JSON.stringify(objectFromComponent) === JSON.stringify(displayPopup)) {
      //If the popup is already open, then set the popup to null
      setDisplayPopup(null)
    }else {
       //If the popup is closed, then set the message data to the value of the popup
      setDisplayPopup(objectFromComponent)
    }
  }
  const changeEditMessage = (editType: string, value: string | null, from: string | null, messageId: string | null) => {
    setDisplayPopup(null)
    if(value !== null && from !== null) {
      setEditType({
        editType,
        value,
        from,
        messageId
      })
    }else {
      setEditType({editType, value: null, from: null, messageId: null})
    }
  }
  const handleMessages = (action: string, body: MessageDataType) => {
    if(action === messageActions.ADD) {
      setNeedToAnimateBlock({messageID: body.messageId, firstLoad: false})
      setMessages([body , ...messages])
    }
    if(action === messageActions.DELETE) {
      setMessages(messages.filter((item) => item.messageId !== body.messageId))
      setNeedToAnimateBlock({messageID: body.messageId, firstLoad: false})
    }
    if(action === messageActions.EDIT) {
      setMessages(messages.map((item) => {
        if(item.messageId === body.messageId) {
          setNeedToAnimateBlock({messageID: body.messageId, firstLoad: false})
          return body
        }else {
          return item
        }
      }))
    }
  }

  return (
    <div className="message-area">
      <div className='messages' ref={messagesScrollHeight} onScroll={handleScroll} onClick={() => {
        handleDisplayPopup('', '', '', false)
      }}>
        {loading ? <div className='loading-messages'><ChatMessageLoadingIcon /></div> : null}
        {messages.slice(0, blocksCount).map((message, index) => {
          if (message.type === 'Date') {
            return <ChatInfoText text={message.time} />
          }
          if (message.type === 'message') {
            return <ChatMessages
            messagesScrollHeight={messagesScrollHeight}
              changeEditMessage={changeEditMessage}
              handleDisplayPopup={handleDisplayPopup}
              displayPopup={displayPopup}
              message={message}
              needToAnimateBlock={needToAnimateBlock}
              delay={index * 0.05}
              />
          }
          return null
        })}
      </div>

      <ChatInput editType={editType} changeEditMessage={changeEditMessage} handleMessages={handleMessages} messages={messages}/>
    </div>
  );
};

export default MessageArea;
