import { FC } from 'react'
import { profile } from '../../../assets/Icons'
import { getFile } from '../../../queries/chat.queries'
import { ChatFileMessageProps } from '../../../types/chats/audioMessageType'
import { messageTypes } from '../../../types/chats/messagesTypes'
import ChatMessageLoadingIcon from '../chatMessageLoadingIcon/chatMessageLoadingIcon'

const ChatMessagesTypeFileMessage: FC<ChatFileMessageProps> = ({ message, needToDisplayMiniPopup, needToDisplayForwardMessage, needToDisplayEdditedMessage, handleRightClick }) => {
  const { file, text, type, time, forwarded, edited } = message
  return (
    <>
      {type === messageTypes.USER ? (
        <div className={`file-message-wrapper  file-yes ${needToDisplayMiniPopup() ? 'miniPopup-parent' : ''} ${forwarded ? 'forwarded-message' : ''}`} onContextMenu={handleRightClick} >
          {needToDisplayMiniPopup()}
          {needToDisplayForwardMessage()}
          <div className='file-message-container'>
            {
              file.map((elem) => {
                return (
                  <div className='file-type'>
                    <div className="file">{getFile(elem.fileType as string)}</div>
                    <p>{elem.fileName}</p>
                  </div>
                )
              })
            }
            <p className='file-text'>{text}</p>
          </div>
          <div className="sent-data">
            {needToDisplayEdditedMessage()}
            <p className='time'>{time}</p>
            {<ChatMessageLoadingIcon />}
          </div>
        </div>
      ) : (
        <div className={`stranger-owner  ${needToDisplayMiniPopup() ? 'miniPopup-parent' : ''} ${forwarded ? 'forwarded-message' : ''}`} onContextMenu={handleRightClick}>
          {needToDisplayMiniPopup()}
          {needToDisplayForwardMessage()}
          {/* {imgUrl ?  <img src={imgUrl} alt={ownerName} className="icon" /> : <span className="icon">{profile}</span>} */}
          <div className='file-message-wrapper'>
            <div className='file-message-container'>
              {
                file.map((elem) => {
                  return (
                    <div className='file-type'>
                      <div className="file">{getFile(elem.fileType as string)}</div>
                      <p>{elem.fileName}</p>
                    </div>
                  )
                })
              }
            </div>
            <p className='file-text'>{text}</p>
            <div className="sent-data">
              {needToDisplayEdditedMessage()}
              <p className='time'>{time}</p>
              {<ChatMessageLoadingIcon />}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
export default ChatMessagesTypeFileMessage
