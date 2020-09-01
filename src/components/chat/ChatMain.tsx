import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {
  makeStyles,
  useTheme,
  Theme,
  createStyles,
} from '@material-ui/core/styles';
import { User, Message } from '../../store/types';
import { ChatFeed } from './ChatFeed';
import { ChatForm } from './ChatForm';
import { ChatTopBar } from './ChatTopBar';
import { userConnected } from '../../store/actions';

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
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
    },
  })
);

interface ChatActions {
  disconnectUser: () => void;
  sendMessage: (message: string) => void;
  isTyping: () => void;
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
        <div className={classes.chatFeedWrapper}>
          <ChatFeed messages={messages} currentUser={currentUser} />
          <ChatForm submit={chatActions.sendMessage} />
        </div>
      </main>
    </div>
  );
};
