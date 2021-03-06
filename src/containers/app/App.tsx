import React from 'react';
import { useSelector } from 'react-redux';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';

import { RootState } from '../../store';
import { ChatContainer } from '../chat';
import { LandingPageContainer } from '../landingPage';

const useStyles = makeStyles({
  root: {
    height: '100vh',
  },
});

export const App = () => {
  const classes = useStyles();

  const { isConnected } = useSelector((state: RootState) => state.chatReducer);

  return (
    <>
      <CssBaseline />
      <div className={classes.root}>
        {isConnected ? <ChatContainer /> : <LandingPageContainer />}
      </div>
    </>
  );
};
