import './chatMessage.scss';
import { chatMessagePropsType } from '../../../../../types/chats/generalTypes';
import { FC, useContext, useEffect, useRef, useState } from 'react';
import ForwardComponent from '../../../forwardComponent/forwardComponent';
import FileMessage from './fileMessage/fileMessage'
import { messageStatus, messageTypes } from '../../../../../types/chats/messagesTypes';
import { ChatContext } from '../../../../../context/chat/chatContext';
import { sentStatusIcon, readStatusIcon } from '../../../../../assets/chatIcons';
import ChatMessageLoadingIcon from '../../../chatMessageLoadingIcon/chatMessageLoadingIcon';
import { profile } from '../../../../../assets/Icons';
import ContextMenu from '../contextMenu/contextMenu';

const ChatMessages: FC<chatMessagePropsType> = ({ message }) => {

  const { file, text, time, forwarded, edited } = message
  // const {messageId, firstLoad} = needToAnimateBlock
  const { setContextMenu, contextMenu, chatMembers } = useContext(ChatContext)

  const sender = chatMembers[chatMembers.findIndex((elem) => elem.employeeId === message.senderId)];

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
  
  return (
    <div className={`chat-message-container ${message.type === messageTypes.USER ? 'user-message-container' : 'stranger-message-container'}`}>
      {message.type === messageTypes.STRANGER ? <div className='chat-message-avatar-container'>{sender?.avatar ? sender?.avatar : profile}</div> : null}
      <div
        ref={messageBlockRef}
        key={message.messageId}
        onContextMenu={(e) => contextMenuHandler(e)}
        className={`chat-message ${message.type === messageTypes.USER ? 'user-message' : 'stranger-message'}`}
      >
        {contextMenu ? <ContextMenu /> : null}
        <div className="chat-message-data-container">
          <p className="sender">{message.type === messageTypes.USER ? 'You' : sender?.name}</p>
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
        {
          message.type === messageTypes.USER ? 
          <div className="chat-message-status">
            {message.status === messageStatus.SENT ? sentStatusIcon : message.status === messageStatus.READ ? readStatusIcon : message.status === messageStatus.SENDING ? <ChatMessageLoadingIcon/> : null}
          </div> : null
        }
      </div>
    </div>
  );
};

export default ChatMessages;
