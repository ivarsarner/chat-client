import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import io from 'socket.io-client';

import { RootState } from '../../store';
import { ChatActions, ChatState, User, Message } from '../../store/types';
import {
  loginUser,
  loginError,
  clearError,
  logoutUser,
  updateUserList,
  addMessage,
} from '../../store/actions';

/* import {
  connectUser,
  disconnectUser,
  sendMessage,
  socketUrl,
} from '../../lib/socket'; */

import { socketUrl } from '../../lib/socket';

import Chat from '../../components/chat';

type Socket = SocketIOClient.Socket | null;

const socket = io(socketUrl);

export const ChatContainer: React.FC = () => {
  // const [socket, setSocket] = useState<Socket>(null);
  const dispatch = useDispatch();

  useEffect(() => {
    /* if (!socket) {
      console.log('connecting to socket');
      setSocket(io(socketUrl));
    } */

    socket.on('MESSAGE', (message: Message) => {
      console.log('testing message thing');
      dispatch(addMessage(message));
    });
  }, []);

  const connectUser = (userName: string): void => {
    if (socket) {
      socket.emit('CONNECT_USER', userName);
    }
  };

  const disconnectUser = (userName: string): void => {
    if (socket) {
      socket.emit('DISCONNECT_USER', userName);
    }
    dispatch(logoutUser());
  };

  const sendMessage = (message: string): void => {
    if (socket) {
      socket.emit('MESSAGE', message);
    }
  };

  const chatState: ChatState = useSelector(
    (state: RootState) => state.chatReducer
  );

  const chatFunctions = {
    connectUser,
    disconnectUser,
    sendMessage,
  };

  return <Chat state={chatState} functions={chatFunctions} />;
};
