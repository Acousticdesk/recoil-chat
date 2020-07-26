import React from 'react'
import { addDecorator } from '@storybook/react'

import { decoratorGlobalStyles } from 'stories/decorators'

import ChatMessage from './index'

addDecorator(decoratorGlobalStyles)

export default { title: 'ChatMessage' }

export const withMessage = () => <ChatMessage message="Hello world!" />
