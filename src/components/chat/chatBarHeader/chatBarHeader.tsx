import './chatBarHeader.scss';
import { addChat } from '../../../assets/Icons';

const ChatBarHeader = () => {
    return (
        <div className='chat-bar-header-wrapper'>
            <input type="text" />
            {addChat}
        </div>
    );
};

export default ChatBarHeader;