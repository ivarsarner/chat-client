import React from 'react';
import { Typography, Button, Grid } from '@material-ui/core/';

interface Props {
  userName: string;
  onClick: () => void;
}

export const ChatHeader: React.FC<Props> = ({ userName, onClick }) => {
  return (
    <>
      <Grid container>
        <Grid item xs={6}>
          <Typography variant="h5" gutterBottom>
            Welcome to the chat <strong>{userName}</strong>
          </Typography>
        </Grid>
        <Grid container item xs={6} justify="flex-end">
          <Button variant="contained" color="primary" onClick={onClick}>
            Disconnect
          </Button>
        </Grid>
      </Grid>
    </>
  );
};
