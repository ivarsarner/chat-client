import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  chatHeader: {
    marginBottom: 5,
  },
});

interface Props {
  userName: string;
  onClick: () => void;
}

export const ChatHeader: React.FC<Props> = ({ userName, onClick }) => {
  const classes = useStyles();

  return (
    <>
      <span>Welcome {userName}</span>;
      <span>
        <button type="button" onClick={onClick}>
          Disconnect
        </button>
      </span>
    </>
  );
};
