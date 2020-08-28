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

import { socketUrl } from '../../lib/socket';

import { LandingPageForm } from '../../components/landingPage';

const connectRequest = (userName: string) => {
  const socket = io(socketUrl, { query: { userName } });
  console.log(socket);
};

export const LandingPageContainer: React.FC = () => {
  return <LandingPageForm buttonText="Connect to chat" submit={connectRequest} />;
};