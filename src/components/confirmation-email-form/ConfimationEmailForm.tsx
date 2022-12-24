import { BiErrorCircle } from 'react-icons/bi'
import { Link,useParams } from 'react-router-dom'
import { useFormik } from 'formik'
import Input, { Type } from '../Input'
import SignButton from '../SignButton'
import './ConfimationEmailForm.scss'

type codeProps = {
  code: number 
}

const ConfirmationForm = () => {
  const { email } = useParams()
  const initialValues: codeProps = {
    code: 0
  }
  const {values, handleChange, handleSubmit} = useFormik({
    initialValues,
    onSubmit: (values) =>{
      console.log(values);
    }
  })
    return (
      <div className="verification-div">
        <form 
        onSubmit={handleSubmit}
        className="verification-form">
          <div>
            <div className='form-header'>
            <h3>Verify Your Email Address</h3>
            <p>
              Do you want to go back? <Link to="/registration">Return</Link>
            </p>
            </div>
            <div className="error">
              <BiErrorCircle/>
              <p>Wrong verification code</p>
            </div>
            <div className='form-email-info'>
              <p>We sent a confirmation code to </p>
              <p className='email'>{email}</p>
            </div>
          </div>
          <div className="form-control">
           <Input
              name="code"
              type={Type.number}
              value={values.code}
              onChange={handleChange}
              placeholder="Enter code"
            />
          </div>
          <SignButton text='Send' />
          </form>
      </div>
    )
  }

export default ConfirmationForm
