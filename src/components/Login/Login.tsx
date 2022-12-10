import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

import "../sign-up-form/SignUpForm.scss";

const LoginForm = () => {
    const [login, setLogin] = useState({
        userId: { name: "userId", value: "" },
        password: { name: "password", value: "" },
    });
    const [passwordVisible, setPasswordVisible] = useState(false);

    return (
        <div className="registration-Div">
            <form className="registration-form">
                <header>
                    <h2 className="registration-header">Sign In
                    </h2>
                    <br />
                    <h4 className="registration-header">
                        Don have an account yet? <a href="registrationPage">Register</a>
                    </h4>
                </header>
                {/* <div>
                    <p>Wrong User info please check</p>
                </div> */}
                <div className="registration-info">
                    <input
                        name={login.userId.name}
                        type="text"
                        placeholder="User ID"
                        required
                    />
                    <div className="field-container">
                        <input
                            name={login.password.name}
                            type={passwordVisible ? "text" : "password"}
                            placeholder="min. 6 charcters"
                            minLength={6}
                            required
                            onChange={(e) => {
                                setLogin((prev) => ({
                                    ...prev,
                                    password: {
                                        ...login.password,
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
                    <div className="checkBox">
                        <label><input id="rememberme" name="rememberme" value="remember" type="checkbox" /> &nbsp;Remember me</label>
                        <a href="/hierarchy">Forget Password</a>
                    </div>
                    <div className="register-button">
                        <button>Sign In</button>
                    </div>
                </div>
            </form>
        </div>
    );
};
export default LoginForm;