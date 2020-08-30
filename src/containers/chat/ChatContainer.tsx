import React, { useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { RootState } from '../../store';
import { ChatActions, ChatState, User, Message } from '../../store/types';
import {
  disconnect,
  storeConnectedUsers,
  storeMessage,
  storeTypingUsers,
} from '../../store/actions';

import Chat from '../../components/chat';

export const ChatContainer: React.FC = () => {
  const {
    socket,
    messages,
    connectedUsers,
    currentUser,
    typingUsers,
  } = useSelector((state: RootState) => state.chatReducer);

  const dispatch = useDispatch();

  const disconnectUser = (): void => {
    if (socket) {
      socket.close();
    }
    dispatch(disconnect());
  };

  const sendMessage = (message: string): void => {
    if (socket) {
      socket.emit('message', message);
    }
  };

  const isTyping = (): void => {
    if (socket) {
      socket.emit('typing');
    }
  };

  useEffect(() => {
    if (socket) {
      socket.on('message', (message: Message) => {
        dispatch(storeMessage(message));
      });

      socket.on('connected_users', (users: User[]) => {
        dispatch(storeConnectedUsers(users));
      });

      socket.on('typing_users', (users: User[]) => {
        dispatch(storeTypingUsers(users));
      });
    }
  }, []);

  return (
    <Chat
      currentUser={currentUser}
      messages={messages}
      connectedUsers={connectedUsers}
      typingUsers={typingUsers}
      chatActions={{ disconnectUser, sendMessage, isTyping }}
    />
  );
};
