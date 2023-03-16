import './chatInput.scss'
import { microphone, clip } from '../../../assets/Icons';
import Field from '../../general/inputField/inputField'

const ChatInput = () => {
    return (
        <div className='chat-input-container'>
            <div className='tools'>
                {clip}
            </div>
            <input type="text" placeholder='Message' className='chat-input'/>
            <div className='tools'>
                {microphone}
            </div>
        </div>
    );
};

export default ChatInput;