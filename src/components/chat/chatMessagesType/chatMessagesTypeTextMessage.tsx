import { FC } from 'react'
import { profile } from '../../../assets/Icons'
import { chatTextMessageProps } from '../../../types/chats/audioMessageType'
import { messageTypes } from '../../../types/chats/messagesTypes'


const ChatMessagesTypeTextMessage: FC<chatTextMessageProps> = ({message, needToDisplayMiniPopupWithoutFile, needToDisplayForwardMessage, needToDisplayEdditedMessage, handleRightClick}) => {
    const { text, type, time,  forwarded} = message
  return (
    <>
    {type === messageTypes.USER ? (
      <div className={`chat-message-wrapper  yes ${needToDisplayMiniPopupWithoutFile()  ? 'miniPopup-parent' : ''} ${forwarded ? 'forwarded-message' : ''}`} onContextMenu={handleRightClick}>
        {needToDisplayMiniPopupWithoutFile()}
        {needToDisplayForwardMessage()}
        <div className='chat-message-container'>
          <div className='sent-data'>
          {needToDisplayEdditedMessage()}
            <p className='message-owner'>{null}</p>
            <p className='time'>{time}</p>
          </div>
          <div className='file-type'></div>
          <p className='message-text'>{text}</p>
        </div>
      </div>
    ) : (
      <div  className={`stranger-owner  ${needToDisplayMiniPopupWithoutFile()  ? 'miniPopup-parent' : ''}`} onContextMenu={handleRightClick}>
         {needToDisplayMiniPopupWithoutFile()}
         {needToDisplayForwardMessage()}
         {/* {imgUrl ?  <img src={imgUrl} alt={ownerName} className="icon" /> : <span className="icon">{profile}</span>} */}
        <div className={`chat-message-wrapper ${forwarded ? 'forwarded-message' : ''}`}>
          <div className='chat-message-container'>
            <div className='sent-data'>
            {needToDisplayEdditedMessage()}
              <p className='message-owner'>{null}</p>
              <p className='time'>{time}</p>
            </div>
            <div className='file-type'></div>
            <p className='message-text'>{text}</p>
          </div>
        </div>
      </div>
    )}
  </>
  )
}
export default ChatMessagesTypeTextMessage
