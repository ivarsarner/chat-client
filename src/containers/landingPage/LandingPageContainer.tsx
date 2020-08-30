import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import io from 'socket.io-client';
import { loginUser } from '../../store/actions';

// import { useSelector, useDispatch } from 'react-redux';

/* import { RootState } from '../../store';
import { ChatActions, ChatState, User, Message } from '../../store/types';
import {
  loginUser,
  loginError,
  clearError,
  logoutUser,
  updateUserList,
  addMessage,
} from '../../store/actions'; */

import { socketUrl } from '../../lib/socket';

import { LandingPageForm } from '../../components/landingPage';

import { User } from '../../store/types';

export const LandingPageContainer: React.FC = () => {
  const dispatch = useDispatch();

  const [error, setError] = useState({ isError: false, errorMessage: '' });

  let socket: SocketIOClient.Socket | null;

  const connectRequest = (userName: string) => {
    socket = io(socketUrl, { query: { userName } });
  };

  useEffect(() => {
    if (socket) {
      socket.on('error', (errorMessage: string) => {
        setError({ isError: true, errorMessage });
      });
      socket.on('connected', (user: User) => {
        dispatch(loginUser(user));
      });
    }
  }, [socket]);

  return (
    <>
      {error.isError && <div>{error.errorMessage}</div>}
      <LandingPageForm buttonText="Connect to chat" submit={connectRequest} />
    </>
  );
};
