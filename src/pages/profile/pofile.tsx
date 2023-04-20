import { useContext, useEffect } from 'react';
import './profile.scss';
import BaseLayout from '../../layouts/BaseLayout/BaseLayout';
import { ProfileContext } from '../../context/profile/profileContext';
import ProfileInput from '../../components/profile/profileInput/ProfileInput';
import { whitePencilFill } from '../../assets/Icons';
import BrowseAvatarModal from '../../Modals/profile/browseAvatarModal/BrowseAvatarModal';
import CutomizeAvatarModal from '../../Modals/profile/cutomizeAvatarModal/cutomizeAvatarModal';


const Profile = () => {
  const { setisAvatarChangeModalOpen, isAvatarChangeModalOpen, isCutomizeAvatarModalOpen, imgUrl } = useContext(ProfileContext);
  const userAvatar = localStorage.getItem('avatar')

  return (
    <BaseLayout>
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
            <span className='profile-user-data-firstLastName'>Ahmad Vetrovs</span>
            <span className='profile-user-data-position'>Lead Team A</span>
          </div>

          <div className="profile-inputs-container">
            <ProfileInput inputName='First Name' value='Ivan' keyName='first_name' type='text' />
            <ProfileInput inputName='Email' value='Ivan' keyName='email' type='email' />
            <ProfileInput inputName='First Name' value='Ivan' keyName='first_name' type='text' />
            <ProfileInput inputName='Email' value='Ivan' keyName='email' type='email' />
            <ProfileInput inputName='First Name' value='Ivan' keyName='first_name' type='text' />
            <ProfileInput inputName='Email' value='Ivan' keyName='email' type='email' />
          </div>
        </div>
      </div>
      {isAvatarChangeModalOpen && <BrowseAvatarModal />}
      {isCutomizeAvatarModalOpen && <CutomizeAvatarModal />}
    </BaseLayout>
  );
};

export default Profile;
