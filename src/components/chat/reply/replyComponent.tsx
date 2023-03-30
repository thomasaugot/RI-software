import React from 'react'
import { cross } from '../../../assets/Icons'
import './replyComponent.scss'
function ReplyComponent({handleCloseEditPopup, editType} : {
  editType: {editType: string, value: string | null, from: string | null, messageId: string | null}
  handleCloseEditPopup: () => void
}) {
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
