import { FC } from 'react'
import { profile } from '../../../assets/Icons'
import ChatMessageLoadingIcon from '../chatMessageLoadingIcon/ChatMessageLoadingIcon'
import { getFile } from '../../../queries/chat.queries'
import { ChatMessagesTypeFileMessageProps } from '../../../types/chats/audioMessageTypes/audioMessageType'

const ChatMessagesTypeFileMessage: FC<ChatMessagesTypeFileMessageProps> = ({message, needToDisplayMiniPopup, needToDisplayForwardMessage, needToDisplayEdditedMessage, handleRightClick}) => {
  const {file, text, ownerName, owner, time, imgUrl,  forwarded, editted} = message
  const fileTypeIcon = getFile(file as string);
  return (
    <>
          {owner ? (
              <div  className={`file-message-wrapper  file-yes ${ needToDisplayMiniPopup() ? 'miniPopup-parent' : ''} ${forwarded ? 'forwarded-message' : ''}`} onContextMenu={handleRightClick} >
              {needToDisplayMiniPopup()}
              {needToDisplayForwardMessage()}
              <div className='file-message-container'>
                <div className='file-type'>
                  <div className="file">{fileTypeIcon}</div>
                  <p>file.name</p>
                </div>
                <p className='file-text'>{text}</p>
              </div>
              <div className="sent-data">
                {needToDisplayEdditedMessage()}
                <p className='time'>{time}</p>
                {<ChatMessageLoadingIcon />}
              </div>
            </div>
          ) : (
            <div  className={`stranger-owner  ${needToDisplayMiniPopup() ? 'miniPopup-parent' : ''} ${forwarded ? 'forwarded-message' : ''}`} onContextMenu={handleRightClick}>
              {needToDisplayMiniPopup()}
              {needToDisplayForwardMessage()}
              {imgUrl ?  <img src={imgUrl} alt={ownerName} className="icon" /> : <span className="icon">{profile}</span>}
              <div className='file-message-wrapper'>
                <div className='file-message-container'>

                  <div className='file-type'>
                    <div className="file">{fileTypeIcon}</div>
                    <p>file.name</p>
                  </div>
                  <p className='file-text'>{text}</p>
                </div>
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
