import './messageArea.scss';
import ChatInput from '../chatInput/chatInput';
import ChatMessages from './chatMessages/chatMessages';
import ChatInfoText from '../../chatInfoText/chatInfoText';
import { FC, useContext, useState } from 'react';
import { actionType, popupAdditionDataType } from '../../../../types/chats/actionsType';
import { messageAreaProps } from '../../../../types/chats/generalTypes';
import { chatMessageType, userMessageType, messageTypes } from '../../../../types/chats/messagesTypes';
import { mockMessages } from './mockMessagesData';

import { actions } from '../../../../types/chats/actionsType';
import ChatMessageLoadingIcon from '../../chatMessageLoadingIcon/сhatMessageLoadingIcon';
import { ChatContext } from '../../../../context/chat/chatContext';

const MessageArea: FC<messageAreaProps> = ({ loading, scrollHandler, messages, messageAreaContainer }) => {
  //clicked message data
  //set block that we need to animate and its first loading of message animate all blocks with default animation
  const { setContextMenu, contextMenu } = useContext(ChatContext)
  const [additionalDataForPopup, setAdditionalDataForPopup] = useState<popupAdditionDataType | null>(null)
  //what kind of action we need to apply to component
  // Handle display of popup with message data
  const handleDisplayPopup = (ownerName: string, text: string, time: string, fileExist: boolean,) => {
    const objectFromComponent = {
      ownerName,
      text,
      time,
      fileExist
    }
    if (JSON.stringify(objectFromComponent) === JSON.stringify(additionalDataForPopup)) {
      //If the popup is already open, then set the popup to null
      setAdditionalDataForPopup(null)
    } else {
      //If the popup is closed, then set the message data to the value of the popup
      setAdditionalDataForPopup(objectFromComponent)
    }
  }


  return (
    <div className={`message-area ${contextMenu ? 'message-area-block-scroll' : ''}`} ref={messageAreaContainer} onScroll={scrollHandler} onClick={() => {
      setContextMenu(null)
    }}>
      {loading ? <div className='loading-messages'><ChatMessageLoadingIcon /></div> : null}
      {messages.map((message, index) => {
        if (message.type === messageTypes.DATE) {
          return <ChatInfoText text={message.text} />
        } else {
          return <ChatMessages
            // messagesScrollHeight={messagesScrollHeight}
            // handleDisplayPopup={handleDisplayPopup}
            // additionalDataForPopup={additionalDataForPopup}
            message={message as userMessageType}
          // needToAnimateBlock={needToAnimateBlock}
          // delay={index * 0.05}
          />
        }
      })}
      {messages.map((message, index) => {
        if (message.type === messageTypes.DATE) {
          return <ChatInfoText text={message.text} />
        } else {
          return <ChatMessages
            // messagesScrollHeight={messagesScrollHeight}
            // handleDisplayPopup={handleDisplayPopup}
            // additionalDataForPopup={additionalDataForPopup}
            message={message as userMessageType}
          // needToAnimateBlock={needToAnimateBlock}
          // delay={index * 0.05}
          />
        }
      })}
    </div>
  );
};

export default MessageArea;
