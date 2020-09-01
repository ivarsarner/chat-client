import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import { Message } from '../../store/types';

const useStyles = makeStyles({
  cardAlignLeft: {
    width: '70%',
    borderRadius: 20,
    borderBottomLeftRadius: 0,
    alignSelf: 'flex-start',
    margin: 10,
  },
  cardAlignRight: {
    width: '70%',
    borderRadius: 20,
    borderBottomRightRadius: 0,
    alignSelf: 'flex-end',
    margin: 10,
  },
  cardAlignCenter: {
    textAlign: 'center',
    width: '90%',
    alignSelf: 'center',
    color: '#3f51b5',
    margin: 10,
    paddingBottom: '5px',
  },
  cardContent: {
    padding: 10,
  },
  title: {
    fontSize: '1rem',
  },
  time: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
});

interface Props {
  message: Message;
  currentUser: string;
}

export const ChatMessage: React.FC<Props> = (props) => {
  const { userName, message, timestamp } = props.message;
  const classes = useStyles();

  const time = new Date(timestamp).toLocaleString();

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
      <div className={classes.cardContent}>
        <Typography className={classes.title} color="textSecondary">
          {userName} says:
        </Typography>
        <Typography variant="body2" component="p">
          {message}
        </Typography>
        <div className={classes.time}>
          <Typography variant="caption" color="textSecondary">
            {time}
          </Typography>
        </div>
      </div>
    </Card>
  );
};
