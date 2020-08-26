import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import io from 'socket.io-client';

// import { RootState } from '../../store';
import { ChatActions, ChatState, User, Message } from '../../store/types';
import {
  loginUser,
  loginError,
  clearError,
  logoutUser,
  updateUserList,
  addMessage,
} from '../../store/actions';

export const ChatContainer: React.FC = () => {
  const dispatch = useDispatch();

  const user: User = useSelector((state: ChatState) => state.user);

  console.log(user?.userName);

  return <div>hibob</div>;
};
