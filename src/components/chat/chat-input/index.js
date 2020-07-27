import React from 'react'
import classNames from 'classnames'
import { useRecoilState } from 'recoil'

import { newChatMessageState } from '../recoil/atoms'
import './styles.scss'

export default ({ className }) => {
  const [newMessage, setNewMessageText] = useRecoilState(newChatMessageState)

  const handleInput = (e) => setNewMessageText(e.target.value)

  return (
    <textarea
      className={classNames('ChatInput', className)}
      value={newMessage}
      onChange={handleInput}
    />
  )
}
