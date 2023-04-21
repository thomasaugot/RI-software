import './profileInput.scss';
import React, { FC, useState } from 'react';
import ProfileButton from '../profileButton/ProfileButton';
import { cross } from '../../../assets/chatIcons';
import { profileInputProps } from '../../../types/profile/profileTypes';
import { checkMark, pencilFill } from '../../../assets/profileIcons';
const ProfileInput: FC<profileInputProps> = ({ inputName, value, keyName, type }) => {
  const [profileinputEditStatus, setProfileInputEditStatus] = useState(false);
  const [inputValue, setInputValue] = useState(value);

  const onInputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }

  return (
    <div className="profile-input-wrapper">
      <p className="input-name"> {inputName} </p>

      <div className={`profile-input-container border-${profileinputEditStatus}`}>
        <input name={inputName} type={type} value={inputValue} className="profile-input" disabled={!profileinputEditStatus} onChange={onInputChangeHandler} />

        <div className="profile-input-button-container">
          {profileinputEditStatus ? (
            <>
              <ProfileButton
                onClick={() => {
                  setInputValue(value);
                  setProfileInputEditStatus(!profileinputEditStatus);
                }}
              >
                {cross}
              </ProfileButton>
              <ProfileButton
                onClick={() => {
                  setProfileInputEditStatus(!profileinputEditStatus);
                }}
              >
                {checkMark}
              </ProfileButton>

            </>
          ) : (
            <ProfileButton
              onClick={() => {
                setProfileInputEditStatus(!profileinputEditStatus)
              }}
            >
              {pencilFill}
            </ProfileButton>
          )
          }
        </div>
      </div>
    </div>
  );
};

export default ProfileInput;
