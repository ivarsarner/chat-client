import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Button, Typography, Container } from '@material-ui/core/';

import { Loader } from './Loader';
import { Error } from '../../store/types';

const useStyles = makeStyles({
  landingPageRoot: {
    height: '100vh',
    width: '100wh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  landingPageForm: {
    height: '40%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  landingPageFormInput: { width: '50%' },
  landingPageFormSubmitBtn: { width: '50%' },
});

interface Props {
  error: Error;
  submit: (message: string) => void;
  clearError: () => void;
}

const LandingPage: React.FC<Props> = ({ error, submit, clearError }) => {
  const classes = useStyles();

  const [text, setText] = useState('');
  const [validationError, setValidationError] = useState('');
  const [connecting, setConnecting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    clearError();
    setValidationError('');
    setText(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    submit(text);
    setConnecting(true);
    setText('');
  };

  useEffect(() => {
    const regex = /\b\w{3,12}\b/i;
    if (text) {
      if (!regex.test(text)) {
        setValidationError('Username needs to be 3-12 characters long');
      } else {
        setValidationError('');
      }
    }
  }, [text]);

  useEffect(() => {
    if (error) {
      setConnecting(false);
    }
  }, [error]);

  return (
    <Container className={classes.landingPageRoot}>
      <Typography variant="h2" gutterBottom>
        Chat
      </Typography>
      <form
        className={classes.landingPageForm}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <TextField
          className={classes.landingPageFormInput}
          error={!!(error.isError || validationError)}
          helperText={error.errorMessage || validationError}
          autoFocus
          rows={2}
          rowsMax={2}
          value={text}
          placeholder="Enter username..."
          onChange={handleChange}
        />
        <Button
          type="submit"
          className={classes.landingPageFormSubmitBtn}
          variant="contained"
          color="primary"
          disabled={!!(connecting || validationError)}
        >
          Connect
        </Button>
      </form>
      {connecting && <Loader />}
    </Container>
  );
};

export default LandingPage;
