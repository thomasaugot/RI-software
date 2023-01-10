import React from "react";
import { Link } from "react-router-dom";
import CheckBox from "../CheckBox";
import Field from "../Field";
import Heading from "../Heading";
import Submitbutton from "../Submitbutton";
import Text from "../Text";
import "./Login.scss";

const Login = () => {
  const [isError, setIsError] = React.useState(true);
  const [errorText, setErrorText] = React.useState("Wrong user id or password");
  const [isChecked, setIsChecked] = React.useState(false);
  return (
    <div className="login">
      <div className="login__container">
        <div className="login__header">
          <Heading text="Sign In" />
          <div className="login__text">
            <Text text="Don’t have an account yet?" />
            <Link to="/registration">
              <Text text=" Register" color="#0B8FEF" />
            </Link>
          </div>
        </div>
        {isError ? (
          <div className="login__error">
            <Text color="#F61D1D" text={errorText} />
          </div>
        ) : null}
        <form className="login__form">
          <div className="form-controls">
            <Field type="email" placeholder="User ID" name="email" />
            <Field type="password" placeholder="Password" name="password" />
          </div>
          <div className="login__options">
            <CheckBox isChecked={isChecked} setIsChecked={setIsChecked} text="Remember me"/>
            <Link to="#" className="login__forget">Forget password?</Link>
          </div>
          <Submitbutton text="Sign In" />
        </form>
      </div>
    </div>
  );
};

export default Login;
