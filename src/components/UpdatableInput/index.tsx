import React from 'react'
import './updatableInput.scss';
import { RxCross2} from 'react-icons/rx'
import { AiOutlineCheck} from 'react-icons/ai'
import { HiPencil } from 'react-icons/hi'

type updatableProps = {
  label: string
  value: string | number
  inputType: string
  name: string
  onChange: (e:React.ChangeEvent<HTMLInputElement>) => void
}

const UpdatableInput = ({label, value,name, inputType, onChange}: updatableProps) => {
  const [isUpdate, setIsUpdate] = React.useState(false)
  
  const modifer = () => setIsUpdate(!isUpdate)
  return (
    <div className='input__container'>
      <label className='input__label' htmlFor="">{label}</label>
      {isUpdate ? (
        <div className='update__input'>
          <input name={name} type={inputType} value={value} onChange={onChange}/>
          <div className='uinput__icon'>
            <RxCross2 className='icon' size={"1em"} onClick={modifer}/>
            <AiOutlineCheck className='icon' size={"1em"}/>
          </div>
        </div>
         
        ): (
        <div className='update_input_container'>
          <p className='input__label'>{value}</p>
          <HiPencil className='icon' size={"1.4em"} onClick={modifer}/>
        </div>
        )}
    </div>
  )
}

export default UpdatableInput
