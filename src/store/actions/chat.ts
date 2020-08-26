import { ChatActions, ChatActionTypes, Message, User } from '../types';

export const loginUser = (user: User): ChatActionTypes => ({
  type: ChatActions.LOGIN_USER,
  payload: user,
});

export const loginError = (errorMessage: string): ChatActionTypes => ({
  type: ChatActions.LOGIN_ERROR,
  payload: errorMessage,
});

export const clearError = (): ChatActionTypes => ({
  type: ChatActions.CLEAR_ERROR,
});

export const logoutUser = (): ChatActionTypes => ({
  type: ChatActions.LOGOUT_USER,
});

export const updateUserList = (users: User[]): ChatActionTypes => ({
  type: ChatActions.UPDATE_USER_LIST,
  payload: users,
});

export const addMessage = (message: Message): ChatActionTypes => ({
  type: ChatActions.ADD_MESSAGE,
  payload: message,
});
