
import "./SignUp.scss";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { BiErrorCircle, } from "react-icons/bi";
import { buttonType, MyFormProps } from "../../types/types";
import Heading from "../../components/Title/Title";
import Field from "../../components/InputField/InputField";
import Submitbutton from "../../components/SubmitButton/SubmitButton";
import { eye, eyeoff } from "../../assets/Icons";
import { register } from "../../queries/SignUpQueries";
import Text from "../../components/Text/Text";

//--//check password Minlenght



const SingUpForm = () => {
  const [formData, setFormData] = useState<MyFormProps>({
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone_number: ''
  })
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [isError, setError] = useState(false);
  const [errorText, setErrorText] = useState("");
  const navigate = useNavigate()


  const handleSubmit = async (e: any) => {
    e.preventDefault()
    const registerResponse = await register(formData)
    if (registerResponse.status === 400) {
      setError(true);
      setErrorText("This email is already use by another account.")
    }
    else if (formData.password !== formData.confirmPassword) {
      setError(true);
      setErrorText("Passwords do not match.")
    } else {
      setError(false);
      setTimeout(() => navigate(`/confirmation/${formData.email}`), 2000)
    }
  }


  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e?.target.value
    })
  }



  return (
    <div className="registration-Div">
      <form
        onSubmit={handleSubmit}
        className="registration-form">
        <header>
          <div className="registration-header"><Heading text="Create an account" />
          </div>
          <h4 className="registration-header">
            Have an account? <Link to="/login">Sign in</Link>
          </h4>
        </header>
        {isError ? (
          <div className="class-error">
            <BiErrorCircle size={"1.25rem"} />
            <Text color="#F61D1D" text={errorText} />
          </div>
        ) : null}
        <div className="registration-info">
          <Field
            name='first_name'
            placeholder="First name"
            value={formData.first_name}
            onChange={handleChange}
            type="text" />
          <Field
            name='last_name'
            placeholder="Last name"
            value={formData.last_name}
            onChange={handleChange}
            type="text" />
          <Field
            name='email'
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            type="email" />
          <div className="field-container">
            <Field
              name='password'
              type={passwordVisible ? "text" : "password"}
              placeholder="Password"
              minLength={3}
              value={formData.password}
              onChange={handleChange}
            />
            <span
              title={passwordVisible ? "hide password" : "show password"}
              className="input-icon"
              onClick={() => {
                setPasswordVisible(!passwordVisible);
              }}
            >
              {passwordVisible ? eye : eyeoff}
            </span>
          </div>

          <div className="field-container">
            <Field
              name='confirmPassword'
              minLength={3}
              type={passwordVisible ? "text" : "password"}
              placeholder="Repeat password"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
          </div>
          <Field
            name='phone_number'
            placeholder="Phone number"
            value={formData.phone_number}
            onChange={handleChange}
            type="number" />
          <Submitbutton type={buttonType.submit} text="Create" />
        </div>
      </form>
    </div>
  );
};

export default SingUpForm;
