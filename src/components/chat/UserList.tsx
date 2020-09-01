import React from 'react';
import { List, ListItem, ListItemText } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { User } from '../../store/types';

const useStyles = makeStyles({
  root: {
    height: '100%',
  },
});

interface Props {
  connectedUsers: User[];
}

export const UserList: React.FC<Props> = ({ connectedUsers }) => {
  const classes = useStyles();

  return (
    <List>
      {connectedUsers.map((user) => (
        <ListItem key={user.id}>
          <ListItemText primary={user.userName} />
        </ListItem>
      ))}
    </List>
  );
};
