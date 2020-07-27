import React from 'react'
import { text, withKnobs } from '@storybook/addon-knobs'

import { decoratorGlobalStyles, decoratorContainer } from 'stories/decorators'

import ChatMessage from './index'

export default {
  title: 'ChatMessage',
  decorators: [
    decoratorGlobalStyles,
    decoratorContainer,
    withKnobs,
  ],
}

export const withMessage = () => <ChatMessage message={text('message', 'Hello world')} />
