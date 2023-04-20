import { FC } from "react";
import './profileButton.scss';

const ProfileButton: FC<any> = ({ onClick, children }) => {
  return (
    <button className="profile-input-button" onClick={onClick}>{children}</button>
  );
};

export default ProfileButton;
