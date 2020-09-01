import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';

import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { User, Message } from '../../store/types';
import { ChatFeed } from './ChatFeed';
import { ChatForm } from './ChatForm';
import { ChatTopBar } from './ChatTopBar';
import { ChatTypingUsers } from './ChatTypingUsers';

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      height: '100%',
    },
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
      width: drawerWidth,
    },
    content: {
      display: 'flex',
      flexDirection: 'column',
      flexGrow: 1,
      padding: theme.spacing(3),
      height: '100%',
    },
    chatFeedWrapper: {
      height: '90%',
      maxHeight: '90vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
    },
  })
);

interface ChatActions {
  disconnectUser: () => void;
  sendMessage: (message: string) => void;
  isTyping: (typing: boolean) => void;
}

interface Props {
  currentUser: User;
  messages: Message[];
  connectedUsers: User[];
  typingUsers: User[];
  chatActions: ChatActions;
}

export const ChatMain: React.FC<Props> = ({
  currentUser,
  messages,
  connectedUsers,
  chatActions,
  typingUsers,
}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <ChatTopBar
        userName={currentUser.userName}
        connectedUsers={connectedUsers}
        onClick={chatActions.disconnectUser}
      />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <ChatTypingUsers typingUsers={typingUsers} />
        <div className={classes.chatFeedWrapper}>
          <ChatFeed messages={messages} currentUser={currentUser} />
          <ChatForm
            submit={chatActions.sendMessage}
            isTyping={chatActions.isTyping}
          />
        </div>
      </main>
    </div>
  );
};
