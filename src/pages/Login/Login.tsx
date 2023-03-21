import { useState } from "react";
import { whoAmIUrl, loginUrl } from "../../utils/network";
import { unauthorizedRequest, authorizedRequest } from "../../utils/queries";


import { Link, Navigate, useNavigate } from "react-router-dom";
import { errorAlert } from "../../assets/Icons";
import { eye, eyeoff } from "../../assets/Icons";
import CheckBox from "../../components/general/checkBox/checkBox";
import Field from "../../components/general/inputField/inputField";
import Heading from "../../components/general/title/title";
import SubmitButton from "../../components/general/submitButton/submitButton";
import "./Login.scss";
import { buttonType } from "../../types/general/generalTypes";
import FormError from "../../components/general/formError/formError";

const Login = () => {

  const [error, setError] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [errorText, setErrorText] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  // login method
  const onSumit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    unauthorizedRequest(loginUrl, 'POST', { email, password }).then((responce) => {
      console.log(responce)
      if (responce.ok) {
        setError(false);

        new Promise<void>((resolveOuter) => {
          localStorage.setItem('accessToken', responce.result.access_token)
          localStorage.setItem('refreshToken', responce.result.refresh_token)
          resolveOuter()
        }).then(() => {
          authorizedRequest(whoAmIUrl, 'GET').then((whoAmIResponce: any) => {
            console.log(whoAmIResponce)
            localStorage.setItem("avatar", whoAmIResponce.result.avatar)
            localStorage.setItem("userId", whoAmIResponce.result.user_id)
            // localStorage.setItem("companyId", whoAmIResponce.result.companies[0].company_id)
            // localStorage.setItem("employeeId", whoAmIResponce.result.companies[0].employee_id)
            // localStorage.setItem("companyAvatar", whoAmIResponce.result.companies[0].avatar)
            // localStorage.setItem("companyName", whoAmIResponce.result.companies[0].name)
            navigate('/');
          })
        })
      } else if (responce === 400 || responce === 401) {
        setError(true);
        setErrorText("Wrong email or password");
      }
    })


    // e.preventDefault();
    // return await login({ email, password })
    //   .then((res) => {
    //     if (res.status === 400) {
    //       setError(true);
    //       setErrorText("Wrong email or password");
    //       return
    //     } else if (res.status === 200) {
    //       setError(false);
    //       if (isChecked) {
    //         localStorage.setItem("isLogged", "true");
    //       }
    //       console.log(res)
    //       return res.json();
    //     }
    //   })
    //   .then((data) => {
    //     console.log(data);
    //     new Promise<void>((resolveOuter) => {
    //       localStorage.setItem("token", data.result.access_token)
    //       resolveOuter()
    //     }).then(()=>{
    //        authorizedRequest(whoAmIUrl, 'GET').then((result) => {
    //         console.log(result)
    //         localStorage.setItem("avatar", result.result.avatar)
    //         localStorage.setItem("id", result.result.user_id)
    //         localStorage.setItem("company_id", result.result.companies[0].company_id)
    //         localStorage.setItem("employee_id", result.result.companies[0].employee_id)
    //         localStorage.setItem("company_avatar", result.result.companies[0].avatar)
    //         localStorage.setItem("company_name", result.result.companies[0].name)
    //         navigate('/');
    //        })
    //     })

    //     return;
    //   })
    //   .catch((err) => {
    //     console.log(err)
    //     setError(true);
    //   });
  };

  if (localStorage.getItem("isLogged") === "true")
    return <Navigate to="/" replace />;

  return (
    <div className="login">
      <div className="login-container">
        <div className="login-header">
          <Heading text="Sign In" />
          <div className="login-text">
            <p>Don’t have an account yet?</p>
            <Link to='/register'>
              <p>Register</p>
            </Link>
          </div>
        </div>
        <FormError errorText={errorText} appear={error} />
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
