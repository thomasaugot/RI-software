import React from "react";
import { textFieldProps } from "../../types/types";
import "./TextField.scss";
import { BiSearch } from "react-icons/bi";

function TextField({
  isSearchInput = false,
  name,
  placeholder,
}: textFieldProps) {
  return (
    <div className="textfield">
      <input type="text" placeholder={placeholder} name={name} />
      {isSearchInput ? <BiSearch className="textfield-searc-icon" size={"25px"}/> : null}
    </div>
  );
}

export default TextField;
