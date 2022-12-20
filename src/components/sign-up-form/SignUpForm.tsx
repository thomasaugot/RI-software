import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

import "./SignUpForm.scss";
import Input, { Type } from "../Input";

const SingUpForm = () => {
  const [information, setInformation] = useState({
    companyName: { name: "companyName", value: "" },
    fullCompanyName: { name: "fullCompanyName", value: "" },
    login: { name: "login", value: "" },
    email: { name: "email", value: "" },
    password: { name: "password", value: "" },
    repeatPassword: { name: "repeatPassword", value: "" },
    phoneNumber: { name: "number", value: "" },
  });
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [rPasswordVisible, setRPasswordVisible] = useState(false);

  return (
    <div className="registration-Div">
      <form className="registration-form">
        <header>
          <h2 className="registration-header">Create an account
          </h2>
          <h4 className="registration-header">
            Have an account? <a href="Login">Sing in</a>
          </h4>
        </header>
        <div className="registration-info">
          <Input
            name={information.companyName.name}
            placeholder="Company Name"
          />
          <Input
            name={information.fullCompanyName.name}
            placeholder="Full Company Name"
          />
          <Input
            name={information.login.name}
            placeholder="Enter Username here"
          />
          <Input
            name={information.email.name}
            placeholder="rni.software@gmail.com"
          />
          <div className="field-container">
            <Input
              name={information.password.name}
              type={passwordVisible ? Type.text : Type.password}
              placeholder="min. 6 charcters"
              minLength={6}
              onChange={(e) => {
                setInformation((prev) => ({
                  ...prev,
                  password: {
                    ...information.password,
                    value: e.target.value,
                  },
                }));
              }}
            />
            <span
              title={passwordVisible ? "hide password" : "show password"}
              className="input-icon"
              onClick={() => {
                setPasswordVisible(!passwordVisible);
              }}
            >
              <FontAwesomeIcon icon={passwordVisible ? faEyeSlash : faEye} />
            </span>
          </div>

          <div className="field-container">
            <Input
              name={information.repeatPassword.name}
              minLength={6}
              type={rPasswordVisible ? Type.text : Type.password}
              placeholder="Retype password"
              onChange={(e) => {
                setInformation((prev) => ({
                  ...prev,
                  repeatPassword: {
                    ...information.repeatPassword,
                    value: e.target.value,
                  },
                }));
              }}
            />
            <span
              title={rPasswordVisible ? "hide password" : "show password"}
              className="input-icon"
              onClick={() => {
                setRPasswordVisible(!rPasswordVisible);
              }}
            >
              <FontAwesomeIcon icon={rPasswordVisible ? faEyeSlash : faEye} />
            </span>
          </div>
          <Input
            name={information.phoneNumber.name}
            placeholder="Phone number"
          />
          <div className="register-button">
            <button>Create an account</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SingUpForm;
