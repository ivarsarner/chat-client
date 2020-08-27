import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Button } from '@material-ui/core/';

const useStyles = makeStyles({
  chatForm: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  chatFormInput: {
    width: '75%',
  },
  chatFormSendBtn: {
    width: '20%',
  },
});

interface Props {
  text: string;
}

export const ChatForm: React.FC<Props> = ({ text }) => {
  const classes = useStyles();

  const [newMessage, setNewMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewMessage(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('handle submit clicked', text, newMessage);
    setNewMessage('');
  };

  return (
    <form
      className={classes.chatForm}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <TextField
        className={classes.chatFormInput}
        autoFocus
        rows={2}
        rowsMax={2}
        value={newMessage}
        placeholder="Type new message here..."
        onChange={handleChange}
        variant="outlined"
      />
      <Button
        type="submit"
        className={classes.chatFormSendBtn}
        variant="contained"
        color="primary"
      >
        Send
      </Button>
    </form>
  );
};
