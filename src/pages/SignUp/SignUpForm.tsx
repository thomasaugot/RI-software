
import "./SignUpForm.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { BiErrorCircle,  } from "react-icons/bi";
import Field from "../../components/Field";
import Submitbutton from "../../components/Submitbutton";
import { useMutation } from "react-query";
import Heading from "../../components/Heading";



export type MyFormValues = {
  companyName: string
  companyLegalName: string
  login: string
  email: string
  password: string
  confirmPassword: string
  phoneNumber: string
}

const SingUpForm = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [isError, setError] = useState(false);
  const navigate = useNavigate()
  const { mutate: signup, isError: signError } = useMutation("")
  const { mutate: verify } = useMutation("")

  const initialValues: MyFormValues = {
    companyName: '',
    companyLegalName: '',
    login: '',
    email: '',
    password: '',
    confirmPassword: '',
    phoneNumber: ''
  }
  const onSubmit = async (values: MyFormValues) => {
    await signup()
    await verify()
    if (!signError) {
      setTimeout(() => navigate(`/confirmation/${values.email}`), 2000)
    } else {
      setError(true)
    }
  }

  const { values, handleSubmit, errors, touched, handleChange, handleBlur } = useFormik({
    initialValues,
    onSubmit,
    // validationSchema: SignupSchema
  })


  return (
    <div className="registration-Div">
      <form
        onSubmit={handleSubmit}
        className="registration-form">
        <header>
          <h2 className="registration-header"><Heading text="Create an account" />
          </h2>
          <h4 className="registration-header">
            Have an account? <Link to="/login">Sign in</Link>
          </h4>
        </header>
        <div className={(errors.email && touched.email) || (errors.confirmPassword && touched.confirmPassword) || isError ? "error" : "class-error"}>
          <BiErrorCircle />
          <p>{errors.email || errors.confirmPassword || `email address already exists`}</p>
        </div>
        <div className="registration-info">
          <Field
            name='fullname'
            placeholder="Full name"
            value={values.companyLegalName}
            onBlur={handleBlur}
            onChange={handleChange}
            type="text" />
          <Field
            name='email'
            placeholder="Email"
            onBlur={handleBlur}
            value={values.email}
            onChange={handleChange}
            type="email" />
          <div className="field-container">
            <Field
              name='password'
              type="password"
              placeholder="Password"
              onBlur={handleBlur}
              minLength={6}
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

          <div className="field-container">
            <Field
              name='confirmPassword'
              onBlur={handleBlur}
              minLength={6}
              type="password"
              placeholder="Repeat password"
              value={values.confirmPassword}
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
            value={values.phoneNumber}
            onChange={handleChange}
            type="number" />
          <Submitbutton text="Create" />
        </div>
      </form>
    </div>
  );
};

export default SingUpForm;
