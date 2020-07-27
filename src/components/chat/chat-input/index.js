import React, { useState } from 'react'
import classNames from 'classnames'

import './styles.scss'

export default ({ className }) => {
  const [message, setMessage] = useState('')

  const handleInput = (e) => setMessage(e.target.value)

  return (
    <textarea
      className={classNames('ChatInput', className)}
      value={message}
      onChange={handleInput}
    />
  )
}
