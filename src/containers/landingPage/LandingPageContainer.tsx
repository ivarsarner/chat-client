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
  connectUser,
  storeMessage,
  storeConnectedUsers,
  disconnect,
} from '../../store/actions';

export const LandingPageContainer: React.FC = () => {
  const dispatch = useDispatch();
  const [newUser, setNewUser] = useState<User>();

  const { socket, error } = useSelector(
    (state: RootState) => state.chatReducer
  );

  const connectToSocketServer = (userName: string) => {
    const newSocket = io(socketUrl, { query: { userName } });
    setNewUser({
      id: newSocket.id,
      userName,
    });
    dispatch(storeSocket(newSocket));
  };

  useEffect(() => {
    if (socket && newUser) {
      socket.on('connect', (): void => {
        dispatch(connectUser(newUser));
      });

      socket.on('server_terminated', () => {
        dispatch(
          newError({
            isError: true,
            errorCode: 'server_terminated',
            errorMessage: 'The server has terminated',
          })
        );
        dispatch(disconnect());
      });

      socket.on('disconnect', (reason: string) => {
        console.log(reason);
        if (reason === 'io server disconnect') {
          dispatch(
            newError({
              isError: true,
              errorCode: 'inactivity_disconnect',
              errorMessage: 'You were disconnected due to inactivity',
            })
          );
        }
        dispatch(disconnect());
      });

      socket.on('error', (errorCode: string): void => {
        let errorMessage = '';

        switch (errorCode) {
          case 'userName_taken':
            errorMessage = 'That name is already taken';
            break;
          case 'server_offline':
            errorMessage = 'The server is offline';
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
      <LandingPage error={error} submit={connectToSocketServer} />
    </>
  );
};
