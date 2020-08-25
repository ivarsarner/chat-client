export interface ChatMessage {
  userName: string
  message: string
  timestamp: string
}

export interface ChatState {
  connectedUsers: number
  messages: ChatMessage[]
}
