import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useFormik } from "formik";
import { useMutation } from 'react-query'
import "./SignUpForm.scss";
import Input, { Type } from "../Input";
import { BiErrorCircle } from "react-icons/bi";
import { SignupSchema } from "../../validateSchema";
import { Link, useNavigate } from "react-router-dom";
import SignButton from "../SignButton";
import axios from "axios";

type MyFormValues = {
  companyName: string
  login: string
  email: string
  password: string
  confirmPassword: string
  phoneNumber:string
}

 // register method
 const register = async (
  { 
    companyName,
    login,
    email,
    password,
    phoneNumber
  }: MyFormValues) => {
  const newData = {
    companyName,
    login,
    email,
    password,
    phoneNumber
  }
  const {data: response } = await axios.post('http://127.0.0.1:5000/api/signup', newData,{
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': '*',
    },
  })

  return response.data
}

const SingUpForm = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [rPasswordVisible, setRPasswordVisible] = useState(false);
  const [isError, setIsError] = useState(false)
  const navigate = useNavigate()
  const { mutate, isLoading} = useMutation(register,{
    onError :(error)=>{
      setIsError(true)
      console.log(error)
    }
  })
  const initialValues: MyFormValues = {
    companyName:'',
    login: '',
    email: '',
    password: '',
    confirmPassword: '',
    phoneNumber: ''
  }
  const onSubmit = async (values: MyFormValues) => {
    mutate(values)
    if(!isLoading && !isError){
      setTimeout(()=> navigate(`/confirmation/${values.email}`),1000)
    }
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
       <div className={(errors.email && touched.email) || (errors.confirmPassword && touched.confirmPassword) || isError ? "error" : "class-error"}>
           <BiErrorCircle/>
           <p>{errors.email || errors.confirmPassword || `email address already exists`}</p>
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
           name='login'
           placeholder="Login"
           onBlur={handleBlur}
           value={values.login}
           onChange={handleChange}
         />
         <Input
           name='email'
           placeholder="Email"
           onBlur={handleBlur}
           value={values.email}
           onChange={handleChange}
         />
         <div className="field-container">
           <Input
             name='password'
             type={passwordVisible ? Type.text : Type.password}
             placeholder="Password(min. 6 charcters)"
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
           <Input
             name='confirmPassword'
             onBlur={handleBlur}
             minLength={6}
             type={rPasswordVisible ? Type.text : Type.password}
             placeholder="Repeat password"
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
             <FontAwesomeIcon icon={rPasswordVisible ? faEye : faEyeSlash} />
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
