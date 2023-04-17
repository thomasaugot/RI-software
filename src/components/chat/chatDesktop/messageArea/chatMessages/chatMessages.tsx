import './chatMessage.scss';
import { chatMessagePropsType } from '../../../../../types/chats/generalTypes';
import { FC, useContext, useEffect, useRef, useState } from 'react';
import ForwardComponent from '../../../forwardComponent/forwardComponent';
import FileMessage from './fileMessage/fileMessage'
import { messageTypes } from '../../../../../types/chats/messagesTypes';
import { ChatContext } from '../../../../../context/chat/chatContext';
import ActionMessagePopup from '../actionMessagePopup/actionMessagePopup';

const ChatMessages: FC<chatMessagePropsType> = ({ message }) => {

  const { file, text, senderName, time, forwarded, edited } = message
  // const {messageId, firstLoad} = needToAnimateBlock
  const [popupCoords, setPopupCoords] = useState({ y: 0, x: 0 })
  const { setContextMenu, contextMenu } = useContext(ChatContext)
  const messageBlockRef = useRef<HTMLDivElement>(null);
  const animatedRef = useRef<HTMLDivElement>(null)

  // useEffect(() => {
  //   const blockElement = blockRef.current;
  //   //first message loading animation
  //   setTimeout(() => {
  //     if(blockElement !== null && firstLoad) {
  //       blockElement.classList.add('chat-messages-visible');
  //     }
  //   }, delay * 1000);
  // }, [delay]);

  // useEffect(() => {
  //   const blockElement = animatedRef.current;
  //   //animation of sended or eddited message
  //   setTimeout(() => {
  //     if(blockElement !== null) {
  //       blockElement.classList.add('chat-messages-visible');
  //     }
  //   },  1000);
  // }, [needToAnimateBlock])

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
    // const rect = messagesScrollHeight.current?.getBoundingClientRect() as DOMRect
    // const parentWidth = rect.width
    // let popupX = e.clientX + 10
    // if(popupX + parentWidth > window.innerWidth) {
    //   popupX = e.clientX - 10 - parentWidth
    // }else {
    //   popupX = e.clientX - 200
    // }
    // setPopupCoords({x: popupX, y: 0})
    // handleDisplayPopup(
    //   senderName ?? '',
    //   text ?? '',
    //   time,
    //   file ? true : false
    // )
    console.log('ss')
  }

  // const needToDisplayMiniPopup = () => {
  //   if (
  //     additionalDataForPopup !== null &&
  //     additionalDataForPopup.ownerName === senderName &&
  //     additionalDataForPopup.text === text &&
  //     additionalDataForPopup.time === time &&
  //     file !== undefined &&
  //     additionalDataForPopup.fileExist
  //   ) {
  //     return <MiniPopup updateAction={updateAction} message={message} coords={popupCoords}/>;
  //   }
  //   return null;
  // };

  //if clicked message include default message data this function will return popup component if there is no data, the function returns nothing
  // const needToDisplayMiniPopupWithoutFile = () => {
  //   if (
  //     additionalDataForPopup !== null &&
  //     additionalDataForPopup.ownerName === senderName &&
  //     additionalDataForPopup.text === text &&
  //     additionalDataForPopup.time === time
  //   ) {
  //     return <MiniPopup updateAction={updateAction} message={message} coords={popupCoords}/>;
  //   }
  //   return null;
  // };

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
        // className={`chat-messages-wrapper
        // ${firstLoad ? 'chat-message-hidden' : ''}
        // ${message.messageId === messageId ? 'chat-message-hidden-anim' : ''}`}
        className={`chat-message ${message.type === messageTypes.USER ? 'user-message' : 'stranger-message'}`}
      >
        {contextMenu ? <ActionMessagePopup /> : null}
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
        {/* {audioFile
        ? <ChatMessagesTypeAudioMessage
          message={message}
          needToDisplayMiniPopupWithoutFile={needToDisplayMiniPopupWithoutFile}
          needToDisplayForwardMessage={needToDisplayForwardMessage}
          needToDisplayEdditedMessage={needToDisplayEdditedMessage}
          handleRightClick={handleRightClick}/> : null}
      {file && audioFile === undefined ? (
        <ChatMessagesTypeFileMessage
          message={message}
          needToDisplayMiniPopup={needToDisplayMiniPopup}
          needToDisplayForwardMessage={needToDisplayForwardMessage}
          needToDisplayEdditedMessage={needToDisplayEdditedMessage}
          handleRightClick={handleRightClick}/>
      ) : null}
      {audioFile === undefined && text ? (
        <ChatMessagesTypeTextMessage
          message={message}
          needToDisplayMiniPopupWithoutFile={needToDisplayMiniPopupWithoutFile}
          needToDisplayForwardMessage={needToDisplayForwardMessage}
          needToDisplayEdditedMessage={needToDisplayEdditedMessage}
          handleRightClick={handleRightClick}/>
      ) : null} */}
      </div>
    </div>
  );
};

export default ChatMessages;
