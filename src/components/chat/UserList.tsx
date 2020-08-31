import React from 'react';
import { Typography } from '@material-ui/core';
import { User } from '../../store/types';

interface Props {
  users: User[];
}

export const UserList: React.FC<Props> = ({ users }) => {
  return (
    <>
      <Typography variant="subtitle2" gutterBottom>
        Users in chat: {users.length}
      </Typography>
      <ul>
        {users.map((user) => (
          <div key={user.id}>
            <span>{user.userName}</span>
          </div>
        ))}
      </ul>
    </>
  );
};
