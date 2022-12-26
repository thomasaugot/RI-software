import './SignButton.scss'

type buttonProp = {
    text: string
}

const SignButton = ({
    text
}: buttonProp) => {
  return (
    <div>
      <button className='sign-button' type="submit">{text}</button>
    </div>
  )
}

export default SignButton
