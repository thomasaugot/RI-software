import React, { FC } from 'react'
import './forwardComponent.scss'
import { ForwardMessageProps } from '../../../types/chats/chatTypes'
const ForwardComponent: FC<ForwardMessageProps> = ({forwarded}) => {
  const {from, message} = forwarded
  return (
    <div className='forward-message-wrapper'>
      <div className="forward-message-line">

      </div>
      <div className="forward-message-container">
        <div className="forward-message-author">
          {from !== null ? from : 'Unauthorized user'}
        </div>
        <div className="forward-message-text">
          {message}
        </div>
      </div>
    </div>
  )
}

export default ForwardComponent
