import { useContext, useEffect, useState } from 'react';
import './profile.scss';
import BaseLayout from '../../layouts/BaseLayout/BaseLayout';
import { ProfileContext } from '../../context/profile/profileContext';
import ProfileInput from '../../components/profile/profileInput/ProfileInput';
import BrowseAvatarModal from '../../Modals/profile/browseAvatarModal/BrowseAvatarModal';
import CutomizeAvatarModal from '../../Modals/profile/cutomizeAvatarModal/cutomizeAvatarModal';
import { whitePencilFill } from '../../assets/profileIcons';
import { whoAmIUrl } from '../../utils/network';
import { authorizedRequest } from '../../utils/queries';


const Profile = () => {
  const { setisAvatarChangeModalOpen, isAvatarChangeModalOpen, isCutomizeAvatarModalOpen, imgUrl } = useContext(ProfileContext);
  const [userData, setData] = useState({
    firstName: 'Ivan',
    lastName: 'Ivan',
    email: 'baby',
    position: 'Lead Team A',
    phoneNumber: '(+98)1234-567-89',
    location: 'e.g New York, USA'
  })
  const [loading, setLoading] = useState(false)
  const userAvatar = localStorage.getItem('avatar')
  useEffect(() => {
    setLoading(true)
    authorizedRequest(whoAmIUrl, 'GET').then((data) => {
      const userDataResponse: any = data.result
      setData({
        firstName: userDataResponse.first_name,
        lastName: userDataResponse.last_name,
        email: userDataResponse.email,
        phoneNumber: userDataResponse.phone_number,
        position: 'Lead Team A',
        location: 'e.g New York, USA'
      })
      setLoading(false)
    })
  }, [])

  return (
    <BaseLayout>
      {!loading &&
        <>
          <div className="profile-wrapper">
            <div className="profile-container">
              <div className="profile-url-container">
                <div>
                  <img src={`${userAvatar}`} alt="" className="profile-url" />
                  <button onClick={() => { setisAvatarChangeModalOpen(true) }}>{whitePencilFill}</button>
                </div>
                <p className="name"></p>
                <p className="position"></p>
              </div>
              <div className="profile-user-data">
                <span className='profile-user-data-firstLastName'>{`${userData.firstName} ${userData.lastName}`}</span>
                <span className='profile-user-data-position'>{userData.position}</span>
              </div>

              <div className="profile-inputs-container">
                <ProfileInput inputName='First Name' value={userData.firstName} keyName='first_name' type='text' />
                <ProfileInput inputName='Email' value={userData.email} keyName='email' type='email' />
                <ProfileInput inputName='Position' value={userData.position} keyName='position' type='text' />
                <ProfileInput inputName='Last Name' value={userData.lastName} keyName='last_name' type='text' />
                <ProfileInput inputName='Phone Number' value={userData.phoneNumber} keyName='phone_number' type='text' />
                <ProfileInput inputName='Location' value={userData.location} keyName='location' type='text' />
              </div>
            </div>
          </div>
          {isAvatarChangeModalOpen && <BrowseAvatarModal />}
          {isCutomizeAvatarModalOpen && <CutomizeAvatarModal />}
        </>}
    </BaseLayout>
  );
};

export default Profile;
