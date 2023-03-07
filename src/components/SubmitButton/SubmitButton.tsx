import { SubmitbuttonProps } from '../../types/types'
import './SubmitButton.scss'

const SubmitButton = ({ text, type, onClick}: SubmitbuttonProps) => {
  return (
    <button className="submit-button" type={type} onClick={onClick}>
      {text}
    </button>
  );
};

export default SubmitButton;
