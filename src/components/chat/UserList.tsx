import React from 'react';
import { List, ListItem, ListItemText } from '@material-ui/core';
import { User } from '../../store/types';

interface Props {
  connectedUsers: User[];
}

export const UserList: React.FC<Props> = ({ connectedUsers }) => {
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
