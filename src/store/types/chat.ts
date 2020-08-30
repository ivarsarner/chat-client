export enum ChatActions {
  STORE_SOCKET = 'STORE_SOCKET',
  NEW_ERROR = 'NEW_ERROR',
  CLEAR_ERROR = 'CLEAR_ERROR',
  DISCONNECT = 'DISCONNECT',
  STORE_CONNECTED_USERS = 'GET_CONNECTED_USERS',
  STORE_MESSAGE = 'STORE_MESSAGE',
}

export type Socket = SocketIOClient.Socket | null;

export interface User {
  id: string;
  userName: string;
}

export interface Message {
  userName: string;
  message: string;
  timestamp: number;
  id: string;
}

export interface Error {
  isError: boolean;
  errorCode: string;
  errorMessage: string;
}

export interface ChatState {
  isConnected: boolean;
  socket: Socket;
  user: User;
  messages: Message[];
  connectedUsers: User[];
  error: Error;
}

interface StoreSocketAction {
  type: typeof ChatActions.STORE_SOCKET;
  payload: Socket;
}

interface ErrorAction {
  type: typeof ChatActions.NEW_ERROR;
  payload: Error;
}

interface ClearErrorAction {
  type: typeof ChatActions.CLEAR_ERROR;
}

interface DisconnectAction {
  type: typeof ChatActions.DISCONNECT;
}

interface StoreConnectedUsersAction {
  type: typeof ChatActions.STORE_CONNECTED_USERS;
  payload: User[];
}

interface StoreMessageAction {
  type: typeof ChatActions.STORE_MESSAGE;
  payload: Message;
}

export type ChatActionTypes =
  | StoreSocketAction
  | ErrorAction
  | ClearErrorAction
  | DisconnectAction
  | StoreConnectedUsersAction
  | StoreMessageAction;
