import './chatInput.scss'
import { microphone, clip, sendMessageIcon } from '../../../assets/Icons';
import { useEffect, useState } from 'react';
import {  mockMessages } from '../chatBar/messageArea/mockMessagesData';
import ReplyComponent from '../reply/replyComponent';
import { ChatInputProps,  MessageDataType } from '../../../types/chats/chat.types';

const ChatInput = ({editType, changeEditMessage}:ChatInputProps) => {
  const [diplayEditComponent, setDiplayEditComponent] = useState(true)
  const [chatInputValue, setChatInputValue] = useState('')
  const handleCloseEditPopup = () => {
    setDiplayEditComponent(!diplayEditComponent)
    changeEditMessage('', null, null, null)
  }
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const dateNow = new Date()
    const hours = dateNow.getHours()
    const minutes = dateNow.getMinutes()
    const body: MessageDataType = {
      messageId: crypto.randomUUID(),
      type: 'message',
      owner: true,
      ownerName: "You",
      time: `${hours}:${minutes}`,
      text: chatInputValue,
    }
    if(editType.editType === 'Reply' && editType.value !== null && editType.from !== null) {
      body.forwarded =  {
        from: editType.from,
        message: editType.value
      }
      mockMessages.unshift(body)
    }else if(editType.editType === 'Edit') {
      const messageToReplace = mockMessages.findIndex((item) => item.messageId === editType.messageId)
      mockMessages[messageToReplace].editted = true
      mockMessages[messageToReplace].text = chatInputValue
      mockMessages[messageToReplace].time = `${hours}:${minutes}`
      mockMessages[messageToReplace].text = chatInputValue
    }else {
      mockMessages.unshift(body)
    }


    setChatInputValue('')
    changeEditMessage('', null, null, null)
    // authorizedRequest(sendChatMessageUrl('1', chatInputValue), "POST", 'accessToken', body).then((_) => setChatInputValue(''))
    // sendChatMessage('1', chatInputValue).then((_) => setChatInputValue(''))
  }
  useEffect(() => {
    if(editType.value !== null && editType.editType !== 'Reply') {
      setChatInputValue(editType.value)
    }
  }, [editType.value])
  return (
    <form onSubmit={handleSubmit} className='chat-input-wrapper'>
      { editType.editType.length !== 0 ?  <ReplyComponent editType={editType} handleCloseEditPopup={handleCloseEditPopup}/> : null}
      <div className={`chat-input-container ${editType.editType.length > 0 ? 'chat-input-container-edit' : ''}`}>
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
