import './messageArea.scss';
import ChatInput from '../../chatInput/chatInput';
import ChatMessages from '../../chatMessages/chatMessages';
import ChatInfoText from '../../chatInfoText/chatInfoText';
import { FC, useEffect, useState } from 'react';
import ChatMessageLoadingIcon from '../../chatMessageLoadingIcon/ChatMessageLoadingIcon';
import { PopupActionType, MessageDataType,  messageActions, messageAreaProps, additionalDataForPopup } from '../../../../types/chats/chatTypes';
import { mockMessages } from './mockMessagesData';


const MessageArea: FC<messageAreaProps> = ({ messagesScrollHeight, handleScroll, blocksCount, loading }) => {
  //clicked message data
  const [messages, setMessages] = useState(mockMessages)
  const [needToAnimateBlock, setNeedToAnimateBlock] = useState<{messageID: string | null, firstLoad: boolean}>({
    messageID: null,
    firstLoad: true
  })
  const [additionalDataForPopup, setAdditionalDataForPopup] = useState<additionalDataForPopup | null>(null)
  const [popupActionType, setPopupActionType] = useState<PopupActionType>({editType: '', value: null, from: null, messageId: null})
  const handleDisplayPopup = (ownerName: string, text: string, time: string, fileExist: boolean) => {
    const objectFromComponent = {
      ownerName,
      text,
      time,
      fileExist
    }
    if(JSON.stringify(objectFromComponent) === JSON.stringify(additionalDataForPopup)) {
      //If the popup is already open, then set the popup to null
      setAdditionalDataForPopup(null)
    }else {
       //If the popup is closed, then set the message data to the value of the popup
       setAdditionalDataForPopup(objectFromComponent)
    }
  }
  const changeEditMessage = (editType: string, value: string | null, from: string | null, messageId: string | null) => {
    setAdditionalDataForPopup(null)
    if(value !== null && from !== null) {
      setPopupActionType({
        editType,
        value,
        from,
        messageId
      })
    }else if(editType === 'Copy') {
      if(value) {
        const input = document.createElement('input');
      input.value = value
      document.body.appendChild(input);
      input.select();
      document.execCommand('copy');
      document.body.removeChild(input)
      }
      setPopupActionType({editType, value: null, from: null, messageId: null})
    }else {
      setPopupActionType({editType, value: null, from: null, messageId: null})

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
          }else {
            return <ChatMessages
            messagesScrollHeight={messagesScrollHeight}
              changeEditMessage={changeEditMessage}
              handleDisplayPopup={handleDisplayPopup}
              additionalDataForPopup={additionalDataForPopup}
              message={message}
              needToAnimateBlock={needToAnimateBlock}
              delay={index * 0.05}
              />
          }
        })}
      </div>

      <ChatInput popupActionType={popupActionType} changeEditMessage={changeEditMessage} handleMessages={handleMessages} messages={messages}/>
    </div>
  );
};

export default MessageArea;
