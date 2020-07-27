import React from 'react'

export default (storyFn) => (
  <div
    style={{
      padding: '48px'
    }}
  >
    {storyFn()}
  </div>
)