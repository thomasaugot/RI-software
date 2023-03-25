import './chatInput.scss'
import { microphone, clip, sendMessageIcon } from '../../../assets/Icons';
import Field from '../../general/inputField/inputField'
import { useState } from 'react';
import { authorizedRequest } from '../../../utils/queries';
import { sendChatMessageUrl } from '../../../utils/network';
import { mockMessages } from '../chatBar/messageArea/mockMessagesData';

const ChatInput = () => {
  const [chatInputValue, setChatInputValue] = useState('')
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const dateNow = new Date()
    const hours = dateNow.getHours()
    const minutes = dateNow.getMinutes()
    const body = {
      type: 'message',
      owner: true,
      ownerName: "You",
      time: `${hours}:${minutes}`,
      text: chatInputValue,
    }
    mockMessages.unshift(body)
    setChatInputValue('')
    // authorizedRequest(sendChatMessageUrl('1', chatInputValue), "POST", 'accessToken', body).then((_) => setChatInputValue(''))
    // sendChatMessage('1', chatInputValue).then((_) => setChatInputValue(''))
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className='chat-input-container'>
        <div className='tools'>
          {clip}
        </div>
        <input type="text" placeholder='Message' className='chat-input' value={chatInputValue} onChange={(e) => { setChatInputValue(e.target.value) }} />
        {chatInputValue.length === 0 ? <div className='tools tools-microphone'>
          {microphone}
        </div> : <div className='tools tools-microphone' >
          {sendMessageIcon}
        </div>}
      </div>
    </form>
  );
};

export default ChatInput;
