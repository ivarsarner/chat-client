import React, { useRef, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { Message } from '../../store/types';

const useStyles = makeStyles({
  chatFeed: {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    marginBottom: 5,
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

  /*   const scrollToChatBottom = (): void => {
    if (chatFeedRef.current) {
      const chatFeedCurrent = chatFeedRef.current;
      const scrollValue = chatFeedCurrent.scrollHeight;
      const scrollOptions = { top: scrollValue, left: 0, behavior: 'smooth' };
      chatFeedCurrent.scroll(scrollOptions);
    }
  };

  useEffect(() => {
    scrollToChatBottom();
  }, [messages]); */

  return (
    <div className={classes.chatFeed} ref={chatFeedRef}>
      {messages.length === 0 ? (
        <div>No messages in chat</div>
      ) : (
        messages.map((message: Message) => (
          <div key={message.id}>
            <div>
              <strong>{message.userName}</strong>
            </div>
            <div>{message.message}</div>
          </div>
        ))
      )}
    </div>
  );
};
