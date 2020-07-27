import { useRecoilState } from 'recoil'

import { newChatMessageState, chatMessagesState } from '../recoil/atoms'

export const useSendMessage = () => {
  const [newMessage, setNewMessage] = useRecoilState(newChatMessageState)
  const [messages, setMessages] = useRecoilState(chatMessagesState)

  return () => {
    if (!newMessage) {
      return
    }

    setMessages([...messages, newMessage])
    setNewMessage('')
  }
}
