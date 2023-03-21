import './chatInput.scss'
import { microphone, clip, sendMessageIcon } from '../../../assets/Icons';
import Field from '../../general/inputField/inputField'
import { useState } from 'react';

const ChatInput = () => {
  const [chatInputValue, setChatInputValue] = useState('')
  return (
    <div className='chat-input-container'>
      <div className='tools'>
        {clip}
      </div>
      <input type="text" placeholder='Message' className='chat-input' value={chatInputValue} onChange={(e) => { setChatInputValue(e.target.value) }} />
      <div className='tools tools-microphone'>
        {
          chatInputValue.length === 0 ? microphone : sendMessageIcon
        }
      </div>
    </div>
  );
};

export default ChatInput;
