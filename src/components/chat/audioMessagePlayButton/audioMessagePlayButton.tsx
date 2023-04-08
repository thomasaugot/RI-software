import { FC, useEffect, useState, useMemo, useRef } from "react";
import { pauseAudioIcon, playAudioIcon, playAudioMessage } from '../../../assets/chatIcons';
import './audioMessagePlayButton.scss'

type AudioPlayerProps = {
  audioBlobUrl: Blob
}

const AudioPlayer: FC<AudioPlayerProps> = ({ audioBlobUrl }) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [audioUrl, setAudioUrl] = useState<string>("");

  const handleClick = () => {
    if (!isPlaying) {
      if (audioRef.current) {
        audioRef.current.pause();
      }
      audioRef.current = new Audio(audioUrl);
      audioRef.current.play();
      setIsPlaying(true);
    } else {
      if (audioRef.current) {
        audioRef.current.pause();
      }
      setIsPlaying(false);
    }
  };

  const handleEnded = () => {
    setIsPlaying(false);
  };

  useEffect(() => {
    setAudioUrl(URL.createObjectURL(audioBlobUrl));
  }, [audioBlobUrl]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.addEventListener('ended', handleEnded);
      return () => {
        audioRef.current?.removeEventListener('ended', handleEnded);
        audioRef.current?.pause();
        setIsPlaying(false);
      };
    }
  }, [audioUrl]);

  return (
    <button onClick={handleClick} className='message-audio-btn'>
      {isPlaying ? pauseAudioIcon : playAudioMessage}
    </button>
  );
}

export default AudioPlayer;
