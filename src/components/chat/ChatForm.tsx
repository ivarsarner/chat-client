import React, { useState, useEffect } from 'react';
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
  submit: (message: string) => void;
  isTyping: (typing: boolean) => void;
}

export const ChatForm: React.FC<Props> = ({ submit, isTyping }) => {
  const classes = useStyles();

  const [newMessage, setNewMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewMessage(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    submit(newMessage);
    setNewMessage('');
  };

  useEffect(() => {
    if (newMessage) {
      isTyping(true);
    } else {
      isTyping(false);
    }
  }, [newMessage, isTyping]);

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
