import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash,  } from "@fortawesome/free-solid-svg-icons";
import { useFormik } from 'formik'
import "../SignUp/SignUpForm.scss";
import Input, { Type } from "../Input";
import { BiErrorCircle} from 'react-icons/bi'
import { SignInSchema } from "../../validateSchema";
import { Link } from "react-router-dom";
import SignButton from "../SignButton";

const LoginForm = () => {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [isError, setIsError] = useState(false);
    const [isChecked, setIsChecked] = useState(false);

    const check = () => setIsChecked(!isChecked);
    const onSubmit = async (values : any)=>{
        console.log(values)
        setIsError(false)
    }
    const { values, handleChange, handleSubmit,handleBlur} = useFormik({
        initialValues: {
            email:'',
            password: ''
        },
        onSubmit,
        validationSchema: SignInSchema
    })
    return (
        <div className="registration-Div">
                <form
                onSubmit={handleSubmit}
                  className="registration-form">
                <header>
                    <h2 className="registration-header">Sign In
                    </h2>
                    <h4 className="registration-header">
                        Don't have an account yet? <Link to="/registration">Register</Link>
                    </h4>
                </header>
                <div className={isError ?"error" : "class-error"}>
                    <BiErrorCircle/>
                    <p>Wrong User info please check</p>
                </div>
                <div className="registration-info">
                    <Input
                        name='email'
                        placeholder="Email"
                        onBlur={handleBlur}
                        type={Type.email}
                        value={values.email}
                        onChange={handleChange}
                    />
                    <div className="field-container">
                        <Input
                            name='password'
                            type={passwordVisible ? Type.text : Type.password}
                            placeholder="min. 6 charcters"
                            onBlur={handleBlur}
                            value={values.password}
                            onChange={handleChange}
                        />
                        <span
                            title={passwordVisible ? "hide password" : "show password"}
                            className="input-icon"
                            onClick={() => {
                                setPasswordVisible(!passwordVisible);
                            }}
                        >
                            <FontAwesomeIcon icon={passwordVisible ? faEye : faEyeSlash} />
                        </span>
                    </div>
                    <div className="reminder-section">
                        <div className="check-container">
                            <div className="check-box" onClick={check}>
                                <span className={isChecked ? "checked": "unchecked"}></span>
                            </div>
                            <p>Remember me</p>
                        </div>
                        <Link to="#">Forget Password</Link>
                    </div>
                   <SignButton text="Sign In"/>
                </div>
            </form>
        </div>
    );
};
export default LoginForm;