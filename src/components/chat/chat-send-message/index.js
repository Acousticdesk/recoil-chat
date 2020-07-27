import React from 'react'
import classNames from 'classnames'

import './styles.scss'
import { useSendMessage } from '../hooks'

export default ({ className }) => {
  const sendMessage = useSendMessage()

  return (
    <button
      onClick={sendMessage}
      className={classNames('ChatSendMessage', className)}
    >
      Send
    </button>
  )
}
