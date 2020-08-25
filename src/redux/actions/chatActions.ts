import { ChatMessage } from '../types';

export const chatActions = {
  SEND_MESSAGE: 'SEND_MESSAGE',
};

export const sendChatMessage = (message: ChatMessage) => ({
  type: chatActions.SEND_MESSAGE,
  payload: message,
});
