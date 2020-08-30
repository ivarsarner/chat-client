import React, { useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { RootState } from '../../store';
import { ChatActions, ChatState, User, Message } from '../../store/types';
import {
  disconnect,
  storeConnectedUsers,
  storeMessage,
} from '../../store/actions';

import Chat from '../../components/chat';

export const ChatContainer: React.FC = () => {
  const { socket, messages, connectedUsers } = useSelector(
    (state: RootState) => state.chatReducer
  );

  const dispatch = useDispatch();

  const disconnectUser = (): void => {
    console.log('discooonect');
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
    console.log('user is typing');
  };

  useEffect(() => {
    if (socket) {
      socket.on('message', (message: Message) => {
        dispatch(storeMessage(message));
      });
    }
  }, [socket]);

  return (
    <Chat
      messages={messages}
      connectedUsers={connectedUsers}
      chatActions={{ disconnectUser, sendMessage, isTyping }}
    />
  );
};
