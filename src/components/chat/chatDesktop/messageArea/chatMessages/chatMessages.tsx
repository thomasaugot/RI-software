import './chatMessage.scss';
import { chatMessagePropsType } from '../../../../../types/chats/generalTypes';
import { FC, useContext, useEffect, useRef, useState } from 'react';
import ForwardComponent from '../../../forwardComponent/forwardComponent';
import FileMessage from './fileMessage/fileMessage'
import { messageTypes } from '../../../../../types/chats/messagesTypes';
import { ChatContext } from '../../../../../context/chat/chatContext';
import ContextMenu from '../contextMenu/contextMenu';

const ChatMessages: FC<chatMessagePropsType> = ({ message }) => {
  const { forwarded, edited } = message
  // const {messageId, firstLoad} = needToAnimateBlock

  const { setContextMenu, contextMenu } = useContext(ChatContext)

  const messageBlockRef = useRef<HTMLDivElement>(null);

  const contextMenuHandler = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault();
    if (contextMenu?.display) {
      setContextMenu(null)
    } else {
      setContextMenu({
        display: true,
        coords: {
          x: e.clientX,
          y: e.clientY
        },
        message: message
      })
    }
  }

  //if clicked message include default message data and file this function will return popup component if there is no data, the function returns nothing
  const needToDisplayForwardMessage = () => {
    if (forwarded?.from) {
      return <ForwardComponent forwarded={forwarded} />;
    }
    return null;
  };

  //if message include forward field function will return forward component if there is no forward field, the function returns nothing
  const needToDisplayEdditedMessage = () => {
    if (edited) {
      return <p className='editted'>Edited</p>;
    }
    return null;
  };
  //if message eddited field function will return eddited block if there is no eddited field, the function returns nothing
  return (
    <div className={`chat-message-container ${message.type === messageTypes.USER ? 'user-message-container' : 'stranger-message-container'}`}>
      <div
        ref={messageBlockRef}
        key={message.messageId}
        onContextMenu={(e) => contextMenuHandler(e)}
        className={`chat-message ${message.type === messageTypes.USER ? 'user-message' : 'stranger-message'}`}
      >
        {contextMenu ? <ContextMenu /> : null}
        <div className="chat-message-data-container">
          <p className="sender">{message.senderName}</p>
          <p className="time">{message.time}</p>
        </div>
        <div className="chat-message-files-container">
          {message.file.map((fileData) => {
            return <FileMessage fileData={fileData} />
          })}
        </div>
        <p className="chat-message-text">
          {message.text}
        </p>
      </div>
    </div>
  );
};

export default ChatMessages;
