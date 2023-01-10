import React from "react";
import { Link } from "react-router-dom";
import { BiErrorCircle } from 'react-icons/bi'
import { useFormik } from 'formik'
import CheckBox from "../CheckBox";
import Field from "../Field";
import Heading from "../Heading";
import Submitbutton from "../Submitbutton";
import Text from "../Text";
import "./Login.scss";
import { buttonType, LoginType } from "../../types";

const initialValues: LoginType = {
  email: '',
  password:''
}

const Login = () => {
  const [isError, setIsError] = React.useState(false);
  const [errorText, setErrorText] = React.useState("Wrong user id or password");
  const [isChecked, setIsChecked] = React.useState(false);

  const onSubmit = (values:LoginType) => {
    console.log(values)
    setIsError(true)
    setErrorText("Wrong user id or password")
    
  }

  const {values, handleSubmit, handleChange} = useFormik({
    initialValues,
    onSubmit
  })

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
            <BiErrorCircle size={"1.25rem"}/>
            <Text color="#F61D1D" text={errorText} />
          </div>
        ) : null}
        <form onSubmit={handleSubmit} className="login__form">
          <div className="form-controls">
            <Field type="email" onChange={handleChange} value={values.email} placeholder="Email" name="email" />
            <Field type="password" onChange={handleChange} value={values.password} placeholder="Password" name="password" />
          </div>
          <div className="login__options">
            <CheckBox isChecked={isChecked} setIsChecked={setIsChecked} text="Remember me"/>
            <Link to="#" className="login__forget">Forget password?</Link>
          </div>
          <Submitbutton type={buttonType.submit} text="Sign In" />
        </form>
      </div>
    </div>
  );
};

export default Login;
