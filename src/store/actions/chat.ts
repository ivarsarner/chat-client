import {
  ChatActions,
  ChatActionTypes,
  Message,
  User,
  Socket,
  Error,
} from '../types';

export const userConnected = (user: User): ChatActionTypes => ({
  type: ChatActions.USER_CONNECTED,
  payload: user,
});

export const storeSocket = (socket: Socket): ChatActionTypes => ({
  type: ChatActions.STORE_SOCKET,
  payload: socket,
});

export const newError = (error: Error): ChatActionTypes => ({
  type: ChatActions.NEW_ERROR,
  payload: error,
});

export const clearError = (): ChatActionTypes => ({
  type: ChatActions.CLEAR_ERROR,
});

export const disconnect = (): ChatActionTypes => ({
  type: ChatActions.DISCONNECT,
});

export const storeConnectedUsers = (users: User[]): ChatActionTypes => ({
  type: ChatActions.STORE_CONNECTED_USERS,
  payload: users,
});

export const storeMessage = (message: Message): ChatActionTypes => ({
  type: ChatActions.STORE_MESSAGE,
  payload: message,
});

export const storeTypingUsers = (users: User[]): ChatActionTypes => ({
  type: ChatActions.STORE_TYPING_USERS,
  payload: users,
});
