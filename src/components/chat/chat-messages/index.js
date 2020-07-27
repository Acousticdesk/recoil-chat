import React from 'react'
import { useRecoilValue } from 'recoil'

import ChatMessage from '../chat-message'
import { chatMessagesState } from '../recoil/atoms'
import './styles.scss'

export default () => {
  const messages = useRecoilValue(chatMessagesState)

  return (
    <div className="ChatMessages">
      {messages.map((message, index) => <ChatMessage key={`${message}_${index}`}>{message}</ChatMessage>)}
    </div>
  )
}
