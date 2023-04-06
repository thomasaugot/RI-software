import './audioLevel.scss'
interface AudioLevelProps {
  height: number;
}
const AudioLevel: React.FC<AudioLevelProps> = ({ height }) => {
  const minHeight = 5;
  const maxHeight = 30;
  const clampedHeight = Math.max(Math.min(height, maxHeight), minHeight);
  return <div className='level-item' style={{ height: `${clampedHeight}px`,  }} />;
};
export default AudioLevel
