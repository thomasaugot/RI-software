import './chatMessage.scss';
import { chatMessagePropsType } from '../../../types/chats/chat.types';
import { getFile } from '../../../queries/chat.queries';
import ChatMessageLoadingIcon from '../chatMessageLoadingIcon/ChatMessageLoadingIcon';
import React from 'react';
import MiniPopup from '../miniPopup/miniPopup';
import ForwardComponent from '../forwardComponent/forwardComponent';
const ChatMessages = ({handleDisplayPopup,displayPopup,message,  changeEditMessage }: chatMessagePropsType) => {
  const {file, text, ownerName, owner, time, imgUrl,  forwarded, editted} = message
  const fileTypeIcon = getFile(file as string);
  const handleRightClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault()
    handleDisplayPopup(
      ownerName ? ownerName : '',
      text ? text : '',
      time,
      file ? true : false,
    )
  }
  const needToDisplayMiniPopup = () => displayPopup !== null && displayPopup.ownerName === ownerName && displayPopup.text === text && displayPopup.time === time && (file !== undefined && displayPopup.fileExist && <MiniPopup changeEditMessage={changeEditMessage} message={message}/>)
  const needToDisplayMiniPopupWithoutFile = () => displayPopup !== null && displayPopup.ownerName === ownerName && displayPopup.text === text && displayPopup.time === time && <MiniPopup changeEditMessage={changeEditMessage} message={message}/>
  const needToDisplayForwardMessage = () => forwarded?.from ? <ForwardComponent forwardedMessage={forwarded}/> : null
  const needToDisplayEdditedMessage = () => editted ?<p className='editted'>Eddited</p>: null
  return (
    <>
      {file ? (
        <>
          {owner ? (
              <div className={`file-message-wrapper file-yes ${displayPopup !== null && displayPopup.ownerName === ownerName && displayPopup.text === text && displayPopup.time === time && (file !== undefined && displayPopup.fileExist) ? 'miniPopup-parent' : ''} ${forwarded ? 'forwarded-message' : ''}`} onContextMenu={handleRightClick} >
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
            <div className={`stranger-owner ${displayPopup !== null && displayPopup.ownerName === ownerName && displayPopup.text === text && displayPopup.time === time && (file !== undefined && displayPopup.fileExist) ? 'miniPopup-parent' : ''} ${forwarded ? 'forwarded-message' : ''}`} onContextMenu={handleRightClick}>
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
            <div className={`chat-message-wrapper yes ${displayPopup !== null && displayPopup.ownerName === ownerName && displayPopup.text === text && displayPopup.time === time  ? 'miniPopup-parent' : ''} ${forwarded ? 'forwarded-message' : ''}`} onContextMenu={handleRightClick}>
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
            <div className={`stranger-owner ${displayPopup !== null && displayPopup.ownerName === ownerName && displayPopup.text === text && displayPopup.time === time  ? 'miniPopup-parent' : ''}`} onContextMenu={handleRightClick}>
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
