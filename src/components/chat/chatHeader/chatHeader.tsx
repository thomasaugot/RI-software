import {ChatHeaderTypes} from '../../../types/chats/chat.types'
import { ChatsearchSvg, ChatTools } from '../../../assets/Icons';
import './chatHeader.scss';
const ChatHeader = ({imgUrl, name, status}: ChatHeaderTypes) => {
    return (
        <div className="header">
            <div className="chat-name">
                <img src={imgUrl} alt={`${name}`} />
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