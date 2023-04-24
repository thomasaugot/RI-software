import './chatMessage.scss';
import { chatMessagePropsType } from '../../../../../types/chats/generalTypes';
import { FC, useContext, useEffect, useRef, useState } from 'react';
import ForwardComponent from '../../../forwardComponent/forwardComponent';
import FileMessage from './fileMessage/fileMessage'
import { messageStatus, messageTypes } from '../../../../../types/chats/messagesTypes';
import { ChatContext } from '../../../../../context/chat/chatContext';
import { sentStatusIcon, readStatusIcon } from '../../../../../assets/chatIcons';
import ChatMessageLoadingIcon from '../../../chatMessageLoadingIcon/сhatMessageLoadingIcon';
import { profile } from '../../../../../assets/Icons';
import ContextMenu from '../contextMenu/contextMenu';

const ChatMessages: FC<chatMessagePropsType> = ({ message }) => {

  const { file, text, time, forwarded, edited, type, status, senderId, messageId } = message
  // const {messageId, firstLoad} = needToAnimateBlock
  const { setContextMenu, contextMenu, chatMembers } = useContext(ChatContext)

  const sender = chatMembers[chatMembers.findIndex((elem) => elem.employeeId === senderId)];

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
    <div className={`chat-message-container ${type === messageTypes.USER ? 'user-message-container' : 'stranger-message-container'}`}>
      {type === messageTypes.STRANGER ? <div className='chat-message-avatar-container'>{sender?.avatar ? sender?.avatar : profile}</div> : null}
      <div
        ref={messageBlockRef}
        key={messageId}
        onContextMenu={(e) => contextMenuHandler(e)}
        className={`chat-message ${type === messageTypes.USER ? 'user-message' : 'stranger-message'}`}
      >
        {contextMenu ? <ContextMenu /> : null}
        <div className="chat-message-data-container">
          <p className="sender">{type === messageTypes.USER ? 'You' : sender?.name}</p>
          <p className="time">{time}</p>
        </div>
        <div className="chat-message-files-container">
          {file.map((fileData) => {
            return <FileMessage fileData={fileData} />
          })}
        </div>
        <p className="chat-message-text">
          {text}
        </p>
        {
          type === messageTypes.USER ?
            <div className="chat-message-status">
              {status === messageStatus.SENT ? sentStatusIcon : status === messageStatus.READ ? readStatusIcon : status === messageStatus.SENDING ? <ChatMessageLoadingIcon /> : null}
            </div> : null
        }
      </div>
    </div>
  );
};

export default ChatMessages;
