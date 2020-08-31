import React from 'react';
import { User } from '../../store/types';

interface Props {
  users: User[];
}

export const UserList: React.FC<Props> = ({ users }) => {
  return (
    <ul>
      {users.map((user) => (
        <div key={user.id}>
          <span>{user.userName}</span>
        </div>
      ))}
    </ul>
  );
};
