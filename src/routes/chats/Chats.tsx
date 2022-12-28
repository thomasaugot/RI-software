import { FC } from "react";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import BaseLayout from "../../layouts/base-layout/BaseLayout";

import "./Chats.scss";

const Chats: FC = () => {
  return (
  <BaseLayout>
    <div className="chat">
        <button className="add-chat-btn"> add chat </button>
    </div>

    <div className="chat-user-list">
        <div className="search-list">
            <input className="search-for-users" type="text" name="" id="" />
            <button className="add-chat-btn">+</button>
        </div>
        <div className="chat-users">
        <div className="user">
                    <div>
                      <div className="profile-image">
                        <FontAwesomeIcon icon={faUser} />
                      </div>
                    </div>
                    <div>
                      <p>name</p>
                      <p>email</p>
                    </div>
                  </div>
                  <p className="last-message">message</p>
        </div>
    </div>
    
  </BaseLayout>
  );
};

export default Chats;
