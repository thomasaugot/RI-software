import './chatInput.scss'
import { microphone, clip, sendMessageIcon } from '../../../assets/Icons';
import Field from '../../general/inputField/inputField'
import { useState } from 'react';
import { sendChatMessage } from '../../../queries/chat.queries';

const ChatInput = () => {
  const [chatInputValue, setChatInputValue] = useState('')
  const handleSendMessage = (e: React.KeyboardEvent<HTMLInputElement> | null) => {
    if (e && e.key === 'Enter') {
      sendChatMessage('1', chatInputValue).then((_) => setChatInputValue(''))
    }
    if (e === null) {
      sendChatMessage('1', chatInputValue).then((_) => setChatInputValue(''))
    }
  }
  return (
    <div className='chat-input-container'>
      <div className='tools'>
        {clip}
      </div>
      <input type="text" placeholder='Message' className='chat-input' value={chatInputValue} onChange={(e) => { setChatInputValue(e.target.value) }} onKeyDown={handleSendMessage} />
      {
        chatInputValue.length === 0 ? <div className='tools tools-microphone'>
          {microphone}
        </div> : <div className='tools tools-microphone' onClick={() => { handleSendMessage(null) }}>
          {sendMessageIcon}
        </div>
      }
    </div>
  );
};

export default ChatInput;
