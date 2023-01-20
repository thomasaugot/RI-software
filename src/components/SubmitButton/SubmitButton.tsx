import { SubmitbuttonProps } from '../../types/types'
import './SubmitButton.scss'

const SubmitButton = ({ text, type }: SubmitbuttonProps) => {
  return (
    <button className="submit-button" type={type}>
      {text}
    </button>
  );
};

export default SubmitButton;
