import { FC, useEffect, useState } from 'react'
import { profile } from '../../../assets/Icons'
import ChatMessageLoadingIcon from '../chatMessageLoadingIcon/ChatMessageLoadingIcon'
import { getFile } from '../../../queries/chat.queries'
import AudioPlayer from '../audioMessagePlayButton/audioMessagePlayButton'
import './chatMessagesTypeAudioMessage.scss'
import AudioLevel from '../chatAudioLine/audioLevel'
import { getAudioLevels } from '../chatDesktop/chatInput/chatAudioRecorder/getAudioLevels'
import { chatAudioMessageProps } from '../../../types/chats/audioMessageType'
import { messageTypes } from '../../../types/chats/messagesTypes'

const ChatMessagesTypeAudioMessage: FC<chatAudioMessageProps> = ({ message, needToDisplayMiniPopupWithoutFile, needToDisplayForwardMessage, needToDisplayEdditedMessage, handleRightClick }) => {
  const { file, text, senderName, type, time, forwarded } = message
  const [playingAudioTime, setPlayingAudioTime] = useState<number>(0)
  const [audioLevels, setAudioLevels] = useState<number[]>([0, 0, 0, 0])
  const [loading, setLoading] = useState(false)

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    const formattedMinutes = (minutes < 10) ? '0' + minutes : minutes;
    const formattedSeconds = (remainingSeconds < 10) ? '0' + remainingSeconds : remainingSeconds;
    return `${formattedMinutes}:${Math.floor(+formattedSeconds) > 10 ? Math.floor(+formattedSeconds) : `0${Math.floor(+formattedSeconds)}`}`;
  }

  // useEffect(() => {
  //   if(audioFile) {
  //     setLoading(true)
  //     getAudioLevels(audioFile.recordingAudioBlob).then((data) => {
  //       setAudioLevels(data as number[]);
  //       setLoading(false)
  //     })
  //   }
  // }, [])

  return (
    <></>
    // <>
    //   {type === messageTypes.USER ? (
    //     <div
    //       className={`audio-message-wrapper audio-yes ${needToDisplayMiniPopupWithoutFile()
    //         ? 'miniPopup-parent'
    //         : ''}
    //         ${forwarded ? 'forwarded-message' : ''}`}
    //       onContextMenu={handleRightClick}
    //     >
    //       {needToDisplayMiniPopupWithoutFile()}
    //       {needToDisplayForwardMessage()}
    //       <div className='file-message-container'>
    //         <div className='file-type'>
    //           <AudioPlayer audioBlobUrl={audioFile?.recordingAudioBlob as Blob} setPlayingAudioTime={setPlayingAudioTime}/>
    //         </div>
    //         <p className='file-text'>{text}</p>
    //       </div>
    //       <div className='audio-message-wrapper-data'>
    //         <div
    //          className='audio-message-container'
    //          style={{width: `${audioLevels.length * (0.0651041667 + 0.09765625 * 2 + 0.13020833333333334 *2) + 0.5}vw`}}>
    //           {!loading && audioLevels.map((level, index) => (
    //             <AudioLevel
    //               key={index}
    //               height={level}
    //               />
    //           ))}
    //         </div>
    //         <div className='audio-message-data'>
    //           <div className='audio-message-right-data'>
    //             <div className='sent-data'>
    //               {needToDisplayEdditedMessage()}
    //               <p className='audio-message-time'>{time}</p>
    //               {<ChatMessageLoadingIcon />}
    //             </div>
    //           </div>
    //           <div className='audio-message-left-data'>
    //             {playingAudioTime > 0 ? formatTime(+playingAudioTime.toFixed(0)) : audioFile?.audioLength}
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   ) : (
    //     <div
    //       className={`stranger-owner ${needToDisplayMiniPopupWithoutFile() ? 'miniPopup-parent' : ''}
    //       ${forwarded ? 'forwarded-message' : ''}`}
    //       onContextMenu={handleRightClick}
    //     >
    //       {needToDisplayMiniPopupWithoutFile()}
    //       {needToDisplayForwardMessage()}
    //       {/* {imgUrl ? <img src={imgUrl} alt={ownerName} className='icon' /> : <span className='icon'>{profile}</span>} */}
    //       <div className='file-message-wrapper'>
    //         <div className='file-message-container'>
    //           <div className='file-type'>
    //             <AudioPlayer audioBlobUrl={audioFile?.recordingAudioBlob as Blob} setPlayingAudioTime={setPlayingAudioTime}/>
    //           </div>
    //           <p className='file-text'>{text}</p>
    //         </div>
    //         <div className='audio-message-container'>
    //           {!loading && audioLevels.map((level, index) => (
    //             <AudioLevel key={index} height={level} />
    //           ))}
    //         </div>
    //         <div className='audio-message-data'>
    //           <div className='audio-message-right-data'>
    //             <div className='sent-data'>
    //               {needToDisplayEdditedMessage()}
    //               <p className='audio-message-time'>{time}</p>
    //               {<ChatMessageLoadingIcon />}
    //             </div>
    //           </div>
    //           <div className='audio-message-left-data'>
    //             {playingAudioTime > 0 ? formatTime(+playingAudioTime.toFixed(0)) : audioFile?.audioLength}
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   )}
    // </>
  );

}
export default ChatMessagesTypeAudioMessage
