import './chatMessage.scss';
import { chatMessagePropsType } from '../../../types/chats/chat.types';
import { getFile } from '../../../queries/chat.queries';
import ChatMessageLoadingIcon from '../chatMessageLoadingIcon/ChatMessageLoadingIcon';
import React, { FC } from 'react';
import MiniPopup from '../miniPopup/editMessagePopup';
import ForwardComponent from '../forwardComponent/forwardComponent';
const ChatMessages: FC<chatMessagePropsType> = ({handleDisplayPopup,displayPopup,message,  changeEditMessage }) => {
  const {file, text, ownerName, owner, time, imgUrl,  forwarded, editted} = message
  const fileTypeIcon = getFile(file as string);
  const handleRightClick = (e: React.MouseEvent<HTMLDivElement>) => {
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
      displayPopup !== null &&
      displayPopup.ownerName === ownerName &&
      displayPopup.text === text &&
      displayPopup.time === time &&
      file !== undefined &&
      displayPopup.fileExist
    ) {
      return <MiniPopup changeEditMessage={changeEditMessage} message={message} />;
    }
    return null;
  };
  //if clicked message include default message data this function will return popup component if there is no data, the function returns nothing
  const needToDisplayMiniPopupWithoutFile = () => {
    if (
      displayPopup !== null &&
      displayPopup.ownerName === ownerName &&
      displayPopup.text === text &&
      displayPopup.time === time
    ) {
      return <MiniPopup changeEditMessage={changeEditMessage} message={message} />;
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
    <>
      {file ? (
        <>
          {owner ? (
              <div className={`file-message-wrapper file-yes ${ needToDisplayMiniPopup() ? 'miniPopup-parent' : ''} ${forwarded ? 'forwarded-message' : ''}`} onContextMenu={handleRightClick} >
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
            <div className={`stranger-owner ${needToDisplayMiniPopup() ? 'miniPopup-parent' : ''} ${forwarded ? 'forwarded-message' : ''}`} onContextMenu={handleRightClick}>
              {needToDisplayMiniPopup()}
              {needToDisplayForwardMessage()}
              <img src={imgUrl} alt={ownerName} className="icon" />
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
            <div className={`chat-message-wrapper yes ${needToDisplayMiniPopupWithoutFile()  ? 'miniPopup-parent' : ''} ${forwarded ? 'forwarded-message' : ''}`} onContextMenu={handleRightClick}>
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
            <div className={`stranger-owner ${needToDisplayMiniPopupWithoutFile()  ? 'miniPopup-parent' : ''}`} onContextMenu={handleRightClick}>
               {needToDisplayMiniPopupWithoutFile()}
               {needToDisplayForwardMessage()}
              <img src={imgUrl} alt={ownerName} className="icon" />
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
    </>
  );
};

export default ChatMessages;
