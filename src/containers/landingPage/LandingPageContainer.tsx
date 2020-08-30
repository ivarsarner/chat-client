import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import io from 'socket.io-client';

import { socketUrl } from '../../lib/socket';
import { LandingPageForm } from '../../components/landingPage';
import { User } from '../../store/types';
import { RootState } from '../../store';
import { newError, storeSocket } from '../../store/actions';

export const LandingPageContainer: React.FC = () => {
  const dispatch = useDispatch();

  const { socket, error } = useSelector(
    (state: RootState) => state.chatReducer
  );

  let newSocket: SocketIOClient.Socket | null;

  const connectRequest = (userName: string) => {
    newSocket = io(socketUrl, { query: { userName } });

    newSocket.on('connect', () => {
      dispatch(storeSocket(newSocket));
    });

    newSocket.on('error', (errorCode: string) => {
      if (errorCode === 'userName_taken') {
        dispatch(
          newError({
            isError: true,
            errorCode,
            errorMessage: `The name "${userName}" is already taken`,
          })
        );
      }
      if (errorCode === 'inactivity_disconnect') {
        dispatch(
          newError({
            isError: true,
            errorCode,
            errorMessage: 'You were disconnected due to inactivity',
          })
        );
      }
    });
  };

  /*   useEffect(() => {
    if (socket) {
      socket.on('error', (errorMessage: string) => {
        setError({ isError: true, errorMessage });
      });
      socket.on('connected', (user: User) => {
        dispatch(loginUser(user));
      });
    }
  }, [socket]); */

  return (
    <>
      {error.isError && <span>{error.errorMessage}</span>}
      <LandingPageForm buttonText="Connect" submit={connectRequest} />
    </>
  );
};
