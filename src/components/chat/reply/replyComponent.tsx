import React, { FC } from 'react'
import { cross } from '../../../assets/Icons'
import './replyComponent.scss'
import { EditMessageType } from '../../../types/chats/chat.types'
const ReplyComponent:FC<{
  editType: EditMessageType
  handleCloseEditPopup: () => void
}> =({handleCloseEditPopup, editType}) => {
  return (
    <div className='reply-wrapper'>
      <div className="reply-container">
        <div className="reply-container-text">
          <div className="reply-container-text-up">{editType.from}</div>
          <div className="reply-container-text-bottom">{editType.value}</div>
        </div>
        <div className="reply-container-icon" onClick={handleCloseEditPopup}>{cross}</div>
      </div>
    </div>
  )
}

export default ReplyComponent
