import React, {  FC, useCallback, useEffect, useRef, useState } from 'react'
import AudioLevel from '../chatAudioLine/audioLevel';
import RecordRTC from 'recordrtc';
import './chatAudioRecorder.scss'
import ChatTimer from '../chatTimer/chatTimer';
import { getAudioLevels } from './getAudioLevels';
import { deleteAudioMessageIcon, recordingAudioIcon, sendMessageIcon } from '../../../assets/chatIcons';
type ChatAudioRecorderProps = {
  handleSubmit: (e: React.FormEvent<HTMLFormElement> |  null) => void,
  isRecording: boolean,
  handleRecording: (isRec: boolean) => void,
  handleAddAudioBlob: (audioBlob: Blob | null, audioLength: string | null) => void,
}

const ChatAudioRecorder: FC<ChatAudioRecorderProps> = ({isRecording, handleRecording, handleAddAudioBlob, handleSubmit}) => {
  const [blob, setBlob] = useState<Blob | null>(null);
  const [levels, setLevels] = useState<number[]>([]);
  const recorder = useRef<RecordRTC | null>(null);
  const animationId = useRef<NodeJS.Timeout | null>(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const containerRef = useRef<null | HTMLDivElement >(null)
  const [timer, setTimer] = useState(0)
  const [isRec, setIsRec] = useState(false)
  const incrementTimer = useCallback(() => {
    setTimer((prevTimer) => prevTimer + 0.5);
  }, []);
useEffect(() => {
  if (containerRef.current) {
    const containerWidth = containerRef.current.clientWidth
    if(containerWidth) {
      setContainerWidth(containerWidth);
    }
  }
}, [levels]);
function formatTime(seconds: number) {
  let minutes = Math.floor(seconds / 60);
  let remainingSeconds = seconds % 60;
  let formattedMinutes = (minutes < 10) ? '0' + minutes : minutes;
  let formattedSeconds = (remainingSeconds < 10) ? '0' + remainingSeconds : remainingSeconds;
  return `${formattedMinutes}:${Math.floor(+formattedSeconds) > 10 ? Math.floor(+formattedSeconds) : `0${Math.floor(+formattedSeconds)}`}`;
}
  const startRecording = async () => {
    const audio = await navigator.mediaDevices.getUserMedia({ audio: true });
    recorder.current = new RecordRTC(audio, { type: 'audio' });
    recorder.current.startRecording();
    const audioCtx = new AudioContext();
    const source = audioCtx.createMediaStreamSource(audio);
    const analyser = audioCtx.createAnalyser();
    source.connect(analyser);
    analyser.minDecibels = -90;
    analyser.maxDecibels = -10;
    analyser.fftSize = 2048;
    const bufferLength = analyser.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);

    const draw = () => {
      analyser.getByteFrequencyData(dataArray);
      const sum = dataArray.reduce((acc, curr) => acc + curr, 0);
      const avg = sum / dataArray.length;
      const scaledLevel = Math.floor((avg / 255) * 100);
      setLevels((prevLevels) => [...prevLevels, scaledLevel]);
    };

    animationId.current =  setInterval(() => {
      draw()
      incrementTimer()
    }, 500);
  };

  const stopRecording = async () => {
    recorder.current?.stopRecording(() => {
      const blob = recorder.current?.getBlob();
      setBlob(blob as Blob);
      handleAddAudioBlob(blob as Blob, formatTime(timer))
    });

    clearInterval(animationId.current!);
    animationId.current = null;
  };

  useEffect(() => {
    if(isRecording) {
      startRecording()
      setIsRec(true)
    }
  }, [isRecording])
  return (
      <>
      {!isRec ? <div className="delete-audio-message" onClick={() => {
        handleAddAudioBlob(null, null)
        handleRecording(false)
      }}>
        {deleteAudioMessageIcon}
      </div> : null}
      <ChatTimer timer={timer} isRec={isRec}/>
      <div className="audio-recording-wrapper">
      {isRec && <div className="audio-recording-container" style={{
        transform: `translateX(-${containerWidth - 31.4453125 * window.innerWidth / 100}px)`}}  ref={containerRef}>
        {levels.map((level, index) => (
          <AudioLevel key={index} height={level} />
        ))}
        </div> }
      {!isRec && levels.map((item, index) => <AudioLevel key={index} height={item}/>)}
      </div>
     {isRec ?  <div className='recording-audio-button' onClick={() => {
        stopRecording()
        setIsRec(false)
      }}>{recordingAudioIcon}</div> : <div className='recording-audio-button' onClick={() => {
        handleSubmit(null)
        setIsRec(false)
        handleRecording(false)
      }}>{sendMessageIcon}</div>}
      </>
  );
}

export default ChatAudioRecorder
