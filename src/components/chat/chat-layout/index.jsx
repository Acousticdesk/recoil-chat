import React from 'react'

import './styles.scss'

export default ({ children }) => (
  <div className="ChatLayout">
    <div className="ChatLayout__container">
      <h3>Recoil chat</h3>
      <div className="ChatLayout__messages"></div>
      <div className="ChatLayout__input-container"></div>
    </div>
  </div>
)
