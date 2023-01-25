import './CheckBox.scss'
import { checkboxProps } from "../../types/types";
import { useEffect } from 'react';

const CheckBox = ({
    isChecked=false,
    setIsChecked,
    checkedText="",
    label,
    gap="1.18em",
    size="15px",
    fontSize="0.875rem",
    setCheckedText
}: checkboxProps) => {
    const check = () => setIsChecked(!isChecked)

    useEffect(()=>{
      (()=>{
        if(!isChecked){
          setCheckedText?.("");
        } else {
          setCheckedText?.(label)
        }
      })()
    }, [isChecked, checkedText,label, setCheckedText])
  return (
    <div style={{gap}} className="check-container">
      <div style={{width:size, height:size}} className="check-box" onClick={check}>
        <span className={isChecked ? "checked" : "unchecked"}></span>
      </div>
      <p style={{fontSize}}>{label}</p>
    </div>
  );
};

export default CheckBox;
