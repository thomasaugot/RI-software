import BaseLayout from "../../layouts/BaseLayout/BaseLayout";
import ChatHeader from "../../components/ChatHeader/ChatHeader";
import MessageArea from "../../components/MessageArea/MessageArea";
import ChatBarHeader from "../../components/ChatBarHeader/ChatBarHeader";
import ChatBar from "../../components/ChatBar/ChatBar";
import './Chat.scss';

const Chat = () => {
    return (
        <BaseLayout>
            <div className="chat-container">
                <div>
                    <ChatHeader imgUrl="/dwofmw" name="Ivan" status="online"/>
                    <MessageArea/>
                </div>
                <div>
                    <ChatBarHeader/>
                    <ChatBar/>
                </div>
            </div>
        </BaseLayout>
    );
};

export default Chat;