import React, {  useCallback, useEffect, useRef, useState } from 'react'
import AudioLevel from '../chatAudioLine/audioLevel';
import RecordRTC from 'recordrtc';
import './chatAudioRecorder.scss'
import ChatTimer from '../chatTimer/chatTimer';
import { getAudioLevels } from './getAudioLevels';
import { recordingAudioIcon } from '../../../assets/chatIcons';
interface ChatAudioRecorderProps {
  isRecording: boolean,
  handleRecording: (isRec: boolean) => void
}
function ChatAudioRecorder({isRecording, handleRecording}: ChatAudioRecorderProps) {
  const [blob, setBlob] = useState<Blob | null>(null);
  const [levels, setLevels] = useState<number[]>([]);
  const recorder = useRef<RecordRTC | null>(null);
  const animationId = useRef<NodeJS.Timeout | null>(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const containerRef = useRef<null | HTMLDivElement >(null)
  const [timer, setTimer] = useState(0)
  const [audioFile, setAudioFile] = useState<null | Blob>(null)
  const [audioLevels, setAudioLevels] = useState<[] | number[]>([])
  const [isRec, setIsRec] = useState(false)
  const incrementTimer = useCallback(() => {
    setTimer((prevTimer) => prevTimer + 1);
  }, []);
useEffect(() => {
  if (containerRef.current) {
    const containerWidth = containerRef.current.clientWidth
    if(containerWidth) {
      setContainerWidth(containerWidth);
    }
  }
}, [levels]);

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
    }, 1000);
  };

  const stopRecording = async () => {
    recorder.current?.stopRecording(() => {
      const blob = recorder.current?.getBlob();
      setBlob(blob as Blob);
      setNewAudioFile(blob as Blob)
    });

    clearInterval(animationId.current!);
  };
  const setNewAudioFile = (file: Blob) => {
    getAudioLevels(file).then((data) => {
      setAudioLevels(data)
    })
    setAudioFile(file)
  }
  useEffect(() => {
    if(isRecording) {
      startRecording()
      setIsRec(true)
    }
  }, [isRecording])
  useEffect(() => {
    if(!isRec) {
      stopRecording()
    }
  }, [isRec])
  return (
      <>
      <ChatTimer timer={timer}/>
      <div className="audio-recording-wrapper">
      <div className="audio-recording-container" style={{
    transform: `translateX(-${containerWidth - 31.4453125 * window.innerWidth / 100}px)`
  }}  ref={containerRef}>
        {levels.map((level, index) => (
          <AudioLevel key={index} height={level} />
        ))}
        </div>
      </div>
      <div className='recording-audio-button' onClick={() => {setIsRec(false)}}>{recordingAudioIcon}</div>
      </>
  );
}

export default ChatAudioRecorder
