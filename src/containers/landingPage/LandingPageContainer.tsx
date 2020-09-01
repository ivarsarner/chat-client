import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import io from 'socket.io-client';

import { socketUrl } from '../../config';
import LandingPage from '../../components/landingPage';
import { User, Socket, Message } from '../../store/types';
import { RootState } from '../../store';
import {
  newError,
  storeSocket,
  userConnected,
  storeMessage,
  storeConnectedUsers,
  disconnect,
  clearError,
} from '../../store/actions';

export const LandingPageContainer: React.FC = () => {
  const dispatch = useDispatch();
  const [newUser, setNewUser] = useState<User>();

  const { socket, error } = useSelector(
    (state: RootState) => state.chatReducer
  );

  const connectToSocketServer = (userName: string): void => {
    const newSocket = io(socketUrl, {
      reconnection: false,
      query: { userName },
    });
    setNewUser({
      id: newSocket.id,
      userName,
    });
    dispatch(storeSocket(newSocket));
  };

  const clearInputError = (): void => {
    dispatch(clearError());
  };

  useEffect(() => {
    if (socket && newUser) {
      socket.on('connect', (): void => {
        dispatch(userConnected(newUser));
        dispatch(clearError());
      });

      socket.once('connect_error', () => {
        dispatch(
          newError({
            isError: true,
            errorCode: 'server_not_responding',
            errorMessage: 'Server not responding',
          })
        );
      });

      socket.on('disconnect', (reason: string) => {
        switch (reason) {
          case 'io server disconnect':
            dispatch(
              newError({
                isError: true,
                errorCode: 'inactivity_disconnect',
                errorMessage: 'You were disconnected due to inactivity',
              })
            );
            dispatch(disconnect());
            break;
          case 'transport close':
            dispatch(
              newError({
                isError: true,
                errorCode: 'server_terminated',
                errorMessage: 'The server has terminated',
              })
            );
            dispatch(disconnect());
            break;

          default:
            dispatch(
              newError({
                isError: true,
                errorCode: 'general_error',
                errorMessage: 'Something went wrong, please try again',
              })
            );
            dispatch(disconnect());
            break;
        }
      });

      socket.on('error', (errorCode: string): void => {
        let errorMessage = '';

        switch (errorCode) {
          case 'userName_taken':
            errorMessage = 'username is already taken';
            break;
          case 'userName_length':
            errorMessage = 'username needs to be 3-12 characters';
            break;
          case 'userName_server':
            errorMessage = 'username "SERVER" is not allowed';
            break;
          default:
            errorMessage = 'An error has occured';
            break;
        }
        dispatch(newError({ isError: true, errorCode, errorMessage }));
      });
    }
  }, [socket]);

  return (
    <>
      <LandingPage
        error={error}
        submit={connectToSocketServer}
        clearError={clearInputError}
      />
    </>
  );
};
