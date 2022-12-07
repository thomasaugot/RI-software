
import './ConfimationEmailForm.scss'

const ConfirmationForm = () => {
    return (
      <div className="verification-div">
        <form className="verification-form">
          <div>
           <h3 className="first-verifi-title">Verify Your Email Address</h3>
           <h4 className="second-verifi-title">
            Do you want to return? <a href="registrationPage">Return</a>
           </h4>
            <h4 className="third-verifi-title">We sent a confirmation code to </h4>
            <h4 className="verifi-email">jsmaylovrustam05@gmail.com </h4>
            <br />
          </div>
          <div className="verification-info">
           <input
              type="text"
              required
              placeholder="Enter code"
            />
          </div>
          <div className="verification-button">
            <button>Send</button>
          </div>
          </form>
      </div>
    )
  }

export default ConfirmationForm
