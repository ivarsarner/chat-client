import { CONNECT_USER, DISCONNECT_USER, MESSAGE } from './constants';

interface NewMessage {
  author: string;
  message: string;
}

type Socket = SocketIOClient.Socket;

export const connectUser = (socket: Socket, userName: string): void => {
  socket.emit(CONNECT_USER, userName);
};

export const disconnectUser = (socket: Socket, userName: string): void => {
  socket.emit(DISCONNECT_USER, userName);
};

export const sendMessage = (socket: Socket, message: NewMessage): void => {
  socket.emit(MESSAGE, message);
};
