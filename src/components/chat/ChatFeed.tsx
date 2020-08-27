import React, { useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { Message } from '../../store/types';

const useStyles = makeStyles({
  chatFeed: {
    flexGrow: 1,
    marginBottom: 5,
    backgroundColor: 'lightgray',
    overflow: 'auto',
    wordBreak: 'break-all',
  },
});

interface Props {
  messages: Message[];
}

export const ChatFeed: React.FC<Props> = ({ messages }) => {
  const classes = useStyles();

  const chatFeedRef = useRef<HTMLDivElement>(null);

  return (
    <div className={classes.chatFeed} ref={chatFeedRef}>
      {messages.length === 0 ? (
        <div>No messages in chat</div>
      ) : (
        messages.map((message: Message) => (
          <div key={message.id}>
            <div>
              <strong>{message.author}</strong>
            </div>
            <div>{message.message}</div>
          </div>
        ))
      )}
    </div>
  );
};
