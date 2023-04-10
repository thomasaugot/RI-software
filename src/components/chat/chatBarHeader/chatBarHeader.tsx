import { addChat } from '../../../assets/chatIcons';
import './chatBarHeader.scss';
import { useContext } from 'react';
import { ModalsContext } from '../../../context/modalsContext';


const ChatBarHeader = () => {
  const { setCreateGroupChatIsOpen } = useContext(ModalsContext);
  return (
    <div className='chat-bar-header-wrapper'>
      <input type="text" placeholder='Search' className='chat-bar-header-input' />
      <div onClick={ () => setCreateGroupChatIsOpen(true)}>
        {addChat}
      </div>
    </div>
  );
};

export default ChatBarHeader;
