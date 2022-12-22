import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useFormik } from "formik";
import "./SignUpForm.scss";
import Input, { Type } from "../Input";
import { BiErrorCircle } from "react-icons/bi";
import { SignupSchema } from "../../validateSchema";
import { Link, useNavigate } from "react-router-dom";
import SignButton from "../SignButton";

type MyFormValues = {
  companyName: string
  fullCompanyName: string
  login: string
  email: string
  password: string
  confirmPassword: string
  phoneNumber:string
}

const SingUpForm = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [rPasswordVisible, setRPasswordVisible] = useState(false);
  const navigate = useNavigate()
  const initialValues: MyFormValues = {
    companyName:'',
    fullCompanyName: '',
    login: '',
    email: '',
    password: '',
    confirmPassword: '',
    phoneNumber: ''
  }
  const onSubmit = async (values: any) => {
    console.log("submit",values)
    setTimeout(()=> navigate(`/confirmation/${values.email}`),1000)
  }
  const {values, handleSubmit, errors,touched, handleChange, handleBlur} = useFormik({
    initialValues,
    onSubmit,
    validationSchema: SignupSchema
  })
  

  return (
    <div className="registration-Div">
       <form 
       onSubmit={handleSubmit}
       className="registration-form">
       <header>
         <h2 className="registration-header">Create an account
         </h2>
         <h4 className="registration-header">
           Have an account? <Link to="/login">Sign in</Link>
         </h4>
       </header>
       <div className={(errors.email && touched.email) || (errors.confirmPassword && touched.confirmPassword) ? "error" : "class-error"}>
           <BiErrorCircle/>
           <p>{errors.email || errors.confirmPassword}</p>
        </div>
       <div className="registration-info">
         <Input
           name='companyName'
           placeholder="Company Name"
           value={values.companyName}
           onBlur={handleBlur}
           onChange={handleChange}
         />
         <Input
           name='fullCompanyName'
           placeholder="Full Company Name"
           onBlur={handleBlur}
           value={values.fullCompanyName}
           onChange={handleChange}
         />
         <Input
           name='login'
           placeholder="Enter Username here"
           onBlur={handleBlur}
           value={values.login}
           onChange={handleChange}
         />
         <Input
           name='email'
           placeholder="rni.software@gmail.com"
           onBlur={handleBlur}
           value={values.email}
           onChange={handleChange}
         />
         <div className="field-container">
           <Input
             name='password'
             type={passwordVisible ? Type.text : Type.password}
             placeholder="min. 6 charcters"
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
             <FontAwesomeIcon icon={passwordVisible ? faEyeSlash : faEye} />
           </span>
         </div>

         <div className="field-container">
           <Input
             name='confirmPassword'
             onBlur={handleBlur}
             minLength={6}
             type={rPasswordVisible ? Type.text : Type.password}
             placeholder="Retype password"
             value={values.confirmPassword}
             onChange={handleChange}
           />
           <span
             title={rPasswordVisible ? "hide password" : "show password"}
             className="input-icon"
             onClick={() => {
               setRPasswordVisible(!rPasswordVisible);
             }}
           >
             <FontAwesomeIcon icon={rPasswordVisible ? faEyeSlash : faEye} />
           </span>
         </div>
         <Input
           name='phoneNumber'
           placeholder="Phone number"
           onBlur={handleBlur}
           value={values.phoneNumber}
           onChange={handleChange}
         />
         <SignButton text="Create"/>
       </div>
     </form>
    </div>
  );
};

export default SingUpForm;
