import React, { FC, useEffect, useRef } from 'react'
import { copyMessageIcon} from '../../../assets/chatIcons'
import {deleteMessageIcon} from '../../../assets/chatIcons'
import {editMessageIcon} from '../../../assets/chatIcons'
import {forwardMessageIcon} from '../../../assets/chatIcons'
import {pinMessageIcon} from '../../../assets/chatIcons'
import {replyMessageIcon} from '../../../assets/chatIcons'
import './miniPopup.scss'
import { MiniPopupProps, messageActions } from '../../../types/chats/chatTypes'
type Coords = {
  coords: {
    x: number,
    y: number
  }
}
const EditMessagePopup: FC<MiniPopupProps & Coords> = ({changeEditMessage, message, coords}) => {
  const {x, y} = coords
  const {text, ownerName, messageId} = message
  const popupRef = useRef<HTMLDivElement | null>(null)
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

export default EditMessagePopup
