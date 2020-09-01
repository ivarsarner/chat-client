import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Message } from '../../store/types';

const useStyles = makeStyles({
  cardAlignLeft: {
    width: '70%',
    borderRadius: 20,
    alignSelf: 'flex-start',
    margin: 10,
  },
  cardAlignRight: {
    width: '70%',
    borderRadius: 20,
    alignSelf: 'flex-end',
    margin: 10,
  },
  cardAlignCenter: {
    textAlign: 'center',
    width: '90%',
    alignSelf: 'center',
    color: '#3f51b5',
    margin: 10,
  },
  cardContent: {
    padding: '15px',
  },
  title: {
    fontSize: '1rem',
  },
  time: {
    display: 'flex',
    justifyContent: 'flex-end',
    fontSize: '0.6rem',
  },
});

interface Props {
  message: Message;
  currentUser: string;
}

export const ChatMessage: React.FC<Props> = (props) => {
  const { userName, message, timestamp } = props.message;
  const classes = useStyles();

  let cardClass: typeof classes.cardAlignRight;
  switch (userName) {
    case 'SERVER':
      cardClass = classes.cardAlignCenter;
      break;
    case props.currentUser:
      cardClass = classes.cardAlignRight;
      break;
    default:
      cardClass = classes.cardAlignLeft;
      break;
  }

  return (
    <Card raised className={cardClass}>
      <CardContent className={classes.cardContent}>
        <Typography className={classes.title} color="textSecondary">
          {userName} says:
        </Typography>
        <Typography variant="body2" component="p">
          {message}
        </Typography>
        <div className={classes.time}>
          <Typography color="textSecondary">{timestamp}</Typography>
        </div>
      </CardContent>
    </Card>
  );
};
