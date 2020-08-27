import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  chatHeader: {
    marginBottom: 5,
  },
});

interface Props {
  userName: string;
}

export const ChatHeader: React.FC<Props> = ({ userName }) => {
  const classes = useStyles();

  return <span>Welcome {userName}</span>;
};
