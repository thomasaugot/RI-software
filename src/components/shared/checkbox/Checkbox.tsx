import { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

import "./Checkbox.scss";

interface CheckboxProps {
  isChecked: boolean;
  handleClick: () => void;
}

const Checkbox: FC<CheckboxProps> = ({ isChecked, handleClick }) => {
  return (
    <div className="Checkbox" onClick={handleClick}>
      <span className="check-icon">
        {isChecked && <FontAwesomeIcon icon={faCheck} />}
      </span>
    </div>
  );
};

export default Checkbox;
