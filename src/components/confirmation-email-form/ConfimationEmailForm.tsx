import { BiErrorCircle } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import Input from '../Input'
import SignButton from '../SignButton'
import './ConfimationEmailForm.scss'

const ConfirmationForm = () => {
    return (
      <div className="verification-div">
        <form className="verification-form">
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
              <p className='email'>jsmaylovrustam05@gmail.com </p>
            </div>
          </div>
          <div className="form-control">
           <Input
              name="code"
              type="text"
              placeholder="Enter code"
            />
          </div>
          <SignButton text='Send' />
          </form>
      </div>
    )
  }

export default ConfirmationForm
