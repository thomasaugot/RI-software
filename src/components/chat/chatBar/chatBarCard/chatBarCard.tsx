import './chatBarCard.scss'
import { FC, useContext } from 'react';
import { chatBarCardProps } from '../../../../types/chats/chatsBarTypes';
import { profile } from '../../../../assets/Icons';
import { ChatContext } from '../../../../context/chat/chatContext';

const ChatBarCard: FC<chatBarCardProps> = ({avatar, name, text, notifications, chatId}) => {

    const { setChatId } = useContext(ChatContext);

    return (
        <div className="chat-card-container" onClick={() => setChatId(chatId)}>
            <div className="chat-card-avatar-container">
                {avatar ? 
                    <img src={avatar}/>
                    :
                    profile
                }
            </div>
            <div className="chat-card-information-container">
                <p className="name">{name}</p>
                <div className="chat-card-message-container">
                    <p className="message">{text}</p>
                </div>
            </div>

                {notifications ? 
                    <div className="notifications-container">
                        <p className="notifications">{notifications}</p> 
                    </div>
                :
                null}
        </div>
    );
};

export default ChatBarCard;
