import { SubmitbuttonProps } from '../../types'
import './Submitbutton.scss'

const Submitbutton = ({
    text,
    type
}: SubmitbuttonProps) => {
  return (
    <button className='submitbutton' type={type}>
      {text}
    </button>
  )
}

export default Submitbutton
