import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Button, Typography, Container } from '@material-ui/core/';

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
}

const LandingPage: React.FC<Props> = ({ error, submit }) => {
  const classes = useStyles();

  const [text, setText] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    submit(text);
    setText('');
  };

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
          error={error.isError}
          helperText={error.errorMessage}
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
        >
          Connect
        </Button>
      </form>
    </Container>
  );
};

export default LandingPage;
