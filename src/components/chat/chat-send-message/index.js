import React from 'react'
import classNames from 'classnames'

import './styles.scss'

export default ({ className }) => (
  <button className={classNames('ChatSendMessage', className)}>Send</button>
)
