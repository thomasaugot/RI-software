import './chatMessage.scss';
import { chatMessagePropsType } from '../../../types/chats/chatTypes';
import { getFile } from '../../../queries/chat.queries';
import ChatMessageLoadingIcon from '../chatMessageLoadingIcon/ChatMessageLoadingIcon';
import React, { FC, useEffect, useRef, useState } from 'react';
import MiniPopup from '../miniPopup/editMessagePopup';
import ForwardComponent from '../forwardComponent/forwardComponent';
import { profile } from '../../../assets/Icons';

const ChatMessages: FC<chatMessagePropsType> = ({messagesScrollHeight,handleDisplayPopup,additionalDataForPopup,message,  changeEditMessage, delay, needToAnimateBlock }) => {
  const {file, text, ownerName, owner, time, imgUrl,  forwarded, editted} = message
  const {messageID, firstLoad} = needToAnimateBlock
  const fileTypeIcon = getFile(file as string);
  const blockRef  = useRef<HTMLDivElement>(null);
  const animatedRef = useRef<HTMLDivElement>(null)
  const [popupCoords, setPopupCoords] = useState({y: 0, x: 0})
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
      {file ? (
        <>
          {owner ? (
              <div  className={`file-message-wrapper  file-yes ${ needToDisplayMiniPopup() ? 'miniPopup-parent' : ''} ${forwarded ? 'forwarded-message' : ''}`} onContextMenu={handleRightClick} >
              {needToDisplayMiniPopup()}
              {needToDisplayForwardMessage()}
              <div className='file-message-container'>
                <div className='file-type'>
                  <div className="file">{fileTypeIcon}</div>
                  <p>file.name</p>
                </div>
                <p className='file-text'>{text}</p>
              </div>
              <div className="sent-data">
                {needToDisplayEdditedMessage()}
                <p className='time'>{time}</p>
                {<ChatMessageLoadingIcon />}
              </div>
            </div>
          ) : (
            <div  className={`stranger-owner  ${needToDisplayMiniPopup() ? 'miniPopup-parent' : ''} ${forwarded ? 'forwarded-message' : ''}`} onContextMenu={handleRightClick}>
              {needToDisplayMiniPopup()}
              {needToDisplayForwardMessage()}
              {imgUrl ?  <img src={imgUrl} alt={ownerName} className="icon" /> : <span className="icon">{profile}</span>}
              <div className='file-message-wrapper'>
                <div className='file-message-container'>

                  <div className='file-type'>
                    <div className="file">{fileTypeIcon}</div>
                    <p>file.name</p>
                  </div>
                  <p className='file-text'>{text}</p>
                </div>
                <div className="sent-data">
                {needToDisplayEdditedMessage()}
                  <p className='time'>{time}</p>
                  {<ChatMessageLoadingIcon />}
                </div>
              </div>
            </div>
          )}
        </>
      ) : (
        <>
          {owner ? (
            <div className={`chat-message-wrapper  yes ${needToDisplayMiniPopupWithoutFile()  ? 'miniPopup-parent' : ''} ${forwarded ? 'forwarded-message' : ''}`} onContextMenu={handleRightClick}>
              {needToDisplayMiniPopupWithoutFile()}
              {needToDisplayForwardMessage()}
              <div className='chat-message-container'>
                <div className='sent-data'>
                {needToDisplayEdditedMessage()}
                  <p className='message-owner'>{ownerName}</p>
                  <p className='time'>{time}</p>
                </div>
                <div className='file-type'></div>
                <p className='message-text'>{text}</p>
              </div>
            </div>
          ) : (
            <div  className={`stranger-owner  ${needToDisplayMiniPopupWithoutFile()  ? 'miniPopup-parent' : ''}`} onContextMenu={handleRightClick}>
               {needToDisplayMiniPopupWithoutFile()}
               {needToDisplayForwardMessage()}
               {imgUrl ?  <img src={imgUrl} alt={ownerName} className="icon" /> : <span className="icon">{profile}</span>}
              <div className={`chat-message-wrapper ${forwarded ? 'forwarded-message' : ''}`}>
                <div className='chat-message-container'>
                  <div className='sent-data'>
                  {needToDisplayEdditedMessage()}
                    <p className='message-owner'>{ownerName}</p>
                    <p className='time'>{time}</p>
                  </div>
                  <div className='file-type'></div>
                  <p className='message-text'>{text}</p>
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default ChatMessages;
