import { BiErrorCircle } from 'react-icons/bi'
import { Link,useParams } from 'react-router-dom'
import { useFormik } from 'formik'
import './ConfimationEmailForm.scss'
import React, { useState } from 'react'
import Field from '../../components/Field'
import Submitbutton from '../../components/Submitbutton'
import Heading from '../../components/Heading'


type codeProps = {
  code: any 
}

const ConfirmationForm = () => {
  const { email } = useParams()
  const [isError, setIsError] = useState(false)
  const [formData, setFormData] = useState<codeProps>({code : ''})
 

  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;
    setFormData({ ...formData, [name]: Number(value) })
  }

  const handleSubmit = (e : React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
    setIsError(false)
  }
  
 
    return (
      <div className="verification-div">
        <form 
        onSubmit={handleSubmit}
        className="verification-form">
          <div>
            <div className='form-header'>
            <Heading text="Verify Your Email Address" />
            <p>
              Do you want to go back? <Link to="/register">Return</Link>
            </p>
            </div>
            <div className={isError ? 'error': 'class-error'}>
              <BiErrorCircle/>
              <p>Wrong verification code</p>
            </div>
            <div className='form-email-info'>
              <p>We sent a confirmation code to </p>
              <p className='email'>{email}</p>
            </div>
          </div>
          <div className="form-control">
           <Field
              name="code"
              type="text"
              value={formData.code}
              onChange={handleChange}
              placeholder="Enter code"
            />
          </div>
          <Submitbutton text='Send' />
          </form>
      </div>
    )
  }

export default ConfirmationForm
