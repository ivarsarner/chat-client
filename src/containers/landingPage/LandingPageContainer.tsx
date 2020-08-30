import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import io from 'socket.io-client';

import { socketUrl } from '../../config';
import { LandingPageForm } from '../../components/landingPage';
import { User, Socket, Message } from '../../store/types';
import { RootState } from '../../store';
import {
  newError,
  storeSocket,
  connectUser,
  storeMessage,
  storeConnectedUsers,
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

      socket.on('error', (errorCode: string): void => {
        let errorMessage = '';

        switch (errorCode) {
          case 'userName_taken':
            errorMessage = 'That name is already taken';
            break;
          case 'inactivity_disconnect':
            errorMessage = 'You were disconnected due to inactivity';
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
      {error.isError && <span>{error.errorMessage}</span>}
      <LandingPageForm buttonText="Connect" submit={connectToSocketServer} />
    </>
  );
};
