import './messageArea.scss';
import ChatInput from '../../chatInput/chatInput';
import ChatMessages from '../../chatMessages/chatMessages';
import ChatInfoText from '../../chatInfoText/chatInfoText';

const MessageArea = () => {
    return (
        <div className="message-area">
            <div className='messages'>
                <ChatMessages owner={true} ownerName="You" time="21:21" text="How's work?"/>
                <ChatMessages owner={true} ownerName="You" time="21:24" text="How's work?"/>
                <ChatMessages owner={true} ownerName="You" time="21:24" text="How's work?"/>
                <ChatMessages owner={true} ownerName="You" time="21:24" text="How's work?"/>
                <ChatMessages owner={true} ownerName="Ivan" time="21:24" text=" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius obcaecati nobis, doloribus dolore sit nam commodi tempore fuga ut facere fugit quis consectetur voluptates est reiciendis, soluta laborum quibusdam. Ipsa!" file='excel'/>
                <ChatMessages owner={true} ownerName="Ivan" time="21:24" text="Hello wrold" file='pdf'/>
                <ChatMessages owner={true} ownerName="You" time="21:24" text="How's work?"/>
                <ChatMessages owner={true} ownerName="You" time="21:24" text="How's work?"/>
                <ChatInfoText text='Today'/>
                <ChatMessages owner={false} ownerName="Ivan" time="21:24" text="How's work?"/>
                <ChatMessages owner={false} ownerName="Ivan" time="21:24" text="How's work?"/>
                <ChatMessages owner={false} ownerName="Ivan" time="21:24" text="How's work?"/>
                <ChatMessages owner={false} ownerName="Ivan" time="21:24" text="How's work?"/>
                <ChatMessages owner={false} ownerName="Ivan" time="21:24" text="How's work?"/>
                <ChatMessages owner={false} ownerName="Ivan" time="21:24" text="How's work?"/>
                <ChatMessages owner={false} ownerName="Ivan" time="21:24" text="How's work?"/>
                <ChatMessages owner={false} ownerName="Ivan" time="21:24" text="How's work?"/>
                <ChatMessages owner={false} ownerName="Ivan" time="21:24" text="How's work?"/>
                <ChatMessages owner={false} ownerName="Ivan" time="21:24" text="How's work?"/>
                <ChatMessages owner={false} ownerName="Ivan" time="21:24" text="How's work?"/>
                <ChatMessages owner={false} ownerName="Ivan" time="21:24" text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius obcaecati nobis, doloribus dolore sit nam commodi tempore fuga ut facere fugit quis consectetur voluptates est reiciendis, soluta laborum quibusdam. Ipsa!"/>
                <ChatMessages owner={false} ownerName="Ivan" time="21:24" text=" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius obcaecati nobis, doloribus dolore sit nam commodi tempore fuga ut facere fugit quis consectetur voluptates est reiciendis, soluta laborum quibusdam. Ipsa!" file='word'/>
                <ChatMessages owner={false} ownerName="Ivan" time="21:24" text="Hello wrold" file='pdf'/>
                <ChatInfoText text='Today'/>
                
            </div>
            <ChatInput/>
        </div>
    );
};

export default MessageArea;