import React from 'react'
import { copyMessageIcon, deleteMessageIcon, editMessageIcon, forwardMessageIcon, pinMessageIcon, replyMessageIcon } from '../../../assets/Icons'
import './miniPopup.scss'
import { MiniPopupProps } from '../../../types/chats/chat.types'

function MiniPopup({changeEditMessage, message}: MiniPopupProps) {
  const {text, ownerName, messageId} = message
  return (
    <div className='miniPopup-wrapper'>
      <div className="miniPopup-container">
        <div className="miniPopup-item">
          <div className="miniPopup-item-icon">{replyMessageIcon}</div>
          <div className="miniPopup-item-text" onClick={() => {changeEditMessage('Reply', text === undefined ? null : text, ownerName === undefined ? null : ownerName, messageId)}}>Reply</div>
        </div>
        <div className="miniPopup-item">
          <div className="miniPopup-item-icon">{editMessageIcon}</div>
          <div className="miniPopup-item-text" onClick={() => {changeEditMessage('Edit', text === undefined ? null : text, ownerName === undefined ? null : ownerName, messageId)}}>Edit</div>
        </div>
        <div className="miniPopup-item">
          <div className="miniPopup-item-icon">{copyMessageIcon}</div>
          <div className="miniPopup-item-text">Copy</div>
        </div>
        <div className="miniPopup-item">
          <div className="miniPopup-item-icon">{forwardMessageIcon}</div>
          <div className="miniPopup-item-text">Forward</div>
        </div>
        <div className="miniPopup-item">
          <div className="miniPopup-item-icon">{pinMessageIcon}</div>
          <div className="miniPopup-item-text">Pin this message</div>
        </div>
        <div className="miniPopup-item">
          <div className="miniPopup-item-icon">{deleteMessageIcon}</div>
          <div className="miniPopup-item-text">Delete for me</div>
        </div>
      </div>
    </div>
  )
}

export default MiniPopup
