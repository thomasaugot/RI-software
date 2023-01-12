import  { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { BiErrorCircle } from 'react-icons/bi'
import CheckBox from "../CheckBox";
import Field from "../Field";
import Heading from "../Heading";
import Submitbutton from "../Submitbutton";
import Text from "../Text";
import "./Login.scss";
import { buttonType } from "../../types";

const baseURl = process.env.REACT_APP_URL;

const Login = () => {
  const [isError, setIsError] = useState(false);
  const [errorText, setErrorText] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate()
  // login method
  const onSumit = async (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    let data = {
      email,
      password
    }
    return await  fetch(`${baseURl}/api/login`,{
      method: 'POST',
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" }
    })
    .then((res) => {
      if(res.status === 400){
        setIsError(true)
        setErrorText("Wrong email or password")
      } else if(res.status === 200){
        setIsError(false)
        if(isChecked){
          localStorage.setItem("isLogged", "true")
        }
        setTimeout(()=>{
          navigate('/')
        }, 2000)
      }
      return res.json()
    }
    )
    .then((data) => localStorage.setItem("token", data.result.access_token))
    .catch((err)=> {
      setIsError(true) 
    })
  }

  if(localStorage.getItem("isLogged")==="true") return <Navigate to='/' replace/>

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
        <form onSubmit={onSumit} className="login__form">
          <div className="form-controls">
            <Field type="email" onChange={(e)=> setEmail(e.target.value)} value={email} placeholder="Email" name="email" />
            <Field type="password" onChange={(e)=> setPassword(e.target.value)} value={password} placeholder="Password" name="password" />
          </div>
          <div className="login__options">
            <CheckBox isChecked={isChecked} setIsChecked={setIsChecked} text="Remember me"/>
            <Link to="/forget" className="login__forget">Forget password?</Link>
          </div>
          <Submitbutton type={buttonType.submit} text="Sign In" />
        </form>
      </div>
    </div>
  );
};

export default Login;
