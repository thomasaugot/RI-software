import BaseLayout from "../../layouts/BaseLayout/BaseLayout";
import ChatHeader from "../../components/chat/chatHeader/chatHeader";
import MessageArea from "../../components/chat/chatBar/messageArea/messageArea";
import ChatBarHeader from "../../components/chat/chatBarHeader/chatBarHeader";
import ChatBar from "../../components/chat/chatBar/chatBar";
import './Chat.scss';

const Chat = () => {
  return (
    <BaseLayout>
      <div className="chat-container">
        <div>
          <ChatHeader imgUrl="/dwofmw" name="Ivan" status="online" />
          <MessageArea />
        </div>
        <div>
          <ChatBarHeader />
          <ChatBar />
        </div>
      </div>
    </BaseLayout>
  );
};

export default Chat;
