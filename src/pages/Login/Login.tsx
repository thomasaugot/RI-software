import { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { BiErrorCircle } from "react-icons/bi";
import { eye, eyeoff } from "../../assets/Icons";
import CheckBox from "../../components/CheckBox/CheckBox";
import Field from "../../components/InputField/InputField";
import Heading from "../../components/Title/Title";
import SubmitButton from "../../components/SubmitButton/SubmitButton";
import Text from "../../components/Text/Text";
import "./Login.scss";
import { buttonType } from "../../types/types";
import { login } from "../../queries";

export const token = localStorage.getItem("token");

const Login = () => {
  const [isError, setIsError] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [errorText, setErrorText] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  // login method
  const onSumit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    return await login({ email, password })
      .then((res) => {
        if (res.status === 400) {
          setIsError(true);
          setErrorText("Wrong email or password");
        } else if (res.status === 200) {
          setIsError(false);
          if (isChecked) {
            localStorage.setItem("isLogged", "true");
          }
          console.log("isLogged");
          navigate("/");
        }
        return res.json();
      })
      .then((data) => localStorage.setItem("token", data.result.access_token))
      .catch((err) => {
        setIsError(true);
      });
  };

  if (localStorage.getItem("isLogged") === "true")
    return <Navigate to="/" replace />;

  return (
    <div className="login">
      <div className="login-container">
        <div className="login-header">
          <Heading text="Sign In" />
          <div className="login-text">
            <Text text="Don’t have an account yet?" />
            <Link to="/register">
              <Text text=" Register" color="#0B8FEF" />
            </Link>
          </div>
        </div>
        {isError ? (
          <div className="login-error">
            <BiErrorCircle size={"1.25rem"} />
            <Text color="#F61D1D" text={errorText} />
          </div>
        ) : null}
        <form onSubmit={onSumit} className="login-form">
          <div className="form-controls">
            <Field
              type="text"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              placeholder="Email"
              name="email"
            />
            <div className="password-control">
              <Field
                type={isVisible ? "text" : "password"}
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                placeholder="Password"
                name="password"
              />
              <span
                title={isVisible ? "hide password" : "show password"}
                className="input-icon"
                onClick={() => {
                  setIsVisible(!isVisible);
                }}
              >
                {isVisible ? eye : eyeoff}
              </span>
            </div>
          </div>
          <div className="login-options">
            <CheckBox
              isChecked={isChecked}
              setIsChecked={setIsChecked}
              label="Remember me"
            />
            <Link to="/forget" className="login-forget">
              Forget password?
            </Link>
          </div>
          <SubmitButton type={buttonType.submit} text="Sign In" />
        </form>
      </div>
    </div>
  );
};

export default Login;