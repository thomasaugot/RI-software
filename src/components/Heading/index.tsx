import { TextProps } from '../../types'
import './Heading.scss'

const Heading = ({text}: TextProps) => {
  return (
    <h2 className='heading'>
      {text}
    </h2>
  )
}

export default Heading
