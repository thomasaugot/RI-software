import './chatBarCard.scss'
import { ChatCardTypes } from '../../../types/chats/chatTypes';
import { profile } from '../../../assets/Icons';

const ChatBarCard = ({imgUrl, name, text, notif}: ChatCardTypes) => {
    return (
        <div className='chat-card-container'>
            {<span className='icon'>{profile}</span>}
            {/* <img src={imgUrl} alt={name} className="icon"/> */}
            <div className="chat-information">
                <p className="name">{name}</p>
                <div className="chat-card-text-container">
                <p className="text">{text}</p>
                </div>
            </div>

            {notif && <div className='notification'>{notif}</div>}
        </div>
    );
};

export default ChatBarCard;