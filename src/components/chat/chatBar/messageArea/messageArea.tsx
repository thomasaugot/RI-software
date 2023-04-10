import './messageArea.scss';
import ChatInput from '../../chatInput/chatInput';
import ChatMessages from '../../chatMessages/chatMessages';
import ChatInfoText from '../../chatInfoText/chatInfoText';
import { FC } from 'react';
import ChatMessageLoadingIcon from '../../chatMessageLoadingIcon/chatMessageLoadingIcon';
import { messageAreaProps } from '../../../../types/chats/chatTypes';
import { mockMessages } from './mockMessagesData';


const MessageArea: FC<messageAreaProps> = ({ messagesScrollHeight, handleScroll, blocksCount, loading }) => {
  return (
    <div className="message-area">
      <div className='messages' ref={messagesScrollHeight} onScroll={handleScroll}>
        {loading ? <div className='loading-messages'><ChatMessageLoadingIcon /></div> : null}
        {mockMessages.slice(0, blocksCount).map((message, i) => {
          if (message.type === 'Date') {
            return <ChatInfoText text={message.time} />
          }
          if (message.type === 'message') {
            return <ChatMessages
              owner={message.owner}
              ownerName={message.ownerName}
              time={message.time}
              text={message.text}
              file={message.file}
              imgUrl='/img' />
          }
          return null
        })}
      </div>
      <ChatInput />
    </div>
  );
};

export default MessageArea;
