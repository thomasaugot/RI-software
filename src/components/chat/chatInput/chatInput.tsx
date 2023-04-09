import './chatInput.scss'
import { FC, useEffect, useState } from 'react'
import ReplyComponent from '../reply/replyComponent'
import { ChatInputProps,  MessageDataType, messageActions } from '../../../types/chats/chatTypes'
import ChatAudioRecorder from '../chatAudioRecorder/chatAudioRecorder'
import ChatInputMessage from '../chatInputMessage/chatInputMessage'

const ChatInput: FC<ChatInputProps> = ({popupActionType, changeEditMessage, handleMessages, messages}) => {
  // State variables
 // Determines whether the edit component is currently displayed
const [displayEditComponent, setDisplayEditComponent] = useState(true);

// Stores the current value of the chat input field
const [chatInputValue, setChatInputValue] = useState('');

// Indicates whether the user is currently recording audio
const [isRecordingAudio, setIsRecordingAudio] = useState(false);

// Stores the recorded audio data in the form of a Blob object and the length of the audio clip
const [recordingAudioBlob, setRecordingAudioBlob] = useState<{recordingAudioBlob: Blob, audioLength: string} | null>(null);


  // Function to close edit popup
  const handleCloseEditPopup = () => {
    setDisplayEditComponent(!displayEditComponent)
    changeEditMessage('', null, null, null)
  }

  // Function to change recording state
  const changeIsRecording = (isRec: boolean) => {
    setIsRecordingAudio(isRec)
  }

  // Function to add audio blob to state
  const handleAddAudioBlob = (audioBlob: Blob | null, audioLength: string | null) => {
    if(audioBlob && audioLength) {
      setRecordingAudioBlob({recordingAudioBlob: audioBlob, audioLength})
    }else {
      setRecordingAudioBlob(null)
    }
  }

  // Function to handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement> | null) => {
    // Prevent page from refreshing on form submission
    if(e !== null) {
      e.preventDefault();
    }

    // If chat input has text, add message to state
    if(chatInputValue.length > 0) {
      // Get current time for message time
      const dateNow = new Date()
      const hours = dateNow.getHours() >= 9 ? dateNow.getHours() : `0${dateNow.getHours()}`
      const minutes = dateNow.getMinutes() >= 9 ? dateNow.getMinutes() : `0${dateNow.getMinutes()}`

      // Create message body
      const body: MessageDataType = {
        messageId: crypto.randomUUID(),
        type: 'message',
        owner: true,
        ownerName: "You",
        time: `${hours}:${minutes}`,
        text: chatInputValue,
      }

      // If there is a reply action, add forwarded message data to message body
      if(popupActionType.actionType === 'Reply' && popupActionType.value !== null && popupActionType.from !== null) {
        body.forwarded =  {
          from: popupActionType.from,
          message: popupActionType.value
        }
        handleMessages(messageActions.ADD, body)
      }
      // If there is an edit action, edit the corresponding message in state
      else if(popupActionType.actionType === 'Edit') {
        const messageToReplace = messages.findIndex((item) => item.messageId === popupActionType.messageId)
        body.messageId = messages[messageToReplace].messageId
        body.editted = true
        body.time = `${hours}:${minutes}`
        body.text = chatInputValue
        handleMessages(messageActions.EDIT, body)
      }
      // Otherwise, just add the message to state
      else {
        handleMessages(messageActions.ADD, body)
      }


    setChatInputValue('')
    changeEditMessage('', null, null, null)
    // authorizedRequest(sendChatMessageUrl('1', chatInputValue), "POST", 'accessToken', body).then((_) => setChatInputValue(''))
    // sendChatMessage('1', chatInputValue).then((_) => setChatInputValue(''))
   }
   // If audio has been recorded, add audio message to state
   if(recordingAudioBlob !== null) {
    const dateNow = new Date()
    const hours = dateNow.getHours() >= 9 ? dateNow.getHours() : `0${dateNow.getHours()}`
    const minutes = dateNow.getMinutes() >= 9 ? dateNow.getMinutes() : `0${dateNow.getMinutes()}`

    // Create audio message body
      const body: MessageDataType = {
        messageId: crypto.randomUUID(),
        type: 'audio',
        owner: true,
        ownerName: "You",
        time: `${hours}:${minutes}`,
      }
      body.audioFile = recordingAudioBlob
      handleMessages(messageActions.ADD, body)
      // Clear audio blob and chat input value, and reset edit message state
      setRecordingAudioBlob(null)
      setChatInputValue('')
      changeEditMessage('', null, null, null)
    }
  }
  // Set empty chat input value if there is a popup reply action
  useEffect(() => {
    if(popupActionType.value !== null && popupActionType.actionType !== 'Reply') {
      setChatInputValue(popupActionType.value)
    }
  }, [popupActionType.value])
  console.log()
  return (
    <form onSubmit={handleSubmit} className='chat-input-wrapper'>
      { popupActionType.actionType.length !== 0 && popupActionType.actionType !== 'Copy' ?  <ReplyComponent editType={popupActionType} handleCloseEditPopup={handleCloseEditPopup}/> : null}
      <div className={`chat-input-container ${popupActionType.actionType.length > 0 ? 'chat-input-container-edit' : ''}`}>
      {isRecordingAudio
      ? <ChatAudioRecorder handleSubmit={handleSubmit} isRecording={isRecordingAudio} handleRecording={changeIsRecording} handleAddAudioBlob={handleAddAudioBlob}/>
      : <ChatInputMessage chatInputValue={chatInputValue} setChatInputValue={setChatInputValue} handleRecording={changeIsRecording}/>}
       </div>
    </form>
  );
};

export default ChatInput;
