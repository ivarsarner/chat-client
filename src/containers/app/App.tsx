import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';

import { RootState } from '../../store';
import { ChatActions, ChatState, User, Message } from '../../store/types';
import { ChatContainer } from '../chat';
import { LandingPageContainer } from '../landingPage';

const useStyles = makeStyles({
  root: {
    height: '100vh',
    maxWidth: '100vw',
    background: 'linear-gradient(0deg, #FE6B8B 20%, #FF8E53 90%)',
    display: 'flex',
    alignItems: 'center',
  },
});

export const App = () => {
  const classes = useStyles();

  const { isConnected } = useSelector((state: RootState) => state.chatReducer);

  return (
    <>
      <CssBaseline />
      <Container className={classes.root}>
        {isConnected ? <ChatContainer /> : <LandingPageContainer />}
      </Container>
    </>
  );
};
