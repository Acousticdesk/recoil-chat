import React from 'react'
import classNames from 'classnames'
import { useRecoilState } from 'recoil'

import { newChatMessageState } from '../recoil/atoms'
import { useSendMessage } from '../hooks'
import './styles.scss'

export default ({ className }) => {
  const [newMessage, setNewMessageText] = useRecoilState(newChatMessageState)
  const sendMessage = useSendMessage()

  const handleInput = (e) => setNewMessageText(e.target.value)

  const handleKeyPress = (e) => {
    if (e.which !== 13) {
      return
    }

    sendMessage()
  }

  return (
    <textarea
      className={classNames('ChatInput', className)}
      value={newMessage}
      onKeyPress={handleKeyPress}
      onChange={handleInput}
    />
  )
}
