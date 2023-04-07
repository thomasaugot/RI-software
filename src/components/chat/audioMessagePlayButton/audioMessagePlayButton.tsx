import { FC, useEffect, useState, useMemo } from "react";
import { pauseAudioIcon, playAudioIcon, playAudioMessage } from '../../../assets/chatIcons';
import './audioMessagePlayButton.scss'

type AudioPlayerProps = {
  audioBlobUrl: Blob
}

const AudioPlayer: FC<AudioPlayerProps> = ({ audioBlobUrl }) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [currentAudio, setCurrentAudio] = useState<HTMLAudioElement | null>(null);
  const audioUrl = URL.createObjectURL(audioBlobUrl);
  const audio = useMemo(() => new Audio(audioUrl), [audioUrl]);

  const handleClick = () => {
    if (!isPlaying) {
      if (currentAudio) {
        currentAudio.pause();
      }
      audio.play();
      setCurrentAudio(audio);
      setIsPlaying(true);
    } else {
      audio.pause();
      setCurrentAudio(null);
      setIsPlaying(false);
    }
  };

  const handleEnded = () => {
    setIsPlaying(false);
    setCurrentAudio(null);
  };

  useEffect(() => {
    audio.addEventListener('ended', handleEnded);
    return () => {
      audio.removeEventListener('ended', handleEnded);
    };
  }, [audio]);

  useEffect(() => {
    if (isPlaying) {
      return () => {
        setIsPlaying(false);
      };
    } else {
      return () => {
        setIsPlaying(false);
      };
    }
  }, [isPlaying]);

  return (
    <button onClick={handleClick} className='message-audio-btn'>
      {isPlaying ? pauseAudioIcon : playAudioIcon}
    </button>
  );
}

export default AudioPlayer;
