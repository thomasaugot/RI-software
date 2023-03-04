import { Link, useParams, useNavigate } from 'react-router-dom'
import './Confimation.scss'
import React, { useState } from 'react'
import { buttonType, codeProps } from '../../types/types'
import Heading from '../../components/Title/Title'
import Submitbutton from '../../components/SubmitButton/SubmitButton'
import Field from '../../components/InputField/InputField'
import { verification } from '../../queries/SignUpQueries'
import { errorAlert } from "../../assets/Icons";
import Text from "../../components/Text/Text";


const ConfirmationForm = () => {
  const { email } = useParams();
  const [error, setError] = useState(false);
  const [formData, setFormData] = useState<codeProps>({ code: "" });
  const navigate = useNavigate();


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if(formData.code){
      const confirm = await verification(formData.code);

      if (!confirm.data.ok) {
        setError(true);
      } else {
        setError(false);
        navigate("/login");
      }
    }
    
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    if (isNaN(Number(value))) {
      setError(true);
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  return (
    <div className="verification">
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

          <div className="error-container">
            {error ? (
              <>
                {errorAlert}
                <Text color="#F61D1D" text='Wrong verification code' />
              </>
            ) : null}
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
        <Submitbutton type={buttonType.submit} text='Send' />
      </form>
    </div>
  )
}

export default ConfirmationForm
