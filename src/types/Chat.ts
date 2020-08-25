export interface ChatMessage {
  userName: string;
  message: string;
  timeSent: string;
}

export interface Chat {
  messages: ChatMessage[];
}
