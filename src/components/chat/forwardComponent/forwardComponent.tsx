import React from 'react'
import './forwardComponent.scss'
function ForwardComponent({forwardedMessage}:  {
  forwardedMessage:{
    from: string;
    message: string;
  }
}) {
  const {from, message} = forwardedMessage
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
