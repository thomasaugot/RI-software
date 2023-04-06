import React, { FC } from 'react'
import { clip, microphone, sendMessageIcon } from '../../../assets/chatIcons'
type ChatInputMessageProps = {
  chatInputValue: string,
  setChatInputValue: (value: string) => void,
  handleRecording: (value: boolean) => void
}
const ChatInputMessage: FC<ChatInputMessageProps> = ({chatInputValue, setChatInputValue, handleRecording}) => {
  return (
    <>
        <div className='tools'>
          {clip}
        </div>
        <input type="text" placeholder='Message' className='chat-input' value={chatInputValue} onChange={(e) => { setChatInputValue(e.target.value) }} />
        {chatInputValue.length === 0
        ? <div className='tools tools-microphone' onClick={() => {handleRecording(true)}}>
         {microphone}
        </div> : <div className='tools tools-microphone' >
          {sendMessageIcon}
        </div>}
    </>
  )
}

export default ChatInputMessage
