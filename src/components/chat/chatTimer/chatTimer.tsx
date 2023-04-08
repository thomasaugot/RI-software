import React, { FC } from 'react'
import { playAudioIcon, redCircle } from '../../../assets/chatIcons'
import './chatTimer.scss'
interface ChatTimerProps {
  timer: number,
  isRec: boolean
}
const ChatTimer: FC<ChatTimerProps> = ({timer, isRec}) => {
  function formatTime(seconds: number) {
    let minutes = Math.floor(seconds / 60);
    let remainingSeconds = seconds % 60;
    let formattedMinutes = (minutes < 10) ? '0' + minutes : minutes;
    let formattedSeconds = (remainingSeconds < 10) ? '0' + remainingSeconds : remainingSeconds;
    return `${formattedMinutes}:${Math.floor(+formattedSeconds) > 10 ? Math.floor(+formattedSeconds) : `0${Math.floor(+formattedSeconds)}`}`;
  }
  return (
    <div className={`audio-recorder-timer-wrapper ${isRec ? 'audio-recorder-timer-wrapper-choose' : ''}`}>
      <div className='audio-recorder-icon'>{isRec ? redCircle : playAudioIcon}</div>
      <div className='audio-recorder-timer'>{formatTime(timer)}</div>
    </div>
  )
}

export default ChatTimer
