import React, { useState, useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
import io from 'socket.io-client';

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

export const LandingPageContainer: React.FC = () => {
  let socket;

  const connectRequest = (userName: string) => {
    socket = io(socketUrl, { query: { userName } });
    socket.on('error', (errorMessage: string) => {
      console.log(errorMessage);
    });
  };

  return (
    <LandingPageForm buttonText="Connect to chat" submit={connectRequest} />
  );
};
