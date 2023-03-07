import './ChatMessage.scss';
import { ChatMessageTypes } from '../../types/chat.types';
import { getFile } from '../../queries/chat.queries';
import { loading } from '../../assets/Icons';

const ChatMessages = ({ ownerName,  time, text, owner, file, imgUrl}: ChatMessageTypes) => {

    const fileTypeIcon = getFile(file as string);
    return (
        <>
        {file ? (
            <>
            {owner ?(
            <div className='file-message-wrapper file-yes'>
                <div className='file-message-container'>

                    <div className='file-type'>
                        <div className="file">{fileTypeIcon}</div>
                        <p>file.name</p>
                    </div>
                    <p className='file-text'>{text}</p>
                </div>
                <div className="sent-data">
                <p className='time'>{time}</p>
                {loading}
                </div>
            </div>
            ):(
            <div className='stranger-owner'>
            <img src={imgUrl} alt={ownerName} className="icon" />
                <div className='file-message-wrapper'>
                    <div className='file-message-container'>

                        <div className='file-type'>
                            <div className="file">{fileTypeIcon}</div>
                            <p>file.name</p>
                        </div>
                        <p className='file-text'>{text}</p>
                    </div>
                    <div className="sent-data">
                    <p className='time'>{time}</p>
                    {loading}
                    </div>
                </div> 
            </div>
            )}
            </>
        ):(
            <>
            {owner ?(
            <div className='chat-message-wrapper yes'>
                <div className='chat-message-container'>
                    <div className='sent-data'>
                        <p className='message-owner'>{ownerName}</p>
                        <p className='time'>{time}</p>
                    </div>
                    <div className='file-type'></div>
                    <p className='message-text'>{text}</p>
                </div>
            </div>
            ):(
            <div className='stranger-owner'>
                <img src={imgUrl} alt={ownerName} className="icon" />
                <div className='chat-message-wrapper'>
                    <div className='chat-message-container'>
                        <div className='sent-data'>
                            <p className='message-owner'>{ownerName}</p>
                            <p className='time'>{time}</p>
                        </div>
                        <div className='file-type'></div>
                        <p className='message-text'>{text}</p>
                    </div>
                </div>
            </div>
            )}
            </>
        )}
        </>
    );
};

export default ChatMessages;