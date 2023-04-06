import React from 'react'
import { redCircle } from '../../../assets/chatIcons'
import './chatTimer.scss'
interface ChatTimerProps {
  timer: number
}
function ChatTimer({timer}: ChatTimerProps) {
  function formatTime(seconds: number) {
    let minutes = Math.floor(seconds / 60);
    let remainingSeconds = seconds % 60;
    let formattedMinutes = (minutes < 10) ? '0' + minutes : minutes;
    let formattedSeconds = (remainingSeconds < 10) ? '0' + remainingSeconds : remainingSeconds;
    return `${formattedMinutes}:${formattedSeconds}`;
  }
  return (
    <div className='audio-recorder-timer-wrapper'>
      <div className='audio-recorder-icon'>{redCircle}</div>
      <div className='audio-recorder-timer'>{formatTime(timer)}</div>
    </div>
  )
}

export default ChatTimer
