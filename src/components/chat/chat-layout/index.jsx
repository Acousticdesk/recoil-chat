import React from 'react'

import ChatMessages from '../chat-messages'
import ChatInput from '../chat-input'
import ChatSendMessage from '../chat-send-message'

import './styles.scss'

export default () => (
  <div className="ChatLayout">
    <div className="ChatLayout__container">
      <h3>Recoil chat by letconst</h3>
      <div className="ChatLayout__messages">
        <ChatMessages />
      </div>
      <div className="ChatLayout__input-container">
        <ChatInput className="ChatLayout__input" />
        <ChatSendMessage className="ChatLayout__send-message" />
      </div>
    </div>
  </div>
)
