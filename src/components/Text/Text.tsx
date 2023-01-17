import './Text.scss'
import { TextProps } from '../../types'

const Text = ({
  color,
  text
}: TextProps) => {
  return (
    <p style={{color}} className='text'>
      {text}
    </p>
  )
}

export default Text
