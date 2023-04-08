import './chatMessage.scss';
import { chatMessagePropsType } from '../../../types/chats/chatTypes';
import React, { FC, useEffect, useRef, useState } from 'react';
import MiniPopup from '../miniPopup/editMessagePopup';
import ForwardComponent from '../forwardComponent/forwardComponent';
import ChatMessagesTypeTextMessage from '../chatMessagesType/chatMessagesTypeTextMessage';
import ChatMessagesTypeFileMessage from '../chatMessagesType/chatMessagesTypeFileMessage';
import ChatMessagesTypeAudioMessage from '../chatMessagesType/chatMessagesTypeAudioMessage';
const ChatMessages: FC<chatMessagePropsType> = ({messagesScrollHeight,handleDisplayPopup,additionalDataForPopup,message,  changeEditMessage, delay, needToAnimateBlock }) => {
  const {file, text, ownerName,  time, forwarded, editted, audioFile} = message
  const {messageID, firstLoad} = needToAnimateBlock
  const [popupCoords, setPopupCoords] = useState({y: 0, x: 0})

  const blockRef  = useRef<HTMLDivElement>(null);
  const animatedRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const blockElement = blockRef.current;
    //first message loading animation
    setTimeout(() => {
      if(blockElement !== null && firstLoad) {
        blockElement.classList.add('chat-messages-visible');
      }
    }, delay * 1000);
  }, [delay]);
  useEffect(() => {
    const blockElement = animatedRef.current;
    //animation of sended or eddited message
    setTimeout(() => {
      if(blockElement !== null) {
        blockElement.classList.add('chat-messages-visible');
      }
    },  1000);
  }, [needToAnimateBlock])

  const handleRightClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = messagesScrollHeight.current?.getBoundingClientRect() as DOMRect
    const parentWidth = rect.width
    let popupX = e.clientX + 10
    if(popupX + parentWidth > window.innerWidth) {
      popupX = e.clientX - 10 - parentWidth
    }else {
      popupX = e.clientX - 200
    }
    setPopupCoords({x: popupX, y: 0})
    e.preventDefault()
    handleDisplayPopup(
      ownerName ?? '',
      text ?? '',
      time,
      file ? true : false
    )
  }

  const needToDisplayMiniPopup = () => {
    if (
      additionalDataForPopup !== null &&
      additionalDataForPopup.ownerName === ownerName &&
      additionalDataForPopup.text === text &&
      additionalDataForPopup.time === time &&
      file !== undefined &&
      additionalDataForPopup.fileExist
    ) {
      return <MiniPopup changeEditMessage={changeEditMessage} message={message} coords={popupCoords}/>;
    }
    return null;
  };

  //if clicked message include default message data this function will return popup component if there is no data, the function returns nothing
  const needToDisplayMiniPopupWithoutFile = () => {
    if (
      additionalDataForPopup !== null &&
      additionalDataForPopup.ownerName === ownerName &&
      additionalDataForPopup.text === text &&
      additionalDataForPopup.time === time
    ) {
      return <MiniPopup changeEditMessage={changeEditMessage} message={message} coords={popupCoords}/>;
    }
    return null;
  };

  //if clicked message include default message data and file this function will return popup component if there is no data, the function returns nothing
  const needToDisplayForwardMessage = () => {
    if (forwarded?.from) {
      return <ForwardComponent forwarded={forwarded} />;
    }
    return null;
  };

  //if message include forward field function will return forward component if there is no forward field, the function returns nothing
  const needToDisplayEdditedMessage = () => {
    if (editted) {
      return <p className='editted'>Edited</p>;
    }
    return null;
  };
    //if message eddited field function will return eddited block if there is no eddited field, the function returns nothing
  return (
    <div ref={blockRef} key={message.messageId} className={`chat-messages-wrapper ${firstLoad ? 'chat-message-hidden' : ''} ${message.messageId === messageID ? 'chat-message-hidden-anim' : ''}`}>
      {audioFile ? <ChatMessagesTypeAudioMessage message={message} needToDisplayMiniPopupWithoutFile={needToDisplayMiniPopupWithoutFile} needToDisplayForwardMessage={needToDisplayForwardMessage} needToDisplayEdditedMessage={needToDisplayEdditedMessage} handleRightClick={handleRightClick}/> : null}
      {file && audioFile === undefined ? (
        <ChatMessagesTypeFileMessage message={message} needToDisplayMiniPopup={needToDisplayMiniPopup} needToDisplayForwardMessage={needToDisplayForwardMessage} needToDisplayEdditedMessage={needToDisplayEdditedMessage} handleRightClick={handleRightClick}/>
      ) : null}
      {audioFile === undefined && text ? (
        <ChatMessagesTypeTextMessage message={message} needToDisplayMiniPopupWithoutFile={needToDisplayMiniPopupWithoutFile} needToDisplayForwardMessage={needToDisplayForwardMessage} needToDisplayEdditedMessage={needToDisplayEdditedMessage} handleRightClick={handleRightClick}/>
      ) : null}
    </div>
  );
};

export default ChatMessages;
