import { FC } from 'react'
import './forwardComponent.scss'
import { forwardMessageProps } from '../../../types/chats/generalTypes'

const ForwardComponent: FC<forwardMessageProps> = ({forwarded}) => {
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
