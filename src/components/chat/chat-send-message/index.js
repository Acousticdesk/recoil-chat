import React from 'react'
import classNames from 'classnames'
import { useRecoilState } from 'recoil'

import { newChatMessageState, chatMessagesState } from '../recoil/atoms'
import './styles.scss'

export default ({ className }) => {
  const [newMessage, setNewMessage] = useRecoilState(newChatMessageState)
  const [messages, setMessages] = useRecoilState(chatMessagesState)

  const handleSendClick = () => {
    if (!newMessage) {
      return
    }

    setMessages([...messages, newMessage])
    setNewMessage('')
  }

  return (
    <button
      onClick={handleSendClick}
      className={classNames('ChatSendMessage', className)}
    >
      Send
    </button>
  )
}
