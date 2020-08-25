import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Lobby from './components/Lobby';

const useStyles = makeStyles({
  root: {
    height: '100vh',
    maxWidth: '100vw',
    background: 'linear-gradient(0deg, #FE6B8B 20%, #FF8E53 90%)',
    display: 'flex',
    alignItems: 'center',
  },
});

const App = () => {
  const classes = useStyles();
  return (
    <>
      <CssBaseline />
      <Container className={classes.root}>
        <Lobby />
      </Container>
    </>
  );
};

export default App;
