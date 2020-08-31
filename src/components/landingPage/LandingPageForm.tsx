import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Button } from '@material-ui/core/';

const useStyles = makeStyles({
  landingPageForm: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  landingPageFormInput: {
    width: '75%',
  },
  landingPageFormSendBtn: {
    width: '20%',
  },
});

interface Props {
  buttonText: string;
  submit: (message: string) => void;
}

export const LandingPageForm: React.FC<Props> = ({ buttonText, submit }) => {
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
    <form
      className={classes.landingPageForm}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <TextField
        className={classes.landingPageFormInput}
        autoFocus
        rows={2}
        rowsMax={2}
        value={text}
        placeholder="Type new message here..."
        onChange={handleChange}
        variant="outlined"
      />
      <Button
        type="submit"
        className={classes.landingPageFormSendBtn}
        variant="contained"
        color="primary"
      >
        {buttonText}
      </Button>
    </form>
  );
};
