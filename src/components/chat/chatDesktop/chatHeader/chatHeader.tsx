import { FC } from 'react';
import { chatHeaderProps } from '../../../../types/chats/chatHeaderTypes';
import { profile } from '../../../../assets/Icons';
import './chatHeader.scss';
import { ChatTools, ChatsearchSvg } from '../../../../assets/chatIcons';

const ChatHeader: FC<chatHeaderProps> = ({avatar, name, status}) => {
    return (
        <div className="chat-header-container">
            <div className="chat-info-container">
                <div className="chat-avatar">
                    {avatar ?  <img src={avatar} alt={name} /> : profile}
                </div>
                <div className='chat-name-container'>
                    <p className='name'>{name}</p>
                    <p className='status'>{status}</p>
                </div>
            </div>
            <div className="additional-tools">
                {ChatsearchSvg}
                {ChatTools}
            </div>
        </div>
    );
};

export default ChatHeader;
