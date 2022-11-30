
// import './confirmation-email-form.styles.scss'
import "../../routes/registration/Registration.scss";

const ConfirmationForm = () => {
    return (
      <div className="registration-Div">
        <form className="registration-form">
          <div>
           <h2>Email verification</h2>
           <h4>
            Do you want to return? <a href="registrationPage">Go</a>
           </h4>
            <h4>a confirmation code has been sent to *emile from db</h4>
          </div>
          <div className="registration-info">
           <label>Enter code</label>
           <input
              type="text"
              required
              placeholder="The code"
            />
          </div>
          <button className="registration-button">Send</button>
          </form>
      </div>
    )
  }

export default ConfirmationForm
