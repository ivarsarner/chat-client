import React from 'react';
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

import Chat from '../../components/chat';

export const ChatContainer: React.FC = () => {
  const dispatch = useDispatch();

  const chatState: ChatState = useSelector(
    (state: RootState) => state.chatReducer
  );

  const { user, messages, userList, errorMessage } = chatState;

  console.log(chatState);

  return (
    <Chat
      user={user}
      messages={messages}
      userList={userList}
      errorMessage={errorMessage}
    />
  );
};
