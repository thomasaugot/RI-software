import React, { FC, useRef } from 'react'
import './replyComponent.scss'
import { PopupActionType } from '../../../types/chats/chatTypes'
import { cross } from '../../../assets/chatIcons'
const ReplyComponent:FC<{
  editType: PopupActionType
  handleCloseEditPopup: () => void
}> =({handleCloseEditPopup, editType}) => {
  const replyWrapperRef = useRef<HTMLDivElement | null>(null)
  const closeReplyComponent = () => {
    replyWrapperRef.current?.classList.add('reply-wrapper-hidden')
    setTimeout(() => {
      handleCloseEditPopup()
    }, 80)
  }
  return (
    <div className='reply-wrapper' ref={replyWrapperRef}>
      <div className="reply-container">
        <div className="reply-container-text">
          <div className="reply-container-text-up">{editType.from}</div>
          <div className="reply-container-text-bottom">{editType.value}</div>
        </div>
        <div className="reply-container-icon" onClick={closeReplyComponent}>{cross}</div>
      </div>
    </div>
  )
}

export default ReplyComponent
