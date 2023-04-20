import { submitbuttonProps } from '../../../types/general/generalTypes'
import './submitButton.scss'
import { FC } from 'react';

const SubmitButton: FC<submitbuttonProps> = ({ text, type, onClick, ...aditionalProps }) => {
  return (
    <button className="submit-button" type={type} onClick={onClick} {...aditionalProps}>
      {text}
    </button>
  );
};

export default SubmitButton;
