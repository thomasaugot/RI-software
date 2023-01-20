
import "./SignUp.scss";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { BiErrorCircle, } from "react-icons/bi";
import { useMutation } from "react-query";
import { MyFormProps } from "../../types/types";
import Heading from "../../components/Title/Title";
import Field from "../../components/InputField/InputField";
import Text from "../../components/Text/Text";
import Submitbutton from "../../components/SubmitButton/SubmitButton";
import { eye, eyeoff } from "../../assets/Icons";
import { register, verification } from "../../queries/SignUpQueries";


//--//check password Minlenght



const SingUpForm = () => {
  const [formData, setFormData] = useState<MyFormProps>({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    phoneNumber: ''
  })
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [isError, setError] = useState(false);
  const [errorText, setErrorText] = useState("");
  const navigate = useNavigate()
  const { mutate: signup, isError: signError } = useMutation(register)
  const { mutate: verify } = useMutation(verification)

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    if (isError) {
      await signup(formData)
      await verify(formData.email)
      if (!signError) {
        // await code_verify(e)
        setTimeout(() => navigate(`/confirmation/${formData.email}`), 2000)
      } else {
        setError(true)
      }
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
            name='firstName'
            placeholder="First name"
            value={formData.firstName}
            onChange={handleChange}
            type="text" />
            <Field
            name='lastName'
            placeholder="Last name"
            value={formData.lastName}
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
              type={passwordVisible? "text" : "password"}
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
              type={passwordVisible? "text" : "password"}
              placeholder="Repeat password"
              value={formData.confirmPassword}
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
          <Field
            name='phoneNumber'
            placeholder="Phone number"
            value={formData.phoneNumber}
            onChange={handleChange}
            type="number" />
          <Submitbutton text="Create" />
        </div>
      </form>
    </div>
  );
};

export default SingUpForm;
