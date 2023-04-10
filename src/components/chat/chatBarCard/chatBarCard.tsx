import './chatBarCard.scss'
import { ChatCardTypes } from '../../../types/chats/chatTypes';

const ChatBarCard = ({imgUrl, name, text, notif}: ChatCardTypes) => {
    return (
        <div className='chat-card-container'>
            <img src={imgUrl} alt={name} className="icon"/>
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