import { AudioLevelProps } from '../../../types/chats/audioMessageTypes/audioMessageType';
import './audioLevel.scss'

const AudioLevel: React.FC<AudioLevelProps> = ({ height }) => {
  const minHeight = 5;
  const maxHeight = 30;

  const pxToVw = (px: number) => {
    const vw = (px / document.documentElement.clientWidth) * 100;
    return vw;
  }

  const clampedHeight = Math.max(Math.min(height, maxHeight), minHeight);
  return <div className='level-item' style={{ height: `${pxToVw(clampedHeight)}vw`,  }} />;
};
export default AudioLevel
