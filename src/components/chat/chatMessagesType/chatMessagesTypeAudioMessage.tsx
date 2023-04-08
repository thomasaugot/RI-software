import { FC, useEffect, useState } from 'react'
import { profile } from '../../../assets/Icons'
import ChatMessageLoadingIcon from '../chatMessageLoadingIcon/ChatMessageLoadingIcon'
import { MessageDataType } from '../../../types/chats/chatTypes'
import { getFile } from '../../../queries/chat.queries'
import AudioPlayer from '../audioMessagePlayButton/audioMessagePlayButton'
import './chatMessagesTypeAudioMessage.scss'
import AudioLevel from '../chatAudioLine/audioLevel'
import { getAudioLevels } from '../chatAudioRecorder/getAudioLevels'
import { ChatMessagesTypeAudioMessageProps } from '../../../types/chats/audioMessageTypes/audioMessageType'

const ChatMessagesTypeAudioMessage: FC<ChatMessagesTypeAudioMessageProps> = ({message, needToDisplayMiniPopupWithoutFile, needToDisplayForwardMessage, needToDisplayEdditedMessage, handleRightClick}) => {
  const {file, text, ownerName, owner, time, imgUrl,  forwarded, audioFile} = message
  const [audioLevels, setAudioLevels] = useState<number[]>([0,0,0,0])
  const [loading, setLoading] = useState(false)
  const fileTypeIcon = getFile(file as string);
  useEffect(() => {
    if(audioFile) {
      setLoading(true)
      getAudioLevels(audioFile.recordingAudioBlob).then((data) => {
        setAudioLevels(data as number[]);
        setLoading(false)
      })
    }
  }, [])
  return (
    <>
          {owner ? (
              <div  className={`audio-message-wrapper  audio-yes ${ needToDisplayMiniPopupWithoutFile() ? 'miniPopup-parent' : ''} ${forwarded ? 'forwarded-message' : ''}`} onContextMenu={handleRightClick} >
              {needToDisplayMiniPopupWithoutFile()}
              {needToDisplayForwardMessage()}
              <div className='file-message-container'>
                <div className='file-type'>
                  <div className="file">{fileTypeIcon}</div>
                  <AudioPlayer audioBlobUrl={audioFile?.recordingAudioBlob as Blob}/>
                </div>
                <p className='file-text'>{text}</p>
              </div>
              <div className="audio-message-wrapper-data">
              <div className="audio-message-container">
              {!loading ? audioLevels.map((level, index) => (
  <AudioLevel key={index} height={level} />
)) : ''}
                </div>
             <div className="audio-message-data">
             <div className="audio-message-right-data">
              <div className="sent-data">
                {needToDisplayEdditedMessage()}
                <p className='audio-message-time'>{time}</p>
                {<ChatMessageLoadingIcon />}
              </div>
              </div>
              <div className="audio-message-left-data">
                {audioFile?.audioLength}
              </div>
             </div>
              </div>
            </div>
          ) : (
            <div  className={`stranger-owner  ${needToDisplayMiniPopupWithoutFile() ? 'miniPopup-parent' : ''} ${forwarded ? 'forwarded-message' : ''}`} onContextMenu={handleRightClick}>
              {needToDisplayMiniPopupWithoutFile()}
              {needToDisplayForwardMessage()}
              {imgUrl ?  <img src={imgUrl} alt={ownerName} className="icon" /> : <span className="icon">{profile}</span>}
              <div className='file-message-wrapper'>
                <div className='file-message-container'>

                  <div className='file-type'>
                    <div className="file">{fileTypeIcon}</div>
                    <AudioPlayer audioBlobUrl={audioFile?.recordingAudioBlob as Blob}/>
                  </div>
                  <p className='file-text'>{text}</p>
                </div>
                <div className="audio-message-container">
                {!loading ? audioLevels.map((level, index) => (
  <AudioLevel key={index} height={level} />
)) : ''}
                </div>
             <div className="audio-message-data">
             <div className="audio-message-right-data">
                <div className="sent-data">
                {needToDisplayEdditedMessage()}
                  <p className='audio-message-time'>{time}</p>
                  {<ChatMessageLoadingIcon />}
                </div>
                </div>
                <div className="audio-message-left-data">
                  {audioFile?.audioLength}
                </div>
             </div>
              </div>
            </div>
          )}
        </>
  )
}
export default ChatMessagesTypeAudioMessage
