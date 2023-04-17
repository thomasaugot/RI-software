import { FC, useContext, useEffect, useRef } from 'react'
import { copyMessageIcon } from '../../../../../assets/chatIcons'
import { deleteMessageIcon } from '../../../../../assets/chatIcons'
import { editMessageIcon } from '../../../../../assets/chatIcons'
import { forwardMessageIcon } from '../../../../../assets/chatIcons'
import { pinMessageIcon } from '../../../../../assets/chatIcons'
import { replyMessageIcon } from '../../../../../assets/chatIcons'
import './miniPopup.scss'
import { popupCoordsType, actions } from '../../../../../types/chats/actionsType'
import { ChatContext } from '../../../../../context/chat/chatContext'

const ActionMessagePopup: FC = () => {
  const { setContextMenu, contextMenu, setActionType } = useContext(ChatContext)
  // Destructuring x and y properties from coords object
  // Destructuring text, ownerName and messageId properties from message object

  // Creating ref for popup element
  const popupRef = useRef<HTMLDivElement | null>(null)
  // Using useEffect hook to add 'miniPopup-visible' that has opacity: 1 class to popup element after 10ms
  useEffect(() => {
    const popupElement = popupRef.current
    setTimeout(() => {
      if (popupElement !== null) {
        popupElement.classList.add('miniPopup-visible')
      }
    }, 10);
  }, [])

  return (
    <div ref={popupRef} className='miniPopup-wrapper' style={{ top: contextMenu?.coords.y, left: contextMenu?.coords.x }}>
      <div className="miniPopup-container">
        <div className="miniPopup-item">
          <div className="miniPopup-item-icon">{replyMessageIcon}</div>
          <div className="miniPopup-item-text" onClick={() => { setActionType({ actionType: actions.REPLY, messageId: contextMenu?.message.messageId }) }}>Reply</div>
        </div>
        <div className="miniPopup-item">
          <div className="miniPopup-item-icon">{editMessageIcon}</div>
          <div className="miniPopup-item-text" onClick={() => { setActionType({ actionType: actions.EDIT, messageId: contextMenu?.message.messageId },) }}>Edit</div>
        </div>
        <div className="miniPopup-item">
          <div className="miniPopup-item-icon">{copyMessageIcon}</div>
          <div className="miniPopup-item-text" onClick={() => { setActionType({ actionType: actions.COPY, messageId: undefined }) }}>Copy</div>
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
