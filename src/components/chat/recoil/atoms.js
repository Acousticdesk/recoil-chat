import { atom } from 'recoil'

export const chatMessagesState = atom({
  key: 'chatMessagesState',
  default: [],
})

export const newChatMessageState = atom({
  key: 'newChatMessageState',
  default: '',
})
