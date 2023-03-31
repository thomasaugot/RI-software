import './messageArea.scss';
import ChatInput from '../../chatInput/chatInput';
import ChatMessages from '../../chatMessages/chatMessages';
import ChatInfoText from '../../chatInfoText/chatInfoText';
import { FC, useState } from 'react';
import ChatMessageLoadingIcon from '../../chatMessageLoadingIcon/ChatMessageLoadingIcon';
import { EditMessageType, displayPopupData, messageAreaProps } from '../../../../types/chats/chat.types';
import { mockMessages } from './mockMessagesData';


const MessageArea: FC<messageAreaProps> = ({ messagesScrollHeight, handleScroll, blocksCount, loading }) => {
  //clicked message data
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
  return (
    <div className="message-area">
      <div className='messages' ref={messagesScrollHeight} onScroll={handleScroll} onClick={() => {
        handleDisplayPopup('', '', '', false)
      }}>
        {loading ? <div className='loading-messages'><ChatMessageLoadingIcon /></div> : null}
        {mockMessages.slice(0, blocksCount).map((message) => {
          if (message.type === 'Date') {
            return <ChatInfoText text={message.time} />
          }
          if (message.type === 'message') {
            return <ChatMessages
              changeEditMessage={changeEditMessage}
              handleDisplayPopup={handleDisplayPopup}
              displayPopup={displayPopup}
              message={message}
              />
          }
          return null
        })}
      </div>

      <ChatInput editType={editType} changeEditMessage={changeEditMessage}/>
    </div>
  );
};

export default MessageArea;
