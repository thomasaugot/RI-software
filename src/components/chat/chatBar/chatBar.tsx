import './chatBar.scss';
import ChatBarCard from './chatBarCard/chatBarCard';
import ChatBarHeader from './chatBarHeader/chatBarHeader';

const ChatBar = () => {
    return (
        <div className="chat-bar-container">
            <ChatBarHeader />
            <div className="chat-bar-chats-container">
                <ChatBarCard avatar={null} name="Ivan" text="Blalmd vmd vmd md cmsd cala" notifications={1} chatId={1}/>
                <ChatBarCard avatar="cdjk" name="Ivan" text="Blalmd vmd vmd md cmsd cala" notifications={1} chatId={1}/>
                <ChatBarCard avatar="cdjk" name="Ivan" text="Blalmd vmd vmd md cmsd cala" notifications={1} chatId={1}/>
                <ChatBarCard avatar="cdjk" name="Ivan" text="Blalmd vmd vmd md cmsd cala" notifications={1} chatId={1}/>
                <ChatBarCard avatar="cdjk" name="Ivan" text="Blalmd vmd vmd md cmsd cala" notifications={1} chatId={1}/>
                <ChatBarCard avatar="cdjk" name="Ivan" text="Blalmd vmd vmd md cmsd cala" notifications={1} chatId={1}/>
                <ChatBarCard avatar="cdjk" name="Ivan" text="Blalmd vmd vmd md cmsd cala" notifications={1} chatId={1}/>
                <ChatBarCard avatar="cdjk" name="Ivan" text="Blalmd vmd vmd md cmsd cala" notifications={1} chatId={1}/>
                <ChatBarCard avatar="cdjk" name="Ivan" text="Blalmd vmd vmd md cmsd cala" notifications={1} chatId={1}/>
                <ChatBarCard avatar="cdjk" name="Ivan" text="Blalmd vmd vmd md cmsd cala" chatId={1}/>
                <ChatBarCard avatar="cdjk" name="Ivan" text="Blalmd vmd vmd md cmsd cala" chatId={1}/>
                <ChatBarCard avatar="cdjk" name="Ivan" text="Blalmd vmd vmd md cmsd cala" chatId={1}/>
                <ChatBarCard avatar="cdjk" name="Ivan" text="Blalmd vmd vmd md cmsd cala" chatId={1}/>
                <ChatBarCard avatar="cdjk" name="Ivan" text="Blalmd vmd vmd md cmsd cala" chatId={1}/>
                <ChatBarCard avatar="cdjk" name="Ivan" text="Blalmd vmd vmd md cmsd cala" chatId={1}/>
                <ChatBarCard avatar="cdjk" name="Ivan" text="Blalmd vmd vmd md cmsd cala" chatId={1}/>
                <ChatBarCard avatar="cdjk" name="Ivan" text="Blalmd vmd vmd md cmsd cala" chatId={1}/>
                <ChatBarCard avatar="cdjk" name="Ivan" text="Blalmd vmd vmd md cmsd cala" chatId={1}/>
            </div>
        </div>
    );
};

export default ChatBar;