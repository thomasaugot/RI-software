import './Checkbox.scss'
import { checkboxProps } from "../../types";


const CheckBox = ({
    isChecked=false,
    setIsChecked,
    text
}: checkboxProps) => {
    const check = () => setIsChecked(!isChecked)
  return (
    <div className="check-container">
      <div className="check-box" onClick={check}>
        <span className={isChecked ? "checked" : "unchecked"}></span>
      </div>
      <p>{text}</p>
    </div>
  );
};

export default CheckBox;
