import './chatInput.scss'
import { FC, useEffect, useState } from 'react';
import ReplyComponent from '../reply/replyComponent';
import { ChatInputProps,  MessageDataType, messageActions } from '../../../types/chats/chatTypes';
import ChatAudioRecorder from '../chatAudioRecorder/chatAudioRecorder';
import ChatInputMessage from '../chatInputMessage/chatInputMessage';

const ChatInput: FC<ChatInputProps> = ({popupActionType, changeEditMessage, handleMessages, messages}) => {
  const [diplayEditComponent, setDiplayEditComponent] = useState(true)
  const [chatInputValue, setChatInputValue] = useState('')
  const [isRecordingAudio, setIsRecordingAudio] = useState(false)
  const [recordingAudioBlob, setRecordingAudioBlob] = useState<Blob | null>(null)
  const handleCloseEditPopup = () => {
    setDiplayEditComponent(!diplayEditComponent)
    changeEditMessage('', null, null, null)
  }

  const changeIsRecording = (isRec: boolean) => {
    setIsRecordingAudio(isRec)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement> | null) => {
    if(e !== null) {
      e.preventDefault();
    }

   if(chatInputValue.length > 0) {
    const dateNow = new Date()
    const hours = dateNow.getHours() >= 9 ? dateNow.getHours() : `0${dateNow.getHours()}`
    const minutes = dateNow.getMinutes() >= 9 ? dateNow.getMinutes() : `0${dateNow.getMinutes()}`
    const body: MessageDataType = {
      messageId: crypto.randomUUID(),
      type: 'message',
      owner: true,
      ownerName: "You",
      time: `${hours}:${minutes}`,
      text: chatInputValue,
    }

    if(popupActionType.editType === 'Reply' && popupActionType.value !== null && popupActionType.from !== null) {
      body.forwarded =  {
        from: popupActionType.from,
        message: popupActionType.value
      }
      handleMessages(messageActions.ADD, body)
    }else if(popupActionType.editType === 'Edit') {
      const messageToReplace = messages.findIndex((item) => item.messageId === popupActionType.messageId)
      body.messageId = messages[messageToReplace].messageId
      body.editted = true
      body.time = `${hours}:${minutes}`
      body.text = chatInputValue
      handleMessages(messageActions.EDIT, body)
    }else {
      handleMessages(messageActions.ADD, body)

    }


    setChatInputValue('')
    changeEditMessage('', null, null, null)
    // authorizedRequest(sendChatMessageUrl('1', chatInputValue), "POST", 'accessToken', body).then((_) => setChatInputValue(''))
    // sendChatMessage('1', chatInputValue).then((_) => setChatInputValue(''))
   }
   if(recordingAudioBlob !== null) {
    const dateNow = new Date()
  const hours = dateNow.getHours() >= 9 ? dateNow.getHours() : `0${dateNow.getHours()}`
  const minutes = dateNow.getMinutes() >= 9 ? dateNow.getMinutes() : `0${dateNow.getMinutes()}`
    const body: MessageDataType = {
      messageId: crypto.randomUUID(),
      type: 'audio',
      owner: true,
      ownerName: "You",
      time: `${hours}:${minutes}`,
    }
    body.audioFile = recordingAudioBlob
    handleMessages(messageActions.ADD, body)
    setRecordingAudioBlob(null)
    setChatInputValue('')
  changeEditMessage('', null, null, null)
  }
  }
  useEffect(() => {
    if(popupActionType.value !== null && popupActionType.editType !== 'Reply') {
      setChatInputValue(popupActionType.value)
    }
  }, [popupActionType.value])

  return (
    <form onSubmit={handleSubmit} className='chat-input-wrapper'>
      { popupActionType.editType.length !== 0 && popupActionType.editType !== 'Copy' ?  <ReplyComponent editType={popupActionType} handleCloseEditPopup={handleCloseEditPopup}/> : null}
      <div className={`chat-input-container ${popupActionType.editType.length > 0 ? 'chat-input-container-edit' : ''}`}>
      {isRecordingAudio
      ? <ChatAudioRecorder handleSubmit={handleSubmit} isRecording={isRecordingAudio} handleRecording={changeIsRecording} setRecordingAudioBlob={setRecordingAudioBlob}/>
      : <ChatInputMessage chatInputValue={chatInputValue} setChatInputValue={setChatInputValue} handleRecording={changeIsRecording}/>}
       </div>
    </form>
  );
};

export default ChatInput;
