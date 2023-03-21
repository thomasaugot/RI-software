import './chatBarHeader.scss';
import { addChat } from '../../../assets/Icons';

const ChatBarHeader = () => {
  return (
    <div className='chat-bar-header-wrapper'>
      <input type="text" placeholder='Search' className='chat-bar-header-input' />
      {addChat}
    </div>
  );
};

export default ChatBarHeader;
