import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import { User } from '../../store/types';

const useStyles = makeStyles({
  typingUsers: {
    height: '5px',
    width: '80%',
    alignSelf: 'center',
    marginBottom: 5,
  },
});

interface Props {
  typingUsers: User[];
}

export const ChatTypingUsers: React.FC<Props> = ({ typingUsers }) => {
  const classes = useStyles();

  return (
    <div className={classes.typingUsers}>
      <Typography variant="caption">
        Users typing:{typingUsers.length}
      </Typography>
    </div>
  );
};
