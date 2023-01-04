import React from 'react'
import './userProfile.scss'
import SecondLayout from '../../layouts/SecondLayout';
import { HiPencil } from 'react-icons/hi'
import Profile from '../../assets/profAvatar.svg'
import UpdatableInput from '../../components/UpdatableInput';
import { useFormik } from 'formik';

const ProfileUser : React.FC =()=> {
  const {values, handleChange} = useFormik({
    initialValues: {
      firstname: 'Ahmad',
      lastname:'Vetrovs',
      email: 'ahmad@vetrovs.com',
      position: 'Lead Team A',
      phoneNumber: '(+98)1234-567-89',
      location: 'e.g New York, USA'
    },
    onSubmit: () =>{}
  })
  return (
    <SecondLayout>
        <div className="profilUser">
          <form action="" className='user__form'>
            <div className='profileuserInfo'>
              <div className='avatar__container'>
                <img src={Profile} alt="" />
                <div className='nodifier'>
                  <HiPencil/>
                </div>
              </div>
              <div className="profileUserDetail">
                <p className='userName__profile'>Ahmad Vetrovs</p>
                <p className='team__profile'>Lead Team A</p>
              </div>
            </div>
            <div className='profile__body'>
              <div className='input__section'>
                <UpdatableInput name="firstname" label='First Name' value={values.firstname} inputType='text' onChange={handleChange}/>
                <UpdatableInput name="email" label='Email' value={values.email} inputType='email' onChange={handleChange}/>
                <UpdatableInput name="position" label='Position' value={values.position} inputType='text' onChange={handleChange}/>
              </div>
              <div className='input__section'>
                <UpdatableInput name='lastname' label='Last Name' value={values.lastname} inputType='text' onChange={handleChange}/>
                <UpdatableInput name='phoneNumber' label='Phone Number' value={values.phoneNumber} inputType='text' onChange={handleChange}/>
                <UpdatableInput name='location' label='Location' value={values.location} inputType='text' onChange={handleChange}/>
              </div>
            </div>
          </form>
        </div>
    </SecondLayout>
  )
}

export default ProfileUser
