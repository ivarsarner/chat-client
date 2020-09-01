import React, { useRef, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { Message, User } from '../../store/types';
import { ChatMessage } from './ChatMessage';

const useStyles = makeStyles({
  root: {
    overflow: 'auto',
  },
  chatFeed: {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    marginBottom: 5,
    wordBreak: 'break-all',
  },
});

interface Props {
  messages: Message[];
  currentUser: User;
}

export const ChatFeed: React.FC<Props> = ({ messages, currentUser }) => {
  const classes = useStyles();

  const chatFeedRef = useRef<HTMLDivElement>(null);

  const scrollToChatBottom = (): void => {
    if (chatFeedRef.current) {
      const scrollValue = chatFeedRef.current.scrollHeight;
      console.log(scrollValue);
      chatFeedRef.current.scroll({
        top: scrollValue,
        left: 0,
        behavior: 'smooth',
      });
    }
  };

  useEffect(() => {
    if (chatFeedRef.current) {
      scrollToChatBottom();
    }
  }, [messages]);

  return (
    <div className={classes.root} ref={chatFeedRef}>
      <div className={classes.chatFeed}>
        {messages.map((message) => (
          <ChatMessage
            key={message.id}
            message={message}
            currentUser={currentUser.userName}
          />
        ))}
      </div>
    </div>
  );
};
