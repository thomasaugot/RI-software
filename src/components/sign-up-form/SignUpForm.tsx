import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

import "./SignUpForm.scss";

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
          <br/>
          <h4 className="registration-header">
            Have an account? <a href="Login">Sing in</a>
          </h4>
        </header>
        <div className="registration-info">
          <input
            name={information.companyName.name}
            type="text"
            placeholder="Company Name"
            required
          />

          <input
            name={information.fullCompanyName.name}
            type="text"
            placeholder="Full Company Name"
            required
          />

          <input
            name={information.login.name}
            type="text"
            placeholder="Enter Username here"
            required
          />

          <input
            name={information.email.name}
            type="text"
            placeholder="rni.software@gmail.com"
            required
          />
          <div className="field-container">
            <input
              name={information.password.name}
              type={passwordVisible ? "text" : "password"}
              placeholder="min. 6 charcters"
              minLength={6}
              required
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
            <input
              name={information.repeatPassword.name}
              minLength={6}
              type={rPasswordVisible ? "text" : "password"}
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
              required
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
          <input
            name={information.phoneNumber.name}
            type="tel"
            placeholder="Phone number"
            required
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
