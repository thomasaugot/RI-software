
import "./SignUp.scss";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { buttonType, MyFormProps } from "../../types/types";
import Heading from "../../components/Title/Title";
import Field from "../../components/InputField/InputField";
import Submitbutton from "../../components/SubmitButton/SubmitButton";
import { eye, eyeoff, errorAlert } from "../../assets/Icons";
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
  });

  const [passwordVisible, setPasswordVisible] = useState(false);
  const [error, setError] = useState(false);
  const [errorText, setErrorText] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e:  React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if(formData.password.length > 6 && /[a-zA-Z]/g.test(formData.password) && /[0-9]/g.test(formData.password)){
      const registerResponse = await register(formData);
      console.log('registerResponse: ', registerResponse)
      console.log(registerResponse.error_code === 409);
      console.log(errorText);

      if (registerResponse.error_code === 409) {
        setError(true);
        setErrorText("This email is already use by another account.");
      }
      else if (formData.password !== formData.confirmPassword) {
        setError(true);
        setErrorText("Passwords do not match.");
      } else {
        new Promise<void>((resolveOuter) => {
          setError(false);
          localStorage.setItem("verificationToken", registerResponse.result.token);
          resolveOuter();
        }).then(()=>{
          navigate(`/confirmation/${formData.email}`);
        })
      }
    }else{
      setError(true);
      setErrorText("The password has to be at least 6 characters length and has to include number and letters.");
    }
  }


  const handleChange = (e: React.FormEvent<HTMLInputElement>): void => {
    setFormData({
      ...formData,
      [e.currentTarget.name]: e.currentTarget.value
    })
  }

  const handlePhoneNumberChange = (e: React.FormEvent<HTMLInputElement>): void => {
    setFormData({
      ...formData,
      [e.currentTarget.name]: e.currentTarget.value.toLowerCase().replace(/[a-z]/g,'')
    })
  }

  return (
    <div className="registration">
      <form onSubmit={handleSubmit} className="registration-form"> 
      <div className="registration-wrraper">

        <div className="registration-header-container">
          <div className="registration-header">
            <Heading text="Create an account" />
          </div>
          <h4 className="registration-header">
            Have an account? <Link to="/login">Sign in</Link>
          </h4>
        </div>
        
        <div className="error-container">
          {error ? (
            <>
              {errorAlert}
              <Text color="#F61D1D" text={errorText} />
            </>
          ) : null}
        </div>
          
          <div className="registration-info">
            <div className="fields-container">
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
                  minLength={6}
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

              <Field
                name='confirmPassword'
                minLength={6}
                type={passwordVisible ? "text" : "password"}
                placeholder="Repeat password"
                value={formData.confirmPassword}
                onChange={handleChange}
              />


              <Field
                name='phone_number'
                placeholder="Phone number"
                value={formData.phone_number}
                onChange={handlePhoneNumberChange}
                type="tel" />

            </div>
            <Submitbutton type={buttonType.submit} text="Create" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default SingUpForm;
