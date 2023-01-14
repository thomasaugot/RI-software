
import "./SignUpForm.scss";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { BiErrorCircle, } from "react-icons/bi";
import { useMutation } from "react-query";
import { buttonType, ErrorProps, MyFormProps } from "../../types/types";
import Heading from "../../components/Title/Title";
import Field from "../../components/InputField/InputField";
import Submitbutton from "../../components/SubmitButton/SubmitButton";
import { eye, eyeoff } from "../../assets/Icons";
import { register, verification } from "../../queries/queries";


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
  const [errors, setErrors] = useState<ErrorProps>({});
  const navigate = useNavigate()
  const { mutate: signup, isError: signError } = useMutation(register)
  const { mutate: verify } = useMutation(verification)

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    if (!errors.email && !errors.password && !errors.confirmPassword) {
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

  const handleBlur = (e: any) => {
    const { name, value } = e.target;
    switch (name) {
      case 'email':
        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
          setErrors({ ...errors, [name]: 'Invalid email address' });
        } else {
          setErrors({ ...errors, [name]: '' });
        }
        break;
      case 'password':
      case 'confirmPassword':
        if (value.length < 3) {
          setErrors({ ...errors, [name]: 'Password must be at least 5 characters ' });
        } else {
          setErrors({ ...errors, [name]: '' })
        }
        break;
      case 'confirmPassword':
        if (value !== formData.password) {
          setErrors({ ...errors, [name]: 'Passwords do not match' })
        } else {
          setErrors({ ...errors, [name]: '' });
        }
        break
      default:
        break;
    }
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
        <div className={(errors.email) || (errors.confirmPassword) || isError ? "error" : "class-error"}>
          <BiErrorCircle />
          <p>{errors.email || errors.confirmPassword || `email address already exists`}</p>
        </div>
        <div className="registration-info">
          <Field
            name='first_name'
            placeholder="First name"
            value={formData.first_name}
            onBlur={handleBlur}
            onChange={handleChange}
            type="text" />
          <Field
            name='last_name'
            placeholder="Last name"
            value={formData.last_name}
            onBlur={handleBlur}
            onChange={handleChange}
            type="text" />
          <Field
            name='email'
            placeholder="Email"
            onBlur={handleBlur}
            value={formData.email}
            onChange={handleChange}
            type="email" />
          <div className="field-container">
            <Field
              name='password'
              type={passwordVisible? "text" : "password"}
              placeholder="Password"
              onBlur={handleBlur}
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
              onBlur={handleBlur}
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
            name='phone_number'
            placeholder="Phone number"
            onBlur={handleBlur}
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
