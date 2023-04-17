import { FC, useContext, useRef } from 'react'
import './actionBanner.scss'
import { actions, updateAction } from '../../../../../types/chats/actionsType'
import { cross } from '../../../../../assets/chatIcons'
import { ChatContext } from '../../../../../context/chat/chatContext'

const ActionBanner: FC<{ text: string, sender: string, }> = ({ text, sender }) => {
  const replyWrapperRef = useRef<HTMLDivElement | null>(null)
  const { setContextMenu, setActionType } = useContext(ChatContext)
  const closeBanner = () => {
    replyWrapperRef.current?.classList.add('reply-wrapper-hidden')
    setContextMenu(null)
    setActionType({ actionType: actions.SEND, messageId: undefined })
  }

  // const closeReplyComponent = () => {
  //   replyWrapperRef.current?.classList.add('reply-wrapper-hidden')
  //   setTimeout(() => {
  //     handleCloseEditPopup()
  //   }, 80)
  // }


  return (
    <div className='reply-wrapper' ref={replyWrapperRef}>
      <div className="reply-container">
        <div className="reply-container-text">
          <div className="reply-container-text-up">{sender}</div>
          <div className="reply-container-text-bottom">{text}</div>
        </div>
        <div className="reply-container-icon" onClick={closeBanner}>{cross}</div>
      </div>
    </div>
  )
}

export default ActionBanner;
