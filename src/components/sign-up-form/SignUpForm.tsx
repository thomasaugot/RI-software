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
          <h2>Create an account</h2>
          <h4>
            Do you already have a account? <a href="Login">Login</a>
          </h4>
        </header>
        <div className="registration-info">
          <label>Company Name</label>
          <input
            name={information.companyName.name}
            value={information.companyName.value}
            type="text"
            placeholder="Company Name"
            required
          />

          <label>Full Company Name</label>
          <input
            name={information.fullCompanyName.name}
            value={information.fullCompanyName.value}
            type="text"
            placeholder="Full Company Name"
            required
          />

          <label>Login</label>
          <input
            name={information.login.name}
            value={information.login.value}
            type="text"
            placeholder="Enter Username here"
            required
          />
          <label>E-mail address</label>

          <input
            name={information.email.name}
            value={information.email.value}
            type="text"
            placeholder="rni.software@gmail.com"
            required
          />
          <label>Password</label>
          <div className="field-container">
            <input
              name={information.password.name}
              value={information.password.value}
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

          <label>Repeat Password</label>
          <div className="field-container">
            <input
              name={information.repeatPassword.name}
              value={information.repeatPassword.value}
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

          <label>Phone number</label>
          <input
            name={information.phoneNumber.name}
            value={information.phoneNumber.value}
            type="number"
            placeholder="+xxxxxxxxxxx NO symbols"
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
