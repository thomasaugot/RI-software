import React, { FC, useEffect, useRef } from 'react'
import { copyMessageIcon} from '../../../assets/chatIcons'
import {deleteMessageIcon} from '../../../assets/chatIcons'
import {editMessageIcon} from '../../../assets/chatIcons'
import {forwardMessageIcon} from '../../../assets/chatIcons'
import {pinMessageIcon} from '../../../assets/chatIcons'
import {replyMessageIcon} from '../../../assets/chatIcons'
import './miniPopup.scss'
import { CoordsForMessagePopup, MiniPopupProps } from '../../../types/chats/chatTypes'

const ActionMessagePopup: FC<MiniPopupProps & CoordsForMessagePopup> = ({changeEditMessage, message, coords}) => {
    // Destructuring x and y properties from coords object
  const {x, y} = coords
    // Destructuring text, ownerName and messageId properties from message object
  const {text, ownerName, messageId} = message
    // Creating ref for popup element
  const popupRef = useRef<HTMLDivElement | null>(null)
    // Using useEffect hook to add 'miniPopup-visible' that has opacity: 1 class to popup element after 10ms
  useEffect(() => {
    const popupElement = popupRef.current
    setTimeout(() => {
      if(popupElement !== null) {
        popupElement.classList.add('miniPopup-visible')
      }
    }, 10);


  }, [])
  return (
    <div ref={popupRef} className='miniPopup-wrapper' style={{top: y, left: x}}>
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
          <div className="miniPopup-item-text" onClick={() => {changeEditMessage('Copy', text === undefined ? null : text, null, null)}}>Copy</div>
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

export default ActionMessagePopup
