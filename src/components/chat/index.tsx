import React from 'react';
import { Paper, Grid } from '@material-ui/core/';
import { makeStyles } from '@material-ui/core/styles';
import { ChatState, Message, User } from '../../store/types';
import { ChatHeader } from './ChatHeader';
import { ChatFeed } from './ChatFeed';
import { ChatForm } from './ChatForm';
import { connectUser } from '../../store/actions';

const useStyles = makeStyles((theme) => ({
  gridContainerRoot: {
    flexGrow: 1,
    display: 'flex',
    justifyContent: 'center',
  },
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
  },
  chatMainContainer: {
    height: 400,
    display: 'flex',
    flexDirection: 'column',
  },
}));

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

const ChatWrapper: React.FC<Props> = ({
  currentUser,
  messages,
  connectedUsers,
  chatActions,
}) => {
  const classes = useStyles();

  return (
    <div className={classes.gridContainerRoot}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <ChatHeader
              userName={currentUser.userName}
              onClick={chatActions.disconnectUser}
            />
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper className={classes.paper}>
            <div className={classes.chatMainContainer}>
              <ChatFeed messages={messages} />
              <ChatForm sendMessage={chatActions.sendMessage} />
            </div>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper className={classes.paper}>
            Users in connected: {connectedUsers.length}
            <div>
              {connectedUsers.map((user) => (
                <div key={user.id}>{user.userName}</div>
              ))}
            </div>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default ChatWrapper;

/* const useStyles = makeStyles({
  chatContainer: {
    height: 400,
    display: 'flex',
    flexDirection: 'column',
  },
  chatHeader: {
    marginBottom: 5,
  },
  chatFeed: {
    flexGrow: 1,
    marginBottom: 5,
    backgroundColor: 'lightgray',
    overflow: 'auto',
    wordBreak: 'break-all',
  },
  chatForm: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  chatFormInput: {
    width: '75%',
  },
  chatFormSendBtn: {
    width: '20%',
  },
});

const chatFeedRef: any = useRef(null);
const chatFeedCurrent = chatFeedRef.current;

const handleSubmit = (e: any) => {
  e.preventDefault();
  socket.emit('message', {
    socketId,
    message,
  });
  setMessage('');
};

const shouldScroll = true;

const scrollToChatBottom = () => {
  const scrollValue = chatFeedCurrent.scrollHeight;
  const scrollOptions = { top: scrollValue, left: 0, behavior: 'smooth' };
  chatFeedCurrent.scroll(scrollOptions);
};

   const handleScroll = (e: any) => {
    const chatFeed = chatFeedRef.current;
    const diff = 276;
    const top = Math.floor(chatFeed.scrollTop);
    const height = Math.floor(chatFeed.scrollHeight);

    const chatIsAtBottom = top === height - diff ? true : false

    if (chatIsAtBottom) {
      console.log('chat is at bottom')
      shouldScroll = true;
    } else {
      console.log('chat is NOTNOTNOT at bottom')
      shouldScroll = false;
    }
  }; */

/* useEffect(() => {
    socket.connect();
    socket.on('id', (id: number) => setSocketId(id));
    socket.on('message', ({ socketId, message }: any) =>
      setChatData((prevstate: any) => [...prevstate, { socketId, message }])
    );
  }, []);

  useEffect(() => {
    if (shouldScroll) {
      scrollToChatBottom();
    }
  }, [chatData]);

return (
    <>
       <div className={classes.chatContainer}>
        <div className={classes.chatHeader}>
          <Typography variant="h6" gutterBottom>
            General chat
          </Typography>
          {socketId && (
            <span>
              Your chat id is: <strong>{socketId}</strong>
            </span>
          )}
        </div>

        <div className={classes.chatFeed} ref={chatFeedRef}>
          {chatData &&
            chatData.map((item: any, index: number) => (
              <div key={index}>
                <div>
                  <strong>{item.socketId}</strong>
                </div>
                <div>{item.message}</div>
              </div>
            ))}
        </div>

        <form
          className={classes.chatForm}
          noValidate
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          <TextField
            className={classes.chatFormInput}
            autoFocus
            rows={2}
            rowsMax={2}
            value={message}
            placeholder="Message here..."
            onChange={(e: any) => setMessage(e.target.value)}
            variant="outlined"
          />
          <Button
            type="submit"
            className={classes.chatFormSendBtn}
            variant="contained"
            color="primary"
          >
            Send
          </Button>
        </form>
      </div>
      <div>chatcomponent</div>
    </>
  );
  */
