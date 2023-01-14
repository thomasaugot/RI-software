
import "./SignUpForm.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { BiErrorCircle, } from "react-icons/bi";
import Field from "../../components/Field";
import Submitbutton from "../../components/Submitbutton";
import { useMutation } from "react-query";
import Heading from "../../components/Heading";
import { ErrorProps, MyFormProps } from "../../types/types";


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
  const [errors, setErrors] = useState<ErrorProps>({});
  const navigate = useNavigate()
  const { mutate: signup, isError: signError } = useMutation("")
  const { mutate: verify } = useMutation("")


  const handleSubmit = async (e: any) => {
    e.preventDefault()
    if (!errors.email && !errors.password && !errors.confirmPassword) {
      await signup()
      await verify()
      if (!signError) {
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
            name='firstName'
            placeholder="First name"
            value={formData.firstName}
            onBlur={handleBlur}
            onChange={handleChange}
            type="text" />
            <Field
            name='lastName'
            placeholder="Last name"
            value={formData.lastName}
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
              type="password"
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
              <FontAwesomeIcon icon={passwordVisible ? faEye : faEyeSlash} />
            </span>
          </div>

          <div className="field-container">
            <Field
              name='confirmPassword'
              onBlur={handleBlur}
              minLength={3}
              type="password"
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
              <FontAwesomeIcon icon={passwordVisible ? faEye : faEyeSlash} />
            </span>
          </div>
          <Field
            name='phoneNumber'
            placeholder="Phone number"
            onBlur={handleBlur}
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
