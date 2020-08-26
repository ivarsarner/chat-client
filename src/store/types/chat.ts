export enum ChatActions {
  LOGIN_USER = 'LOGIN_USER',
  LOGIN_ERROR = 'LOGIN_ERROR',
  CLEAR_ERROR = 'CLEAR_ERROR',
  LOGOUT_USER = 'LOGOUT_USER',
  UPDATE_USER_LIST = 'UPDATE_USER_LIST',
  ADD_MESSAGE = 'ADD_MESSAGE',
}

export interface User {
  id: string;
  userName: string;
}

export interface Message {
  author: string;
  message: string;
  timestamp: number;
}

export interface ChatState {
  user: User;
  messages: Message[];
  userList: User[];
  errorMessage: string;
}

interface LoginUserAction {
  type: typeof ChatActions.LOGIN_USER;
  payload: User;
}

interface LoginErrorAction {
  type: typeof ChatActions.LOGIN_ERROR;
  payload: string;
}

interface ClearErrorAction {
  type: typeof ChatActions.CLEAR_ERROR;
}

interface LogoutUserAction {
  type: typeof ChatActions.LOGOUT_USER;
}

interface UpdateUserListAction {
  type: typeof ChatActions.UPDATE_USER_LIST;
  payload: User[];
}

interface AddMessageAction {
  type: typeof ChatActions.ADD_MESSAGE;
  payload: Message;
}

export type ChatActionTypes =
  | LoginUserAction
  | LoginErrorAction
  | ClearErrorAction
  | LogoutUserAction
  | UpdateUserListAction
  | AddMessageAction;
