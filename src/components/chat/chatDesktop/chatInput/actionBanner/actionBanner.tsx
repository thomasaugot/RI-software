import { FC, useContext, useState } from 'react'
import './actionBanner.scss'
import { actionBannerProps, actions } from '../../../../../types/chats/actionsType'
import { cross } from '../../../../../assets/chatIcons'
import { ChatContext } from '../../../../../context/chat/chatContext'

const ActionBanner: FC<actionBannerProps> = ({ text, sender }) => {
  const { setContextMenu, setActionType } = useContext(ChatContext)
  const [displayActionBanner, setDisplayActionBanner] = useState(true)
  const closeBanner = () => {
    setDisplayActionBanner(false)
    setTimeout(() => {
      setContextMenu(null)
      setActionType({ actionType: actions.SEND, messageId: undefined })
    }, 70)
  }

  return (
    <div className={`action-banner ${!displayActionBanner ? 'action-banner-deplay-before-hidding' : ''}`} >
      <div className="action-banner-container">
        <div className="action-banner-sender-info">
          <div className="action-banner-sender">{sender}</div>
          <div className="action-banner-sender-message"><p>{text}</p></div>
        </div>
        <div className="action-banner-close-icon" onClick={closeBanner}>{cross}</div>
      </div>
    </div>
  )
}

export default ActionBanner;
