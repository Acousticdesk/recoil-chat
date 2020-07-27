import React from 'react'

import ChatMessage from '../chat-message'

export default () => {
  const messages = ['A test message']

  return (
    <>
      {messages.map((message) => <ChatMessage key={message}>{message}</ChatMessage>)}
    </>
  )
}
