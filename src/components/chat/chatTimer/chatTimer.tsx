import React, { FC } from 'react'
import { playAudioIcon, redCircle } from '../../../assets/chatIcons'
import './chatTimer.scss'
import { ChatTimerProps } from '../../../types/chats/audioMessageTypes/audioMessageType';

const ChatTimer: FC<ChatTimerProps> = ({timer, isRec, blob}) => {
    // Function to format time as MM:SS
  function formatTime(seconds: number) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    const formattedMinutes = (minutes < 10) ? '0' + minutes : minutes;
    const formattedSeconds = (remainingSeconds < 10) ? '0' + remainingSeconds : remainingSeconds;
    return `${formattedMinutes}:${Math.floor(+formattedSeconds) > 10 ? Math.floor(+formattedSeconds) : `0${Math.floor(+formattedSeconds)}`}`;
  }

  return (
    <div className={`audio-recorder-timer-wrapper ${isRec ? 'audio-recorder-timer-wrapper-choose' : ''}`}>
      {isRec ? <div className='audio-recorder-icon'>{redCircle}</div> : <div className='audio-recorder-icon' onClick={() => {new Audio(URL.createObjectURL(blob)).play();}}>{playAudioIcon}</div>}
      <div className='audio-recorder-timer'>{formatTime(timer)}</div>
    </div>
  )
}

export default ChatTimer
