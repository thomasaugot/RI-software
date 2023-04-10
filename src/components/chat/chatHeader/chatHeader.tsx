import {ChatHeaderTypes} from '../../../types/chats/chatTypes'
import { profile } from '../../../assets/Icons';
import './chatHeader.scss';
import { ChatTools, ChatsearchSvg } from '../../../assets/chatIcons';

const ChatHeader = ({imgUrl, name, status}: ChatHeaderTypes) => {
    return (
        <div className="header">
            <div className="chat-name">
            {imgUrl.length > 0 ?  <img src={imgUrl} alt={`${name}`} /> : profile}
                <div className='name-container'>
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
